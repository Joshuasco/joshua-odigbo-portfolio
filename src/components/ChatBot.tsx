import { useState, useRef, useEffect, useCallback } from "react";
import {
  MessageSquare, X, Send, Minimize2, ChevronDown,
  Bot, User, Sparkles, Loader2, Trash2, RotateCcw,
} from "lucide-react";
import { ragQuery, ChatMessage } from "@/lib/ragEngine";
import { suggestedQuestions } from "@/data/portfolioKnowledgeBase";

// ─────────────────────────────────────────────
// Lightweight Markdown Renderer (no extra deps)
// ─────────────────────────────────────────────
function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, '<code class="cb-code">$1</code>')
    .replace(/^### (.+)$/gm, '<p class="cb-h3">$1</p>')
    .replace(/^## (.+)$/gm, '<p class="cb-h2">$1</p>')
    .replace(/^---$/gm, '<hr class="cb-hr" />')
    .replace(/^[-•*] (.+)$/gm, '<span class="cb-li"><span class="cb-bullet">▸</span>$1</span>')
    .replace(/^\d+\. (.+)$/gm, '<span class="cb-li"><span class="cb-bullet">▸</span>$1</span>')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="cb-link">$1 ↗</a>'
    )
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br />");
}

// ─────────────────────────────────────────────
// Message Bubble
// ─────────────────────────────────────────────
interface MsgType extends ChatMessage {
  isStreaming?: boolean;
  id: number;
}

const MessageBubble = ({ message }: { message: MsgType }) => {
  const isBot = message.role === "assistant";
  const isEmpty = !message.content && message.isStreaming;

  return (
    <div className={`flex items-end gap-2 mb-3 ${isBot ? "justify-start" : "justify-end"}`}>
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[hsl(175,80%,50%)] to-[hsl(200,90%,55%)] flex items-center justify-center shrink-0 mb-0.5 shadow-md shadow-[hsl(175,80%,50%)/0.25]">
          <Bot size={13} className="text-[hsl(222,47%,6%)]" />
        </div>
      )}

      <div
        className={`max-w-[83%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
          isBot
            ? "bg-[hsl(222,30%,13%)] border border-[hsl(222,30%,20%)] text-[hsl(210,40%,90%)] rounded-bl-sm"
            : "bg-gradient-to-br from-[hsl(175,80%,43%)] to-[hsl(195,85%,48%)] text-[hsl(222,47%,6%)] font-medium rounded-br-sm shadow-md"
        }`}
      >
        {isEmpty ? (
          /* Typing dots while awaiting first token */
          <div className="flex gap-1 items-center h-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(175,80%,50%)] animate-bounce [animation-delay:0ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(175,80%,50%)] animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(175,80%,50%)] animate-bounce [animation-delay:300ms]" />
          </div>
        ) : isBot ? (
          <div
            className="cb-content"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
          />
        ) : (
          <p className="whitespace-pre-wrap">{message.content}</p>
        )}
        {message.isStreaming && message.content && (
          <span className="cb-cursor">▋</span>
        )}
      </div>

      {!isBot && (
        <div className="w-7 h-7 rounded-full bg-[hsl(222,30%,18%)] border border-[hsl(222,30%,26%)] flex items-center justify-center shrink-0 mb-0.5">
          <User size={13} className="text-[hsl(210,40%,70%)]" />
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────
// Main ChatBot Component
// ─────────────────────────────────────────────
const INITIAL_MESSAGE: MsgType = {
  id: 0,
  role: "assistant",
  content:
    "👋 Hi! I'm Joshua's AI assistant.\n\nAsk me anything about his **skills**, **experience**, **projects**, **availability**, or how to **contact** him. I'm here to help!",
};

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<MsgType[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [hasUnread, setHasUnread] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef(false);
  const idRef = useRef(1);

  const nextId = () => idRef.current++;

  /* Auto-scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* Focus input on open */
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isOpen, isMinimized]);

  /* Unread badge when closed */
  useEffect(() => {
    if (!isOpen && messages.length > 1) setHasUnread(true);
  }, [messages, isOpen]);

  /* ── Send message ── */
  const sendMessage = useCallback(
    async (userText: string) => {
      if (!userText.trim() || isLoading) return;

      setShowSuggestions(false);
      abortRef.current = false;

      const userMsg: MsgType = { id: nextId(), role: "user", content: userText.trim() };
      const history = messages.filter((m) => !m.isStreaming) as ChatMessage[];

      setMessages((prev) => [...prev, userMsg]);
      setInput("");-
      setIsLoading(true);

      const streamId = nextId();
      setMessages((prev) => [
        ...prev,
        { id: streamId, role: "assistant", content: "", isStreaming: true },
      ]);

      try {
        let full = "";
        for await (const chunk of ragQuery(userText.trim(), history)) {
          if (abortRef.current) break;
          full += chunk;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === streamId ? { ...m, content: full } : m
            )
          );
        }
        setMessages((prev) =>
          prev.map((m) =>
            m.id === streamId ? { ...m, isStreaming: false, content: full } : m
          )
        );
      } catch {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === streamId
              ? {
                  ...m,
                  isStreaming: false,
                  content:
                    "⚠️ Something went wrong. Please try again, or email Joshua directly at **joshua.odigbo@jcoteck.com.ng**",
                }
              : m
          )
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleOpen = () => {
    setIsEntering(true);
    setIsOpen(true);
    setIsMinimized(false);
    setHasUnread(false);
    setTimeout(() => setIsEntering(false), 350);
  };

  const handleClose = () => {
    abortRef.current = true;
    setIsOpen(false);
  };

  const handleClear = () => {
    abortRef.current = true;
    setIsLoading(false);
    setMessages([INITIAL_MESSAGE]);
    setShowSuggestions(true);
    setInput("");
  };

  /* ── Keyboard: Enter to send, Escape to close ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  return (
    <>
      {/* ── Scoped Styles ── */}
      <style>{`
        .cb-content p { margin-bottom: 0.45em; }
        .cb-content p:last-child { margin-bottom: 0; }
        .cb-content strong { color: hsl(175,80%,62%); font-weight: 600; }
        .cb-content em { color: hsl(210,40%,78%); font-style: italic; }
        .cb-h2 { font-size: 0.875em; font-weight: 700; color: hsl(175,80%,62%); margin: 0.8em 0 0.3em !important; }
        .cb-h3 { font-size: 0.825em; font-weight: 700; color: hsl(175,80%,55%); margin: 0.6em 0 0.2em !important; }
        .cb-hr { border: none; border-top: 1px solid hsl(222,30%,22%); margin: 0.6em 0; }
        .cb-li { display: flex; gap: 0.5em; padding: 0.1em 0; align-items: flex-start; }
        .cb-bullet { color: hsl(175,80%,52%); flex-shrink: 0; font-size: 0.75em; margin-top: 0.15em; }
        .cb-code { background: hsl(222,47%,11%); border: 1px solid hsl(222,30%,22%); border-radius: 3px; padding: 0 5px; font-family: monospace; font-size: 0.82em; color: hsl(175,80%,62%); }
        .cb-link { color: hsl(175,80%,58%); text-decoration: underline; text-underline-offset: 2px; transition: color 0.15s; }
        .cb-link:hover { color: hsl(175,80%,72%); }
        .cb-cursor { animation: cb-blink 1s step-end infinite; color: hsl(175,80%,52%); }
        @keyframes cb-blink { 0%,100%{ opacity:1 } 50%{ opacity:0 } }
        .cb-scroll::-webkit-scrollbar { width: 3px; }
        .cb-scroll::-webkit-scrollbar-track { background: transparent; }
        .cb-scroll::-webkit-scrollbar-thumb { background: hsl(222,30%,22%); border-radius: 2px; }
        .cb-scroll::-webkit-scrollbar-thumb:hover { background: hsl(222,30%,32%); }
        .cb-enter { animation: cb-slide-up 0.32s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes cb-slide-up {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      {/* ── Floating Trigger ── */}
      {!isOpen && (
        <button
          id="chatbot-trigger"
          onClick={handleOpen}
          aria-label="Open AI chatbot"
          className="fixed bottom-6 right-6 z-50 group"
          style={{ position: "fixed" }}
        >
          {/* Relative wrapper so badge + tooltip are positioned to the button */}
          <span className="relative block">
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[hsl(175,80%,50%)] opacity-25 animate-ping" />
            {/* Main icon circle */}
            <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(175,80%,50%)] to-[hsl(200,90%,55%)] shadow-xl shadow-[hsl(175,80%,50%)/0.35] text-[hsl(222,47%,6%)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[hsl(175,80%,50%)/0.5]">
              <MessageSquare size={22} />
            </span>
            {/* Unread badge */}
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-[hsl(222,47%,6%)] flex items-center justify-center text-[10px] font-bold text-white animate-bounce">
                !
              </span>
            )}
            {/* Hover tooltip */}
            <span className="absolute bottom-full right-0 mb-2.5 px-3 py-1.5 rounded-lg bg-[hsl(222,30%,13%)] border border-[hsl(222,30%,22%)] text-[11px] text-[hsl(210,40%,85%)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
              Ask about Joshua ✨
            </span>
          </span>
        </button>
      )}

      {/* ── Chat Window ── */}
      {isOpen && (
        <div
          id="chatbot-window"
          className={`fixed z-50 bottom-0 right-0 sm:bottom-6 sm:right-6 ${isEntering ? "cb-enter" : ""}`}
          style={{ width: "min(420px, 100vw)", height: isMinimized ? "auto" : "min(600px, 100dvh)" }}
        >
          <div
            className={`flex flex-col h-full w-full overflow-hidden border border-[hsl(222,30%,20%)] shadow-2xl shadow-black/60 transition-all duration-300 ${
              isMinimized ? "rounded-2xl" : "rounded-none sm:rounded-2xl"
            }`}
            style={{ background: "hsl(222,47%,7%)" }}
          >
            {/* ── Header ── */}
            <div className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-[hsl(222,30%,15%)] bg-[hsl(222,47%,8%)]">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[hsl(175,80%,45%)] to-[hsl(200,90%,50%)] flex items-center justify-center shadow-lg shadow-[hsl(175,80%,50%)/0.3]">
                    <Sparkles size={16} className="text-[hsl(222,47%,6%)]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[hsl(222,47%,8%)]" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[hsl(210,40%,96%)] leading-tight">
                    Joshua's AI Assistant
                  </p>
                  <p className="text-[11px] text-[hsl(175,80%,55%)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Agent Josh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                {/* Clear chat */}
                <button
                  onClick={handleClear}
                  aria-label="Clear conversation"
                  title="Clear chat"
                  className="p-1.5 rounded-lg hover:bg-[hsl(222,30%,16%)] text-[hsl(215,20%,45%)] hover:text-[hsl(210,40%,75%)] transition-colors"
                >
                  <Trash2 size={14} />
                </button>
                {/* Minimize */}
                <button
                  onClick={() => setIsMinimized((v) => !v)}
                  aria-label={isMinimized ? "Expand" : "Minimize"}
                  className="p-1.5 rounded-lg hover:bg-[hsl(222,30%,16%)] text-[hsl(215,20%,45%)] hover:text-[hsl(210,40%,75%)] transition-colors"
                >
                  {isMinimized ? (
                    <ChevronDown size={15} className="rotate-180" />
                  ) : (
                    <Minimize2 size={15} />
                  )}
                </button>
                {/* Close */}
                <button
                  onClick={handleClose}
                  aria-label="Close chat"
                  className="p-1.5 rounded-lg hover:bg-[hsl(222,30%,16%)] text-[hsl(215,20%,45%)] hover:text-red-400 transition-colors"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* ── Body ── */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-3.5 pt-4 pb-2 cb-scroll">
                  {/* Suggested questions — shown only before first user msg */}
                  {showSuggestions && messages.length <= 1 && (
                    <div className="mb-5">
                      <p className="text-[10px] font-medium uppercase tracking-widest text-[hsl(215,20%,45%)] mb-2.5">
                        Quick questions
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {suggestedQuestions.map((q) => (
                          <button
                            key={q}
                            onClick={() => sendMessage(q)}
                            className="text-[11px] px-2.5 py-1.5 rounded-full border border-[hsl(222,30%,22%)] bg-[hsl(222,30%,11%)] text-[hsl(210,40%,70%)] hover:border-[hsl(175,80%,38%)] hover:text-[hsl(175,80%,62%)] hover:bg-[hsl(175,80%,50%)/0.07] transition-all duration-200"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                  ))}

                  <div ref={messagesEndRef} />
                </div>

                <div className="h-px bg-[hsl(222,30%,13%)] shrink-0" />

                {/* Input */}
                <div className="shrink-0 px-3 py-3 bg-[hsl(222,47%,7%)]">
                  {/* Re-show suggestions hint */}
                  {!showSuggestions && messages.length > 1 && !isLoading && (
                    <button
                      onClick={() => setShowSuggestions(true)}
                      className="flex items-center gap-1 text-[10px] text-[hsl(215,20%,42%)] hover:text-[hsl(175,80%,55%)] mb-2 transition-colors"
                    >
                      <RotateCcw size={10} />
                      Show suggested questions
                    </button>
                  )}

                  <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      id="chatbot-input"
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask anything about Joshua…"
                      disabled={isLoading}
                      autoComplete="off"
                      className="flex-1 px-3.5 py-2.5 rounded-xl bg-[hsl(222,30%,11%)] border border-[hsl(222,30%,19%)] text-[13px] text-[hsl(210,40%,92%)] placeholder-[hsl(215,20%,38%)] focus:outline-none focus:border-[hsl(175,80%,38%)] focus:ring-1 focus:ring-[hsl(175,80%,38%)/0.25] transition-all duration-200 disabled:opacity-50"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      id="chatbot-send"
                      aria-label="Send"
                      className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[hsl(175,80%,45%)] to-[hsl(200,90%,50%)] text-[hsl(222,47%,6%)] flex items-center justify-center transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[hsl(175,80%,50%)/0.3] disabled:opacity-35 disabled:scale-100 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <Loader2 size={15} className="animate-spin" />
                      ) : (
                        <Send size={15} />
                      )}
                    </button>
                  </form>

                  <p className="text-center text-[10px] text-[hsl(215,20%,32%)] mt-2">
                    AI responses · Based on Joshua's professional profile
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
