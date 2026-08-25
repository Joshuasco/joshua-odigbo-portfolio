import { Server, Layers, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Backend-First Engineer",
    description:
      "Architecting robust APIs, high-efficiency data pipelines, and scalable server-side systems.",
  },
  {
    icon: Layers,
    title: "Full-Stack Capable",
    description:
      "End-to-end delivery — clean React UIs backed by powerful server-side logic.",
  },
  {
    icon: Zap,
    title: "5+ Years Experience",
    description:
      "Proven across startups, agencies, and collaborative teams in diverse industries.",
  },
  {
    icon: Users,
    title: "Analytical Problem-Solver",
    description:
      "Translating complex mathematical and logical challenges into high-impact digital solutions.",
  },
];

const backendSkills = ["FastAPI", "Django", "Go", "REST APIs", "GraphQL", "PostgreSQL", "Redis", "Docker"];
const frontendSkills = ["React", "TypeScript", "Tailwind CSS", "Next.js"];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
       
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
          {/* ── Left column: Bio ── */}
          <div className="space-y-5">
                {/* Header */}
            <div className="mb-10">
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-3 block">
                About Me
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
                Engineered for{" "}
                <span className="text-gradient">scale</span>,{" "}
                built for{" "}
                <span className="text-gradient">impact</span>
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Joshua Odigbo a backend focused full-stack
                developer with over 5 years of hands-on
                experience engineering scalable, high-performance web systems. My journey began with a
                curiosity for how the web works, quickly evolving into a passion for building impactful
                digital products that solve real problems.
              </p>
              <p>
                Driven by strong critical thinking and a natural affinity for mathematical logic,{" "}
                I find myself most drawn to backend architecture.
                I design robust server-side systems, architect high-efficiency APIs with FastAPI, Django,
                and Go, and optimize data flow for performance at scale. When evaluating opportunities,
                I prioritize roles where I can drive backend engineering first while retaining full-stack
                capabilities.
              </p>
              <p>
                On the frontend, I complement strong server-side logic with clean, responsive interfaces
                using React and Tailwind CSS — delivering complete, end-to-end applications as polished
                on the surface as they are solid underneath. Across startups, clients, and collaborative
                teams, I apply analytical rigor to translate complex logic into solutions that genuinely scale.
              </p>
            </div>
          </div>

          {/* ── Right column: Highlight Cards ── */}
          <div className="grid sm:grid-cols-2 gap-4 lg:pt-32">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Accent quote card */}
            <div className="sm:col-span-2 p-5 rounded-2xl border border-primary/20 bg-primary/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-primary rounded-l-2xl" />
              <p className="pl-4 text-sm text-foreground/75 leading-relaxed italic">
                "I thrive where complex logic meets meaningful scale - engineering backend systems that are
                performant, maintainable, and built to grow."
              </p>
              <p className="pl-4 mt-2 text-xs text-primary font-semibold">— Joshua Odigbo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
