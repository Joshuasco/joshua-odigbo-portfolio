import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory management, secure payments, and an admin dashboard. Built for scalability and performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["React", "FastAPI", "PostgreSQL", "Stripe", "Redis"],
    features: ["Real-time inventory", "Payment processing", "Admin dashboard", "Analytics"],
    role: "Lead Developer",
    liveUrl: "#",
    githubUrl: "#",
    category: "SaaS",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API platform for team collaboration with real-time updates, role-based access control, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Django", "PostgreSQL", "Docker", "AWS", "Celery"],
    features: ["REST API", "Real-time sync", "Role management", "Auto-scaling"],
    role: "Full-Stack Developer",
    liveUrl: "#",
    githubUrl: "#",
    category: "API Platform",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive business intelligence dashboard with customizable widgets, real-time data visualization, and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["React", "TailwindCSS", "FastAPI", "Chart.js", "Firebase"],
    features: ["Data visualization", "Custom widgets", "Export reports", "Real-time updates"],
    role: "Frontend Lead",
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard",
  },
  {
    title: "Authentication System",
    description:
      "Secure, scalable authentication service supporting OAuth, 2FA, and session management with comprehensive audit logging.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
    technologies: ["FastAPI", "PostgreSQL", "JWT", "Redis", "Docker"],
    features: ["OAuth 2.0", "Two-factor auth", "Session management", "Audit logs"],
    role: "Backend Developer",
    liveUrl: "#",
    githubUrl: "#",
    category: "Security",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Projects That <span className="text-gradient">Define</span> My Craft
          </h2>
          <p className="text-muted-foreground">
            A selection of projects showcasing my expertise in building scalable, 
            user-focused applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-card"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-xs font-medium text-primary">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubUrl}
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full border border-border text-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Role */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Role: <span className="text-foreground">{project.role}</span>
                  </span>
                  <Button variant="ghost" size="sm" className="group/btn" asChild>
                    <a href={project.liveUrl}>
                      View Project
                      <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <Github className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
