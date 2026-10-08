import React from "react";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Globe,
  Workflow,
  Network,
} from "lucide-react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-5 h-5" }) => {
  const normalized = name.toLowerCase();

  if (normalized.includes("react")) {
    return (
      <svg className={`${className} text-[#61DAFB]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (normalized.includes("next")) {
    return (
      <svg className={`${className} text-foreground`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.89 13.91l-4.57-6.27V15h-1.5V9h1.66l4.47 6.13V9h1.5v6.91h-1.56z"/>
      </svg>
    );
  }

  if (normalized.includes("typescript")) {
    return (
      <svg className={`${className} text-[#3178C6]`} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6"/>
        <path d="M11.5 14.5c-.5.5-1.3.8-2.2.8-1.8 0-2.8-1-2.8-2.6 0-1.7 1.1-2.7 2.9-2.7.8 0 1.5.2 2 .6v1.4c-.5-.4-1.1-.6-1.7-.6-.9 0-1.5.5-1.5 1.3 0 .8.5 1.3 1.5 1.3.6 0 1.1-.2 1.6-.5v1zm6.2-1.3c0 .8-.6 1.4-1.8 1.4-.7 0-1.4-.2-2-.6v-1.4c.6.4 1.2.7 1.8.7.5 0 .8-.2.8-.5 0-.3-.3-.5-1-.7l-.5-.2c-1-.3-1.6-.8-1.6-1.7 0-1.1.9-1.7 2.2-1.7.7 0 1.3.2 1.8.5v1.3c-.5-.3-1-.5-1.6-.5-.5 0-.8.2-.8.5 0 .3.3.5.9.7l.5.2c1.2.3 1.7.9 1.7 1.7z" fill="#FFFFFF"/>
      </svg>
    );
  }

  if (normalized.includes("javascript")) {
    return (
      <svg className={`${className} text-[#F7DF1E]`} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E"/>
        <path d="M12.7 15.5c.4.6.9 1 1.7 1 .8 0 1.3-.3 1.3-.9 0-.6-.4-.8-1.2-1.2l-.4-.2c-1.3-.5-2.1-1.2-2.1-2.6 0-1.5 1.2-2.6 3.1-2.6 1.4 0 2.3.5 2.8 1.4l-1.3.9c-.3-.5-.7-.8-1.4-.8-.6 0-1 .3-1 .7 0 .5.3.7 1.1 1l.4.2c1.4.6 2.2 1.2 2.2 2.7 0 1.8-1.3 2.7-3.4 2.7-1.7 0-2.8-.7-3.4-1.7l1.6-.6zm-5.7.1c.3.5.6.8 1.2.8.6 0 .9-.3.9-.9v-5.4h2.1v5.5c0 1.8-1 2.7-2.8 2.7-1.5 0-2.3-.7-2.8-1.7l1.4-1.1z" fill="#000000"/>
      </svg>
    );
  }

  if (normalized.includes("tailwind")) {
    return (
      <svg className={`${className} text-[#06B6D4]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3.3 0-5.4 1.6-6.3 4.9 1.2-1.6 2.7-2.2 4.5-1.7 1.1.3 1.8 1 2.6 1.9 1.4 1.4 3 3 6.7 3 3.3 0 5.4-1.6 6.3-4.9-1.2 1.6-2.7 2.2-4.5 1.7-1.1-.3-1.8-1-2.6-1.9-1.4-1.4-3-3-6.7-3zm-6.3 7.1c-3.3 0-5.4 1.6-6.3 4.9 1.2-1.6 2.7-2.2 4.5-1.7 1.1.3 1.8 1 2.6 1.9 1.4 1.4 3 3 6.7 3 3.3 0 5.4-1.6 6.3-4.9-1.2 1.6-2.7 2.2-4.5 1.7-1.1-.3-1.8-1-2.6-1.9-1.4-1.4-3-3-6.7-3z"/>
      </svg>
    );
  }

  if (normalized.includes("html") || normalized.includes("css")) {
    return (
      <svg className={`${className} text-[#E34F26]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm16.8 6.5H6.9l.3 3.2h10.8l-.6 6.7-5.4 1.5-5.4-1.5-.4-4.2H9l.2 2.1 2.8.8 2.8-.8.3-3.4H6.2l-.9-9.9h13.3l-.3 3.2z"/>
      </svg>
    );
  }

  if (normalized.includes("fastapi")) {
    return (
      <svg className={`${className} text-[#009688]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.1 17.5V13H7.5l5.6-8.5v4.5h3.4l-5.6 8.5z"/>
      </svg>
    );
  }

  if (normalized.includes("django")) {
    return (
      <svg className={`${className} text-[#44B78B]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.7 1.8v15.9c-1.3.6-2.5.9-3.7.9-3.4 0-5.1-2.1-5.1-5.1 0-3.3 2.1-5.5 5-5.5 1.1 0 2 .2 2.7.6v-6.8h1.1zm-1.1 7.6c-.6-.3-1.3-.5-2.1-.5-2.2 0-3.8 1.6-3.8 4.3 0 2.2 1.1 3.8 3.5 3.8.8 0 1.6-.2 2.4-.6v-7zm12.5.4v10.9h-1.1v-1.7c-.8 1.2-1.9 1.9-3.5 1.9-2.9 0-4.8-2.2-4.8-5.5 0-3.4 2.1-5.5 5-5.5 1.4 0 2.5.5 3.3 1.5v-1.6h1.1zm-1.1 5.6c0-2.6-1.5-4.2-3.7-4.2-2.3 0-3.8 1.6-3.8 4.2 0 2.7 1.5 4.3 3.8 4.3 2.2 0 3.7-1.6 3.7-4.3z"/>
      </svg>
    );
  }

  if (normalized.includes("python")) {
    return (
      <svg className={`${className} text-[#3776AB]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.9 2c-5.2 0-4.9 2.3-4.9 2.3v2.3h5v.7H5.1S2.8 7 2.8 12.2s2 5 2 5h1.2v-2.4s-.1-2.8 2.8-2.8h4.8s2.7 0 2.7-2.6V4.8s.3-2.8-4.4-2.8zm-2.7 1.5c.5 0 .9.4.9.9 0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-.5.4-.9.9-.9zm2.9 18.5c5.2 0 4.9-2.3 4.9-2.3v-2.3h-5v-.7h6.9s2.3.3 2.3-4.9-2-5-2-5h-1.2v2.4s.1 2.8-2.8 2.8h-4.8s-2.7 0-2.7 2.6v4.8s-.3 2.8 4.4 2.8zm2.7-1.5c-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9s.9.4.9.9c.0.5-.4.9-.9.9z"/>
      </svg>
    );
  }

  if (normalized.includes("golang") || normalized.includes("go")) {
    return (
      <svg className={`${className} text-[#00ADD8]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.8 10.5c.2-1.4.9-2.3 2.3-2.6 1.4-.3 3.1.2 4.1 1.3L6.8 10.5c-.5-.6-1.2-.8-1.8-.7-.7.1-1.1.6-1.2 1.3-.2 1.1.5 2 1.6 2.1 1.2.1 2.2-.6 2.3-1.8H5.6V10h4.2v4.2C8.7 15.6 6.8 16 4.7 15.5c-1.9-.4-3.1-2.1-2.9-5zm10.7-2.6c2.4 0 4.1 1.7 4.1 4.1 0 2.4-1.7 4.1-4.1 4.1s-4.1-1.7-4.1-4.1c0-2.4 1.7-4.1 4.1-4.1zm0 2c-1.3 0-2.1 1-2.1 2.1 0 1.1.8 2.1 2.1 2.1 1.3 0 2.1-1 2.1-2.1 0-1.1-.8-2.1-2.1-2.1z"/>
      </svg>
    );
  }

  if (normalized.includes("node")) {
    return (
      <svg className={`${className} text-[#5FA04E]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.8v11.4L12 25l10-5.8V7.8L12 2zm-1 18.2l-6.3-3.6V9.4L11 13v7.2zm2 0V13l6.3-3.6v7.2L13 20.2zM12 11.5L5.7 7.9 12 4.3l6.3 3.6L12 11.5z"/>
      </svg>
    );
  }

  if (normalized.includes("rest") || normalized.includes("api")) {
    return <Network className={`${className} text-[#A855F7]`} />;
  }

  if (normalized.includes("postgres")) {
    return (
      <svg className={`${className} text-[#4169E1]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5c-2.8 0-4.5-1.5-4.5-3.5 0-1.2.7-2.2 1.8-2.8C9.5 9.7 9 8.9 9 8c0-1.7 1.8-3 4-3s4 1.3 4 3c0 .9-.5 1.7-1.3 2.2 1.1.6 1.8 1.6 1.8 2.8 0 2-1.7 3.5-4.5 3.5z"/>
      </svg>
    );
  }

  if (normalized.includes("firebase")) {
    return (
      <svg className={`${className} text-[#FFCA28]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.9 18.2L6.6 2.6c.1-.4.6-.6.9-.3l3.6 6.8L3.9 18.2zm15.8-3.4L17.2 4.5c-.1-.4-.6-.6-.9-.3l-2.4 4.5 5.8 6.1zm-9.2-3.8L8 2.5c-.1-.4-.6-.5-.9-.2L1.8 17.5l8.7-6.5zm-5.8 8l4.6 2.6c.4.2.9.2 1.3 0l4.6-2.6-4.9-5-5.6 5z"/>
      </svg>
    );
  }

  if (normalized.includes("mysql")) {
    return (
      <svg className={`${className} text-[#00758F]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-10 10c0 5.5 4.5 10 10 10s10-4.5 10-10A10 10 0 0 0 12 2zm1 14h-2v-4H9v-2h4v6zm3-8h-2v2h2V8z"/>
      </svg>
    );
  }

  if (normalized.includes("mongo")) {
    return (
      <svg className={`${className} text-[#47A248]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1.5c-4.8 0-8.7 3.9-8.7 8.7 0 4 2.7 7.4 6.5 8.4v3.9c0 .3.2.5.5.5s.5-.2.5-.5v-3.9c3.8-1 6.5-4.4 6.5-8.4 0-4.8-3.9-8.7-8.7-8.7zm.8 15.6V6.9c1.8.4 3 2 3 3.8 0 2.2-1.4 4.1-3 4.4z"/>
      </svg>
    );
  }

  if (normalized.includes("redis")) {
    return (
      <svg className={`${className} text-[#DC382D]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 7.5l10-4.5 10 4.5v9l-10 4.5-10-4.5v-9zm10-2.3L4.8 8.4 12 11.6l7.2-3.2L12 5.2zm-8 4.8v6.4l7 3.2v-6.4L4 10zm16 0l-7 3.2v6.4l7-3.2V10z"/>
      </svg>
    );
  }

  if (normalized.includes("git")) {
    return (
      <svg className={`${className} text-[#F05032]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.7 10.8l-8.5-8.5c-.4-.4-1-.4-1.4 0L9.4 4.7l2.5 2.5c.3-.1.7-.2 1.1-.2 1.4 0 2.5 1.1 2.5 2.5 0 .4-.1.8-.3 1.1l2.4 2.4c.3-.1.7-.3 1.1-.3 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-.4.1-.8.3-1.1l-2.2-2.2v5.3c.3.2.6.5.7.9 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-.8.4-1.5 1-2v-5.4c-.6-.5-1-1.2-1-2 0-.4.1-.8.3-1.1L6.7 8.1 2.3 12.5c-.4.4-.4 1 0 1.4l8.5 8.5c.4.4 1 .4 1.4 0l9.5-9.5c.4-.4.4-1.1 0-1.4z"/>
      </svg>
    );
  }

  if (normalized.includes("docker")) {
    return (
      <svg className={`${className} text-[#2496ED]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.98 11.08h2.12v2.12h-2.12zm-3.08 0h2.12v2.12h-2.12zm-3.07 0h2.12v2.12H7.83zm-3.07 0h2.11v2.12H4.76zm6.14-3.07h2.12v2.12h-2.12zm-3.07 0h2.12v2.12H7.83zm6.14 0h2.12v2.12h-2.12zm-3.07-3.08h2.12v2.12h-2.12zM23.77 11.8a12.06 12.06 0 0 1-3.69 4.96c-2.3 1.83-5.26 2.29-8.08 2.24-4.51-.08-8.9-2.07-11.83-5.46a.7.7 0 0 1 .53-1.14c1.61.1 3.2.49 4.7 1.13 3.03 1.3 6.45 1.5 9.57.57.85-.26 1.68-.6 2.47-1.02a.7.7 0 0 1 1.05.51c.32 1.4 1.32 2.56 2.67 3.1a.7.7 0 0 1 .2 1.11z"/>
      </svg>
    );
  }

  if (normalized.includes("aws")) {
    return (
      <svg className={`${className} text-[#FF9900]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.75 14.73c-.34.28-.79.44-1.25.44-.88 0-1.5-.53-1.5-1.57 0-1.39 1.11-2.1 3.02-2.1h.43v-.33c0-.77-.47-1.18-1.33-1.18-.73 0-1.51.27-2.06.67l-.44-.92c.69-.53 1.66-.88 2.68-.88 1.59 0 2.5.79 2.5 2.27v3.52c0 .87.35 1.25.75 1.25.17 0 .34-.04.48-.12l.33.91c-.3.21-.7.34-1.15.34-.84 0-1.42-.48-1.46-1.35zM12 18c6.63 0 10.5-2.6 10.5-2.6l.5 1.1s-4.13 3-11 3c-6.88 0-10.5-3-10.5-3l.5-1.1s3.87 2.6 10.5 2.6z"/>
      </svg>
    );
  }

  if (normalized.includes("ci/cd") || normalized.includes("ci")) {
    return <Workflow className={`${className} text-[#10B981]`} />;
  }

  if (normalized.includes("linux")) {
    return (
      <svg className={`${className} text-[#FCC624]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.2 2 8 4.5 8 7c0 1.5.5 3 1 4.5C8 13 6 15 6 18c0 2 2 4 6 4s6-2 6-4c0-3-2-5-3-6.5.5-1.5 1-3 1-4.5 0-2.5-1.2-5-4-5zm-1.5 4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm3 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
      </svg>
    );
  }

  if (normalized.includes("vercel")) {
    return (
      <svg className={`${className} text-foreground`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    );
  }

  if (normalized.includes("netlify")) {
    return (
      <svg className={`${className} text-[#00C7B7]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.2 12L12 2l5.8 10L12 22 6.2 12z" />
      </svg>
    );
  }

  if (normalized.includes("heroku")) {
    return (
      <svg className={`${className} text-[#430098]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4H9v-2h4v6z" />
      </svg>
    );
  }

  if (normalized.includes("render")) {
    return <Globe className={`${className} text-[#46E3B7]`} />;
  }

  if (normalized.includes("namecheap")) {
    return <Globe className={`${className} text-[#DE3723]`} />;
  }

  return <Code2 className={`${className} text-primary`} />;
};

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, interactive user interfaces",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "TailwindCSS" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    title: "Backend",
    description: "Designing robust APIs and server-side logic",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "FastAPI" },
      { name: "Django" },
      { name: "Python" },
      { name: "REST APIs" },
      { name: "Golang" },
    ],
  },
  {
    title: "Database",
    description: "Managing data efficiently and securely",
    icon: Database,
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "PostgreSQL" },
      { name: "Firebase" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Streamlining development and deployment",
    icon: Wrench,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git/GitHub" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "CI/CD" },
      { name: "Linux" },
    ],
  },
];

const deploymentPlatforms = [
  "Vercel",
  "Netlify",
  "AWS",
  "Heroku",
  "Render",
  "Namecheap",
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding relative bg-gradient-hero">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Technical</span> Arsenal
          </h2>
          <p className="text-muted-foreground">
            A comprehensive toolkit built over 5+ years of professional development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 sm:p-7 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-all duration-300 shadow-md relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Accent top gradient indicator */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {/* Horizontal Wrapping Skills Container */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-secondary/40 border border-border/80 hover:border-primary/50 hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group/skill cursor-default"
                    >
                      <div className="flex-shrink-0 group-hover/skill:scale-110 transition-transform duration-300">
                        <TechIcon name={skill.name} className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Deployment Platforms */}
        <div className="text-center mt-14">
          <h3 className="font-heading text-lg font-semibold mb-6 text-muted-foreground">
            Deployment Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {deploymentPlatforms.map((platform) => (
              <div
                key={platform}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-secondary/50 border border-border/80 text-sm font-medium hover:border-primary/50 hover:bg-secondary/90 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default group"
              >
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <TechIcon name={platform} className="w-4 h-4" />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  {platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

