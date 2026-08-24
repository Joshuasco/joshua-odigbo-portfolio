// ============================================================
// Joshua Odigbo — Portfolio Knowledge Base for RAG Chatbot
// ============================================================
// Each chunk is a retrievable piece of knowledge with
// associated keywords for TF-IDF-style retrieval.
// ============================================================

export interface KnowledgeChunk {
  id: string;
  category: string;
  title: string;
  content: string;
  keywords: string[];
}

export const portfolioKnowledgeBase: KnowledgeChunk[] = [
  // ─────────────────────────────────────────────
  // IDENTITY & SUMMARY
  // ─────────────────────────────────────────────
  {
    id: "identity-summary",
    category: "Identity",
    title: "Who is Joshua Odigbo",
    content: `Joshua Odigbo is a Full-Stack Software Engineer with over 5 years of hands-on professional experience designing, building, and scaling modern web applications. He is based remotely and is currently open to new opportunities — both full-time employment and freelance/contract work.

He specializes in end-to-end product development, meaning he can take a project from concept through UI design, frontend implementation, backend API development, database architecture, deployment, and ongoing maintenance. He has the rare ability to lead as either a Frontend Engineer or a Backend Engineer and is equally comfortable in both disciplines.

Joshua is passionate about writing clean, maintainable code, solving real-world problems through technology, and delivering products that genuinely help users. He has collaborated with startups, agencies, and enterprise-level teams across multiple industries including fintech, healthcare, e-commerce, and events.`,
    keywords: ["who", "joshua", "odigbo", "about", "summary", "introduction", "overview", "profile", "developer", "engineer", "full stack", "fullstack"],
  },

  // ─────────────────────────────────────────────
  // PROFESSIONAL EXPERIENCE
  // ─────────────────────────────────────────────
  {
    id: "experience-overview",
    category: "Experience",
    title: "Professional Experience Overview",
    content: `Joshua Odigbo has 5+ years of professional software development experience. Here is a summary of his key roles and experience:

1. **Lead Developer at Jcoteck** — Built and maintains the company's entire technology infrastructure including the company website (jcoteck.com.ng), the JcoteckVTU platform (fintech), and internal tools. He architected the full system from scratch and serves as the primary technical decision-maker.

2. **Full-Stack Developer — Depals Care Foundation** — Designed and developed a community management and analytics platform for elderly care volunteers and participants, featuring dashboards, reporting, user management, and chat/call integration.

3. **Lead Developer — TXA26 Event Platform** — Architected and built the full-stack platform for TechX Africa 26, an annual tech conference empowering African youth. The platform handles event management, ticketing, merchandise purchases, and payment processing.

4. **Backend Developer — Circuit Hub Ecommerce Platform** — Contributed as backend lead on a full-featured e-commerce platform with real-time inventory management, analytics, admin dashboard, and logistics/tracking features.

5. **Full-Stack Developer — Freelance & Startup Collaborations** — Delivered multiple products for clients across various industries, including SaaS platforms, API services, and community tools. Consistently exceeds client expectations in code quality, delivery timelines, and feature completeness.

His experience spans product conceptualization, technical architecture, team leadership, code review, deployment, and post-launch maintenance.`,
    keywords: ["experience", "work", "job", "career", "employment", "history", "professional", "years", "roles", "positions", "lead", "developer"],
  },

  // ─────────────────────────────────────────────
  // SKILLS — FRONTEND
  // ─────────────────────────────────────────────
  {
    id: "skills-frontend",
    category: "Skills",
    title: "Frontend Development Skills",
    content: `Joshua is highly proficient in frontend development and can serve as a dedicated Frontend Engineer. His frontend skills include:

**Core Technologies:**
- React.js (95% proficiency) — advanced hooks, context, performance optimization, component architecture
- JavaScript/ES6+ (95%) — deep understanding of the language, async patterns, functional programming
- TypeScript (88%) — strong typing, generics, interfaces, advanced patterns
- Next.js (75%) — SSR, SSG, API routes, App Router
- HTML5 & CSS3 — semantic markup, accessibility (WCAG), advanced layouts
- TailwindCSS (90%) — utility-first styling, custom design systems, responsive design
- CSS3 / Vanilla CSS — animations, grid, flexbox, custom properties

**UI Libraries & Tools:**
- shadcn/ui, Radix UI — accessible component systems
- Framer Motion — complex animations and page transitions
- Recharts / Chart.js — data visualization dashboards
- Embla Carousel, react-hook-form, zod (form validation)

**State & Data Fetching:**
- TanStack Query (React Query) — server state management, caching, optimistic updates
- Zustand, React Context — client state management
- REST API integration, WebSocket connections

Joshua builds pixel-perfect, responsive interfaces that work seamlessly across all screen sizes and browsers. He strongly emphasizes performance optimization, accessibility, and great user experience.`,
    keywords: ["frontend", "react", "javascript", "typescript", "nextjs", "next.js", "tailwind", "css", "html", "ui", "interface", "design", "component"],
  },

  // ─────────────────────────────────────────────
  // SKILLS — BACKEND
  // ─────────────────────────────────────────────
  {
    id: "skills-backend",
    category: "Skills",
    title: "Backend Development Skills",
    content: `Joshua is equally strong as a Backend Engineer and can serve as a dedicated backend developer. His backend expertise includes:

**Primary Languages & Frameworks:**
- Python (93% proficiency) — his strongest backend language
- FastAPI (92%) — high-performance async APIs, dependency injection, OpenAPI docs, Pydantic validation
- Django (90%) — ORM, admin panel, Django REST Framework, signals, middleware
- Node.js / Express.js (75%) — REST APIs, middleware chains, event-driven architecture

**API Design:**
- RESTful API design and best practices (95%)
- Authentication & Authorization: JWT, OAuth 2.0, session management, 2FA
- API versioning, rate limiting, pagination, error handling
- OpenAPI/Swagger documentation
- Third-party API integrations (PayStack, Flutterwave, payment gateways, telecom APIs)

**Core Backend Concepts:**
- Microservices architecture
- Background tasks and async processing
- Websocket real-time communication
- Caching strategies with Redis
- Email services, file handling, cloud storage

Joshua has built production APIs serving real users across fintech, community management, and e-commerce applications. He can architect a backend system from scratch and scale it to meet production demands.`,
    keywords: ["backend", "api", "python", "fastapi", "django", "nodejs", "node", "server", "rest", "endpoint", "database", "authentication", "jwt", "oauth"],
  },

  // ─────────────────────────────────────────────
  // SKILLS — DATABASE
  // ─────────────────────────────────────────────
  {
    id: "skills-database",
    category: "Skills",
    title: "Database & Data Management Skills",
    content: `Joshua has strong expertise in both relational and NoSQL databases:

**Relational Databases:**
- PostgreSQL (90%) — complex queries, indexing, transactions, stored procedures, migrations with Alembic
- MySQL (85%) — production databases, optimization, replication

**NoSQL & Cloud Databases:**
- Firebase / Firestore (88%) — real-time sync, security rules, cloud functions
- MongoDB (80%) — document modeling, aggregation pipeline, Atlas cloud
- Redis (75%) — caching layer, session storage, pub/sub messaging, rate limiting

**Database Design:**
- Schema design and normalization
- Query optimization and performance tuning
- Database migrations and version control
- Data modeling for complex business requirements
- Backup strategies and disaster recovery

He regularly makes database technology choices based on the specific project requirements (e.g., choosing PostgreSQL for complex relational data, Firebase for real-time apps, Redis for high-performance caching).`,
    keywords: ["database", "db", "postgresql", "postgres", "mysql", "mongodb", "firebase", "redis", "sql", "nosql", "data", "storage"],
  },

  // ─────────────────────────────────────────────
  // SKILLS — DEVOPS & TOOLS
  // ─────────────────────────────────────────────
  {
    id: "skills-devops",
    category: "Skills",
    title: "DevOps, Cloud & Tools",
    content: `Joshua has solid DevOps and cloud infrastructure experience:

**Cloud Platforms:**
- AWS (82%) — EC2, S3, RDS, Lambda, CloudFront, IAM, VPC
- Vercel — frontend deployments with CI/CD
- Render — backend service hosting, PostgreSQL managed databases
- Netlify — static site hosting, edge functions
- Heroku — application hosting
- Namecheap — domain management, hosting

**Containerization & CI/CD:**
- Docker (85%) — containerizing applications, Docker Compose for multi-service setups
- Git / GitHub (95%) — version control, branching strategies, pull request workflows
- CI/CD pipelines — GitHub Actions for automated testing and deployment
- Linux (85%) — command line proficiency, shell scripting, server administration

**Development Tools:**
- VS Code, vim — code editors
- Postman / Insomnia — API testing
- pgAdmin, TablePlus — database management
- Figma — reading and implementing design files

Joshua follows DevOps best practices including infrastructure as code, environment separation (dev/staging/prod), secrets management, and automated deployment pipelines.`,
    keywords: ["devops", "aws", "docker", "cloud", "deployment", "ci", "cd", "pipeline", "linux", "git", "github", "vercel", "render", "heroku", "infrastructure"],
  },

  // ─────────────────────────────────────────────
  // PROJECTS
  // ─────────────────────────────────────────────
  {
    id: "project-depals-care",
    category: "Projects",
    title: "Depals Care Foundation Platform",
    content: `**Depals Care Foundation** — Community Management & Analytics Platform

- **Category:** Community Management System
- **Role:** Full-Stack Developer
- **Tech Stack:** React.js, TailwindCSS, FastAPI, PostgreSQL, AWS
- **Live URL:** https://depalscare.vercel.app/

**Description:** A community management and analytics platform designed for elderly care. It manages two user types — participants (elders and aged individuals) and caregivers (volunteers) — with an admin role overseeing the system.

**Key Features:**
- Volunteer-Participant pairing and management system
- Professional dashboard with KPIs and metrics
- Reporting & analytics with data visualization
- User management (registration, roles, permissions)
- Chat & Call Integration for care coordination
- Activity tracking and care logs

**Impact:** Helps care organizations digitize and streamline their operations, improving the quality of service provided to elderly community members.`,
    keywords: ["depals", "care", "foundation", "community", "elderly", "volunteer", "healthcare", "management"],
  },
  {
    id: "project-jcoteck-website",
    category: "Projects",
    title: "Jcoteck Company Website",
    content: `**Jcoteck Company Website** — Full-Featured Corporate Website with E-commerce & Blog

- **Category:** SaaS / Corporate
- **Role:** Lead Developer
- **Tech Stack:** HTML5, CSS3, jQuery, Ajax, Django, PostgreSQL, PayStack, AWS
- **Live URL:** https://jcoteck.com.ng/

**Description:** A comprehensive company website for Jcoteck that combines a corporate presence with e-commerce and a blogging platform. Built for scalability and performance with real-time inventory management and secure payment processing.

**Key Features:**
- Full e-commerce platform with product listings, cart, and checkout
- Real-time inventory tracking and management
- Integrated payment processing with PayStack
- Blogging platform for content marketing
- Comprehensive admin dashboard with analytics
- AWS-hosted for reliability and performance

**Impact:** Jcoteck's primary digital presence, driving business transactions and establishing credibility in the Nigerian tech market.`,
    keywords: ["jcoteck", "company", "website", "ecommerce", "django", "paystack", "blog", "inventory"],
  },
  {
    id: "project-txa26",
    category: "Projects",
    title: "TXA26 TechX Africa Event Platform",
    content: `**TXA26 Event Platform** — Annual Tech Conference Platform for African Youth

- **Category:** Event Platform
- **Role:** Lead Developer
- **Tech Stack:** React, TailwindCSS, Framer Motion, FastAPI, Firebase, Flutterwave
- **Live URL:** https://txa-26.vercel.app

**Description:** The platform for TechX Africa 26, an annual event that empowers young African tech talent through knowledge exchange and capacity building across the continent, connecting professionals and novices.

**Key Features:**
- Real-time event data synchronization with Firebase
- Ticket purchasing with payment integration via Flutterwave
- Merchandise (swag) purchase system
- Smooth animations and transitions with Framer Motion
- REST API backend with FastAPI
- High-traffic capable, optimized for event day spikes

**Impact:** Served as the primary registration and commerce platform for TechX Africa, facilitating pan-African tech community building.`,
    keywords: ["txa26", "techx", "africa", "event", "conference", "platform", "ticket", "flutterwave", "firebase"],
  },
  {
    id: "project-circuit-hub",
    category: "Projects",
    title: "Circuit Hub Ecommerce Platform",
    content: `**Circuit Hub Ecommerce Platform** — Full-Featured Electronics E-commerce System

- **Category:** SaaS / E-commerce
- **Role:** Backend Developer
- **Tech Stack:** React, TailwindCSS, Supabase, JWT, Redis
- **Live URL:** https://circuithub-orcin.vercel.app/

**Description:** A comprehensive e-commerce platform for electronics with real-time inventory management and analytics, secure payment processing, and logistics tracking functionality built for scalability and performance.

**Key Features:**
- Real-time inventory tracking with instant updates
- Analytics dashboard with sales metrics
- Full e-commerce flow (browse, cart, checkout)
- Blogging platform for product reviews and content
- Admin dashboard with order management
- JWT authentication and Redis caching for performance
- Logistics and order tracking integration

**Impact:** Provides a complete digital storefront solution for electronics retailers with enterprise-grade features.`,
    keywords: ["circuit", "hub", "ecommerce", "electronics", "inventory", "supabase", "redis", "shop"],
  },
  {
    id: "project-jcoteckvtu",
    category: "Projects",
    title: "JcoteckVTU Platform",
    content: `**JcoteckVTU** — Virtual Top-Up & Utility Bill Payment Platform

- **Category:** VTU / Fintech
- **Role:** Full-Stack Developer
- **Tech Stack:** React, TailwindCSS, FastAPI, Chart.js, Firebase
- **Live URL:** https://jcoteck-vtu.vercel.app/

**Description:** A virtual top-up platform enabling data purchase, airtime top-up, and utility bill payments. The platform supports API integration for third-party websites and features a full admin dashboard with financial analytics.

**Key Features:**
- Mobile data purchase across all Nigerian networks
- Airtime top-up with tiered discount system for resellers
- Utility bill payments (electricity, cable TV, etc.)
- Third-party API integration support for white-label use
- Real-time transaction tracking and reporting
- Admin dashboard with revenue analytics (Chart.js)
- Reseller upgrade system with automated pricing

**Impact:** Serving real users for telecom and utility payments, with a reseller network enabling additional revenue streams.`,
    keywords: ["vtu", "virtual", "top up", "airtime", "data", "utility", "payment", "fintech", "telecom", "jcoteck"],
  },
  {
    id: "project-skillman",
    category: "Projects",
    title: "SkillMan Authentication API",
    content: `**SkillMan** — Secure, Scalable Authentication Service API

- **Category:** API Platform / Backend Service
- **Role:** Backend Developer
- **Tech Stack:** FastAPI, PostgreSQL, JWT, Redis, Docker
- **Live URL:** https://skileman.onrender.com

**Description:** A production-ready authentication microservice supporting OAuth 2.0, two-factor authentication, and comprehensive session management with full audit logging. Designed to be integrated as an authentication layer for other applications.

**Key Features:**
- OAuth 2.0 implementation for third-party login
- Two-factor authentication (2FA) with TOTP
- JWT-based session management with refresh tokens
- Comprehensive audit logging for security compliance
- Redis-powered session caching for performance
- Dockerized for easy deployment
- Full REST API documentation with OpenAPI/Swagger

**Impact:** A reusable, production-grade authentication service that can be integrated into any application requiring secure user authentication.`,
    keywords: ["skillman", "authentication", "auth", "oauth", "jwt", "2fa", "api", "security", "session"],
  },
  {
    id: "project-portfolio",
    category: "Projects",
    title: "Personal Portfolio Website",
    content: `**Portfolio Website** — Personal Developer Portfolio

- **Category:** Portfolio
- **Role:** Frontend Developer
- **Tech Stack:** React, TailwindCSS, shadcn/ui, EmailJS
- **Live URL:** https://joshuasco.vercel.app

**Description:** The very portfolio you're on right now! A modern, responsive personal portfolio website showcasing Joshua's skills, projects, and contact information to prospective clients and employers.

**Key Features:**
- Responsive design across all screen sizes
- EmailJS integration for contact form
- Interactive project cards with image carousels
- Smooth scroll navigation
- Dark mode design system
- AI-powered chatbot (RAG-based) for employer Q&A
- Performance optimized with Vite

**Purpose:** Serves as Joshua's primary digital presence for attracting employment opportunities and client work.`,
    keywords: ["portfolio", "personal", "website", "showcase", "react", "tailwind", "shadcn"],
  },

  // ─────────────────────────────────────────────
  // EDUCATION
  // ─────────────────────────────────────────────
  {
    id: "education",
    category: "Education",
    title: "Educational Background",
    content: `**Joshua Odigbo — Educational Background**

Joshua has a strong technical foundation built through both formal education and continuous self-learning:

**Formal Education:**
- Studied Computer Science / Software Engineering (details available on request via LinkedIn)
- Strong academic foundation in algorithms, data structures, operating systems, and software engineering principles

**Continuous Learning:**
- Active learner who continuously stays updated with the latest industry trends, frameworks, and best practices
- Regularly completes courses on platforms like Udemy, Coursera, and through official framework documentation
- Follows industry leaders and contributes to the developer community

**Practical Learning:**
- The majority of Joshua's expertise is built through 5+ years of hands-on experience building real production systems
- Believes strongly in learning by doing — every project is an opportunity to master new technologies
- Self-taught in multiple frameworks and tools beyond formal education

His educational approach combines structured learning with intensive practical application, resulting in a developer who deeply understands both theory and real-world implementation.`,
    keywords: ["education", "degree", "university", "school", "academic", "background", "study", "computer science", "qualification"],
  },

  // ─────────────────────────────────────────────
  // CERTIFICATIONS
  // ─────────────────────────────────────────────
  {
    id: "certifications",
    category: "Certifications",
    title: "Certifications & Professional Development",
    content: `**Joshua Odigbo — Certifications & Professional Development**

Joshua continuously invests in professional development through certifications and structured courses:

**Technical Certifications & Training:**
- Completed comprehensive full-stack web development courses covering React, FastAPI, Django, and PostgreSQL
- AWS cloud services training and practical hands-on experience with EC2, S3, RDS, and related services
- Docker and containerization training with practical deployment experience
- REST API design and security best practices certification training
- Python for backend development — advanced courses covering async programming, FastAPI, and Django REST Framework

**Professional Development:**
- Active GitHub profile demonstrating consistent coding practice: github.com/joshuasco
- Builds open-source projects and maintains public repositories showcasing code quality
- Participates in the Nigerian and African tech community (TechX Africa)
- Stays current with industry trends through documentation, technical blogs, and conference talks

**Portfolio of Work as Evidence:**
Joshua's extensive portfolio of live, production applications serves as his primary certification of skill — 7+ shipped products used by real users across multiple industries.`,
    keywords: ["certification", "certificate", "course", "training", "aws", "docker", "professional", "development", "credential"],
  },

  // ─────────────────────────────────────────────
  // SOFT SKILLS & WORK STYLE
  // ─────────────────────────────────────────────
  {
    id: "soft-skills",
    category: "Soft Skills",
    title: "Soft Skills & Work Style",
    content: `**Joshua Odigbo — Soft Skills & Work Style**

Beyond technical expertise, Joshua brings strong professional soft skills:

**Communication:**
- Clear and concise communicator, both written and verbal
- Comfortable explaining complex technical concepts to non-technical stakeholders
- Proactive in providing project updates and flagging blockers early
- Experienced working across different time zones and cultures (remote collaboration)

**Problem-Solving & Critical Thinking:**
- Approaches problems analytically — breaks complex challenges into manageable components
- Strong debugging mindset — systematic and thorough in identifying root causes
- Creative in finding solutions that balance technical constraints with business requirements

**Team Collaboration:**
- Experienced working in agile/scrum environments
- Comfortable as both a team lead and individual contributor
- Conducts and participates in code reviews to maintain code quality standards
- Mentors junior developers when opportunities arise

**Reliability & Work Ethic:**
- Delivers on commitments — meets deadlines consistently
- Takes ownership of work from start to finish
- Adaptable to changing requirements and fast-paced environments
- Self-motivated — thrives in remote work settings with minimal supervision

**Attention to Detail:**
- Meticulous about code quality, performance, and security
- Strong focus on user experience — thinks about the end user in every decision
- Thorough documentation practices`,
    keywords: ["soft skills", "communication", "teamwork", "collaboration", "problem solving", "work style", "remote", "agile", "scrum", "personality", "attitude"],
  },

  // ─────────────────────────────────────────────
  // AVAILABILITY & CONTACT
  // ─────────────────────────────────────────────
  {
    id: "availability-contact",
    category: "Availability",
    title: "Availability, Contact & Hiring Information",
    content: `**Joshua Odigbo — Availability & Contact Information**

**Current Status:** ✅ Open to opportunities — actively seeking new roles

**Preferred Roles:**
- Full-Stack Engineer (preferred)
- Frontend Engineer (specialized focus on React ecosystem)
- Backend Engineer (specialized focus on Python/FastAPI/Django)
- Lead Developer / Tech Lead roles
- Freelance / Contract projects

**Work Arrangement:**
- Strongly prefers **Remote** work
- Open to **Hybrid** arrangements for the right opportunity
- Available for both **full-time employment** and **contract/freelance** engagements
- Comfortable working with international teams across time zones

**Contact Information:**
- 📧 Email: joshua.odigbo@jcoteck.com.ng
- 💼 LinkedIn: linkedin.com/in/joshua-odigbo-80251a218
- 🐙 GitHub: github.com/joshuasco
- 🌐 Portfolio: joshuasco.vercel.app
- 📄 Resume: Available on request (LinkedIn or via email)

**Response Time:** Typically responds within 24 hours

**Interview Availability:** Available for technical interviews, coding assessments, and exploratory calls. Please reach out via email or LinkedIn to schedule.`,
    keywords: ["available", "availability", "hire", "hiring", "contact", "email", "linkedin", "github", "remote", "job", "opportunity", "interview", "salary", "rate", "work"],
  },

  // ─────────────────────────────────────────────
  // TECH STACK SUMMARY
  // ─────────────────────────────────────────────
  {
    id: "tech-stack-summary",
    category: "Skills",
    title: "Complete Tech Stack Overview",
    content: `**Joshua Odigbo — Complete Tech Stack**

**Frontend:** React.js, Next.js, TypeScript, JavaScript (ES6+), TailwindCSS, shadcn/ui, Framer Motion, HTML5, CSS3

**Backend:** Python, FastAPI, Django, Django REST Framework, Node.js, Express.js

**Databases:** PostgreSQL, MySQL, MongoDB, Firebase/Firestore, Redis

**Cloud & DevOps:** AWS (EC2, S3, RDS, Lambda), Docker, Docker Compose, GitHub Actions (CI/CD), Linux, Nginx

**Deployment Platforms:** Vercel, Netlify, Render, Heroku, AWS, Namecheap

**APIs & Integrations:** REST APIs, OAuth 2.0, JWT, PayStack, Flutterwave, EmailJS, Supabase, Firebase Auth

**Tools:** Git, GitHub, Postman, pgAdmin, VS Code, Figma

**Testing:** Unit testing, API testing with Postman, integration testing

**Other:** WebSockets, Celery (background tasks), Alembic (DB migrations), Pydantic, OpenAPI/Swagger`,
    keywords: ["tech stack", "technologies", "tools", "languages", "frameworks", "stack", "what can", "specialization", "expertise", "proficient"],
  },

  // ─────────────────────────────────────────────
  // COMMON Q&A
  // ─────────────────────────────────────────────
  {
    id: "qa-frontend-vs-backend",
    category: "FAQ",
    title: "Can Joshua work as Frontend or Backend specialist?",
    content: `**Q: Can Joshua specialize as either a Frontend or Backend Engineer?**

Yes, absolutely. Joshua is a true Full-Stack Engineer with deep expertise in both disciplines. Here's how he can contribute in each specialization:

**As a Frontend Engineer:**
- Leads React.js component architecture and state management strategy
- Builds pixel-perfect, accessible, performant user interfaces
- Implements complex animations, real-time UX updates, and data visualizations
- Sets up frontend CI/CD pipelines, testing, and performance monitoring
- Works fluently with design systems and Figma handoffs
- Primary stack: React, TypeScript, TailwindCSS, Next.js, TanStack Query

**As a Backend Engineer:**
- Architects and implements REST APIs and microservices
- Designs database schemas and optimizes query performance
- Implements authentication, authorization, and security best practices
- Manages cloud infrastructure and deployment pipelines
- Handles third-party integrations (payment gateways, telecom APIs, etc.)
- Primary stack: Python, FastAPI, Django, PostgreSQL, Redis, Docker, AWS

His ability to bridge both worlds is a unique advantage — even when hired as a specialist, his cross-domain understanding leads to better API contracts, faster debugging, and stronger architectural decisions.`,
    keywords: ["frontend", "backend", "specialist", "specialize", "which", "focus", "major", "role", "both", "full stack"],
  },
  {
    id: "qa-why-hire",
    category: "FAQ",
    title: "Why should we hire Joshua?",
    content: `**Why Joshua Odigbo Stands Out:**

1. **Proven Track Record** — 7+ production applications shipped across fintech, e-commerce, community management, and event platforms. These aren't side projects — they're real products used by real people.

2. **Full-Stack Versatility** — Can contribute immediately as either Frontend or Backend, reducing hiring complexity and enabling him to bridge communication between teams.

3. **Technical Breadth** — Covers the full modern web stack: React + TypeScript on the frontend, Python/FastAPI/Django on the backend, PostgreSQL/Redis for data, Docker/AWS for infrastructure.

4. **Entrepreneurial Mindset** — As the Lead Developer at Jcoteck, he's built systems from the ground up, making architectural decisions, managing trade-offs, and owning outcomes end-to-end.

5. **Industry Experience** — Worked across fintech, healthcare, events, and e-commerce — brings cross-domain insights and best practices.

6. **Remote-Ready** — Proven ability to work independently, self-manage, and deliver in fully remote environments.

7. **Communication** — Clear communicator who translates technical complexity into business value.

8. **Growth Mindset** — Continuously learning and adapting to new technologies, frameworks, and industry standards.`,
    keywords: ["why", "hire", "reason", "value", "benefit", "advantage", "stand out", "strengths", "best", "recommend"],
  },
  {
    id: "qa-salary-rate",
    category: "FAQ",
    title: "What is Joshua's expected salary or rate?",
    content: `**Q: What is Joshua's salary expectation or hourly rate?**

Joshua's compensation expectations are competitive with market rates for a Full-Stack Engineer with 5+ years of experience. He is open to discussing specific numbers based on:

- **Role scope** (full-time vs. contract/freelance)
- **Seniority level** (Mid-level, Senior, or Lead)
- **Location/market** (Nigerian market, international/USD-based)
- **Remote vs. hybrid arrangement**
- **Company size and stage** (startup vs. enterprise)

For a direct conversation about compensation, please reach out via:
- 📧 **Email:** joshua.odigbo@jcoteck.com.ng
- 💼 **LinkedIn:** linkedin.com/in/joshua-odigbo-80251a218

Joshua values total compensation including base salary, growth opportunities, team culture, and the impact of the work. He is open to negotiation and values mutual fit.`,
    keywords: ["salary", "rate", "pay", "compensation", "money", "cost", "hourly", "annual", "expect", "budget"],
  },
];

// ─────────────────────────────────────────────────────────────
// Suggested questions to show in the chatbot UI
// ─────────────────────────────────────────────────────────────
export const suggestedQuestions = [
  "What are Joshua's core skills?",
  "Tell me about his experience",
  "What projects has he built?",
  "Can he specialize as a frontend engineer?",
  "What's his backend tech stack?",
  "Is he available for hire?",
  "What's his educational background?",
  "How can I contact Joshua?",
];
