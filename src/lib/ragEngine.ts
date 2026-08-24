// ============================================================
// RAG Engine — Retrieval-Augmented Generation for Portfolio Chatbot
// Using OpenRouter API (OpenAI-compatible) with multi-LLM fallback
// ============================================================

import { portfolioKnowledgeBase, KnowledgeChunk } from "@/data/portfolioKnowledgeBase";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface OpenRouterMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

// ─────────────────────────────────────────────
// OpenRouter Model Fallback Chain
// Primary → Fallback1 → Fallback2
// ─────────────────────────────────────────────
const MODEL_FALLBACK_CHAIN = [
  "anthropic/claude-3.5-sonnet",
  "openai/gpt-4o-mini",
  "google/gemini-flash-1.5",
];

// ─────────────────────────────────────────────
// TF-IDF Style Chunk Retrieval
// ─────────────────────────────────────────────

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function scoreChunk(chunk: KnowledgeChunk, queryTokens: string[]): number {
  const keywordTokens = chunk.keywords.join(" ").toLowerCase();
  const contentTokens = chunk.content.toLowerCase();
  const titleTokens = chunk.title.toLowerCase();

  let score = 0;

  for (const token of queryTokens) {
    // Keyword match — highest weight
    if (keywordTokens.includes(token)) {
      score += 3;
    }
    // Title match — medium weight
    if (titleTokens.includes(token)) {
      score += 2;
    }
    // Content match — base weight
    if (contentTokens.includes(token)) {
      score += 1;
    }
  }

  return score;
}

/**
 * Retrieves the most relevant knowledge chunks for a user query.
 * Returns top-N chunks sorted by relevance score.
 */
export function retrieveChunks(query: string, topN = 4): KnowledgeChunk[] {
  const queryTokens = tokenize(query);

  if (queryTokens.length === 0) {
    // Return overview chunks if query is empty
    return portfolioKnowledgeBase.slice(0, 3);
  }

  const scored = portfolioKnowledgeBase.map((chunk) => ({
    chunk,
    score: scoreChunk(chunk, queryTokens),
  }));

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
    .map((s) => s.chunk);
}

// ─────────────────────────────────────────────
// System Prompt Builder
// ─────────────────────────────────────────────

const SYSTEM_PROMPT = `You are Joshua Odigbo's personal AI assistant embedded in his developer portfolio website. Your sole purpose is to help employers, recruiters, and potential clients learn about Joshua's professional background, skills, experience, projects, and availability.

INSTRUCTIONS:
1. Answer questions about Joshua using ONLY the context provided below. Do not invent or hallucinate information.
2. Be warm, professional, and enthusiastic about Joshua's work — you are his advocate.
3. Keep answers concise but complete — use bullet points and formatting for readability.
4. If a question is outside your knowledge context (e.g., very personal questions, opinions on unrelated topics), politely redirect to relevant professional information.
5. Always encourage the visitor to reach out directly for opportunities: joshua.odigbo@jcoteck.com.ng
6. Use markdown formatting (bold, bullets, headers) for clear, readable responses.
7. Be conversational and engaging — you are talking to a potential employer.`;

/**
 * Builds the full messages array for the OpenRouter API call.
 */
export function buildMessages(
  userMessage: string,
  chatHistory: ChatMessage[],
  retrievedChunks: KnowledgeChunk[]
): OpenRouterMessage[] {
  const contextBlock =
    retrievedChunks.length > 0
      ? `\n\n## RELEVANT CONTEXT ABOUT JOSHUA:\n\n${retrievedChunks
          .map((c) => `### ${c.title}\n${c.content}`)
          .join("\n\n---\n\n")}`
      : "";

  const systemContent = SYSTEM_PROMPT + contextBlock;

  const messages: OpenRouterMessage[] = [
    { role: "system", content: systemContent },
  ];

  // Include last 8 messages of chat history for context window efficiency
  const recentHistory = chatHistory.slice(-8);
  for (const msg of recentHistory) {
    messages.push({ role: msg.role, content: msg.content });
  }

  messages.push({ role: "user", content: userMessage });

  return messages;
}

// ─────────────────────────────────────────────
// OpenRouter Streaming API Call
// ─────────────────────────────────────────────

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1/chat/completions";

/**
 * Streams a response from OpenRouter API with model fallback.
 * Yields text chunks as they arrive from the streaming API.
 */
export async function* streamOpenRouterResponse(
  messages: OpenRouterMessage[],
  apiKey: string
): AsyncGenerator<string> {
  let lastError: Error | null = null;

  for (const model of MODEL_FALLBACK_CHAIN) {
    try {
      const response = await fetch(OPENROUTER_BASE_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Joshua Odigbo Portfolio Chatbot",
        },
        body: JSON.stringify({
          model,
          messages,
          stream: true,
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`OpenRouter API error (${response.status}): ${errText}`);
      }

      if (!response.body) {
        throw new Error("No response body from OpenRouter API");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed === "data: [DONE]") continue;
          if (!trimmed.startsWith("data: ")) continue;

          try {
            const json = JSON.parse(trimmed.slice(6));
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) yield delta;
          } catch {
            // Skip malformed chunks
          }
        }
      }

      // Success — no need to try fallback models
      return;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      console.warn(`[RAG] Model ${model} failed, trying next...`, lastError.message);
      // Continue to next model in fallback chain
    }
  }

  // All models failed — throw the last error
  throw lastError ?? new Error("All OpenRouter models failed");
}

// ─────────────────────────────────────────────
// Keyword-Only Fallback (no API key)
// ─────────────────────────────────────────────

/**
 * Generates a local answer using only retrieved chunks when no API key is available.
 * Returns a structured response string based on the best matching chunk.
 */
export function generateLocalFallbackAnswer(
  query: string,
  chunks: KnowledgeChunk[]
): string {
  if (chunks.length === 0) {
    return `I couldn't find specific information about that in my knowledge base. For the most accurate information about Joshua, please reach out directly:

📧 **Email:** joshua.odigbo@jcoteck.com.ng
💼 **LinkedIn:** [linkedin.com/in/joshua-odigbo-80251a218](https://www.linkedin.com/in/joshua-odigbo-80251a218)`;
  }

  const topChunk = chunks[0];
  return `${topChunk.content}

---
*💡 For more details, feel free to reach out to Joshua directly at **joshua.odigbo@jcoteck.com.ng***`;
}

// ─────────────────────────────────────────────
// Main RAG Query Function
// ─────────────────────────────────────────────

/**
 * Main entry point for the RAG chatbot.
 * Retrieves relevant chunks, builds the prompt, and streams the LLM response.
 * Falls back to local answer if no API key is provided.
 */
export async function* ragQuery(
  userMessage: string,
  chatHistory: ChatMessage[]
): AsyncGenerator<string> {
  // Step 1: Retrieve relevant chunks
  const chunks = retrieveChunks(userMessage);

  // Step 2: Check for API key
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY as string | undefined;

  if (!apiKey) {
    // Fallback: return local keyword-matched answer
    yield generateLocalFallbackAnswer(userMessage, chunks);
    return;
  }

  // Step 3: Build messages with context
  const messages = buildMessages(userMessage, chatHistory, chunks);

  // Step 4: Stream response from OpenRouter
  try {
    yield* streamOpenRouterResponse(messages, apiKey);
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[RAG] Fatal error:", errorMsg);

    // Graceful degradation to local fallback
    yield `I'm having trouble connecting to my AI backend right now. Here's what I know:\n\n${generateLocalFallbackAnswer(userMessage, chunks)}`;
  }
}
