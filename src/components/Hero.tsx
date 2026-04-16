import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import jo from "@/assets/profile/jo.png"

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Django", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden w-full">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10  w-full px-6 lg:px-6 pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-4 pt-10">
          <div className="w-full lg:w-full flex flex-col items-center lg:items-start text-center lg:text-left stagger-children">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for opportunities
            </div>

            {/* Main headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Joshua Odigbo</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-heading font-medium mb-4">
              Full-Stack Developer
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              I design, build, and scale modern web applications. With{" "}
              <span className="text-foreground font-medium">5+ years</span> of experience
              delivering clean, efficient code and user-focused digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href="https://github.com/joshuasco"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/joshua-odigbo-80251a218"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:joshua.odigbo@jcoteck.com.ng"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail size={22} />
              </a>
              <a
                href="link to my resume"
                className="p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Download size={22} />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  <span>{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full justify-center lg:justify-end flex">
            <div className="relative group max-w-md w-full sm:w-[400px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img src={jo} alt="Joshua Odigbo" className="relative rounded-2xl w-full h-auto object-cover transform transition duration-500 hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
