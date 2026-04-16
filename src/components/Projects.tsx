import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import vtu from "@/assets/images/vtu.png";
import txa26 from "@/assets/images/txa26.png";
import jcoteck from "@/assets/images/jcoteck.png";
import skillManAuth_api from "@/assets/images/skillManAuth_api.png";
import cirkuit_hub from "@/assets/images/cirkuit_hub.png";
import portfolio from "@/assets/images/portfolio.png";

const projects = [
  {
    title: "Jcoteck Company Website",
    description: "A full featured company website for jcoteck. Incorporate ecommerce and bloging platform with real-time inventory management, secure payments, and an admin dashboard. Built for scalability and performance.",
    image: jcoteck,
    technologies: ["HTML5", "CSS3", "JQuery", "Ajax", "Django", "PostgreSQL", "PayStack", "AWS"],
    features: ["Real-time inventory", "Payment processing", "Ecommerce", "Blogging", "Admin dashboard", "Analytics"],
    role: "Lead Developer",
    liveUrl: "https://jcoteck.com.ng/",
    githubUrl: "https://github.com/joshuasco/jcoteck",
    category: "SaaS",
  },
  {
    title: "TXA26 Event Platform",
    description: "An annual event that empowers young African tech talent by fostering knowledge exchange and capacity building in Africa By connecting professionals and novices from across the continent, TechX Africa strengthens the resilience and growth of Africa's entire tech landscape",
    image: txa26,
    technologies: ["React", "TailwindCSS", "Framer Motion", "FastAPI", "FireBase", "Flutterwave"],
    features: ["REST API", "Real-time sync", "Product Purchase", "Payment Integration"],
    role: "Lead Developer",
    liveUrl: "https://txa-26.vercel.app",
    githubUrl: "https://github.com/Joshuasco/TXA-26.git",
    category: "Event Platform",
  },
  {
    title: "Circuit Hub Ecommerce Platform",
    description:
      "A full featured ecommerce platform for circuit hub. Incorporate ecommerce and bloging platform with real-time inventory management and analytics, secure payments, and an admin dashboard with logistic and tracking functionality. Built for scalability and performance.",
    image: cirkuit_hub,
    technologies: ["React", "TailwindCSS", "Supperbase", "JWT", "Redis"],
    features: ["Real-time Inventory", "Analytics", "Ecommerce", "Blogging", "Admin Dashboard"],
    role: "Backend Developer",
    liveUrl: "https://cirkuit-hub.lovable.app",
    githubUrl: "https://github.com/joshuasco/circuit-hub",
    category: "SaaS",
  },
  {
    title: "JcoteckVTU",
    description:
      "A vitual top up platform for data, airtime and other uitility bill payments. Allows API integration for third party websites.  Integrates secure payments, and an admin dashboard",
    image: vtu,
    technologies: ["React", "TailwindCSS", "FastAPI", "Chart.js", "Firebase"],
    features: ["Data visualization", "Payment Integration", "Export reports", "Real-time updates"],
    role: "Full-Stack Developer",
    liveUrl: "https://jcoteck-vtu.vercel.app/",
    githubUrl: "https://github.com/joshuasco/jcoteck-vtu",
    category: "VTU Platform",
  },
  {
    title: "SkillMan",
    description:
      "Secure, scalable authentication service supporting OAuth, 2FA, and session management with comprehensive audit logging.",
    image: skillManAuth_api,
    technologies: ["FastAPI", "PostgreSQL", "JWT", "Redis", "Docker"],
    features: ["OAuth 2.0", "Two-factor auth", "Session management", "Audit logs"],
    role: "Backend Developer",
    liveUrl: "https://skileman.onrender.com",
    githubUrl: "https://github.com/joshuasco/skileman",
    category: "API Platform",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio website that showcases my skills, projects, and contact details to prospective clients and employers.",
    image: portfolio,
    technologies: ["React", "emailjs", "TailwindCSS", "shadcn/ui"],
    features: ["Responsive Design", "EmailJS Integration", "Interactive UI"],
    role: "Frontend Developer",
    liveUrl: "https://joshuasco.vercel.app",
    githubUrl: "https://github.com/joshuasco/joshua-odigbo-Portfolio",
    category: "Portfolio",
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
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="ghost" size="sm" className="group/btn">
                        View Project
                        <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </DrawerTrigger>
                    {/* Extendable drawer from bottom via drag mechanism natively supported by vaul */}
                    <DrawerContent className="h-[85vh] flex flex-col">
                      <div className="mx-auto w-full max-w-7xl h-full flex flex-col pt-2 pb-6 px-4">
                        <DrawerHeader className="flex flex-row items-center justify-between border-b pb-4 shrink-0">
                          <DrawerTitle className="text-xl font-heading text-left">
                            {project.title} Preview
                          </DrawerTitle>
                          <DrawerClose asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                              <X className="h-5 w-5" />
                              <span className="sr-only">Close</span>
                            </Button>
                          </DrawerClose>
                        </DrawerHeader>
                        <div className="flex-1 w-full bg-secondary/20 overflow-hidden relative rounded-b-md mt-4 shadow-sm border">
                          <iframe
                            src={project.liveUrl === "#" ? "about:blank" : project.liveUrl}
                            className="w-full h-full border-0 absolute inset-0 bg-white"
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects
              <Github className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
