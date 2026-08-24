import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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
import vtu_about from "@/assets/images/vtu_about.png";
import vtu_dashboard from "@/assets/images/vtu_dashboard.png";
import txa26 from "@/assets/images/txa26.png";
import txa_ticket from "@/assets/images/txa_ticket.png";
import txa_swag from "@/assets/images/txa_swag.png";
import jcoteck from "@/assets/images/jcoteck.png";
import jcoteck_service_sectors from "@/assets/images/jcoteck_service_sectors.png";
import jcoteck_dev_cycle from "@/assets/images/jcoteck_dev_cycle.png";
import skillManAuth_api from "@/assets/images/skillManAuth_api.png";
import circuit_dashboard from "@/assets/images/circuit_dashboard.png"
import cirkuit_hub from "@/assets/images/cirkuit_hub.png";
import portfolio from "@/assets/images/portfolio.png";
import portfolio_skill from "@/assets/images/portfolio_skill.png";
import depalscare_home from "@/assets/images/depalscare_home.png";
import depalscare_dashboard from "@/assets/images/depalscare_dashboard.png";
import depalscare_analytics from "@/assets/images/depalscare_analytics.png";

const projects = [
    {
    title: "Depals Care Foundation",
    description: "A Commuinity management and analytic platform for participants(elders and aged) and care givers(volunteers) with admin role.",
    images: [depalscare_home, depalscare_dashboard, depalscare_analytics],
    technologies: ["Reactjs", "TailwindCSS", "FastAPI", "PostgreSQL", "AWS"],
    features: ["Volunteer-Participant Management", "Professional Dashboard", "Report & Analytics", "User Management", "Chat & Call Integration"],
    role: "Full-Stack Developer",
    liveUrl: "https://depalscare.vercel.app/",
    githubUrl: "https://github.com/joshuasco/demo-design-showcase",
    category: "Community Management System",
  },
  {
    title: "Jcoteck Company Website",
    description:
      "A full featured company website for jcoteck. Incorporate ecommerce and bloging platform with real-time inventory management, secure payments, and an admin dashboard. Built for scalability and performance.",
    images: [jcoteck, jcoteck_service_sectors, jcoteck_dev_cycle],
    technologies: ["HTML5", "CSS3", "JQuery", "Ajax", "Django", "PostgreSQL", "PayStack", "AWS"],
    features: ["Real-time inventory", "Payment processing", "Ecommerce", "Blogging", "Admin dashboard", "Analytics"],
    role: "Lead Developer",
    liveUrl: "https://jcoteck.com.ng/",
    githubUrl: "https://github.com/joshuasco/jcoteck",
    category: "SaaS",
  },
  {
    title: "TXA26 Event Platform",
    description:
      "An annual event that empowers young African tech talent by fostering knowledge exchange and capacity building in Africa By connecting professionals and novices from across the continent, TechX Africa strengthens the resilience and growth of Africa's entire tech landscape",
    images: [txa26, txa_ticket,txa_swag],
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
    images: [cirkuit_hub, circuit_dashboard],
    technologies: ["React", "TailwindCSS", "Supperbase", "JWT", "Redis"],
    features: ["Real-time Inventory", "Analytics", "Ecommerce", "Blogging", "Admin Dashboard"],
    role: "Backend Developer",
    liveUrl: "https://circuithub-orcin.vercel.app/",
    githubUrl: "https://github.com/joshuasco/circuit-hub",
    category: "SaaS",
  },
  {
    title: "JcoteckVTU",
    description:
      "A vitual top up platform for data, airtime and other uitility bill payments. Allows API integration for third party websites.  Integrates secure payments, and an admin dashboard",
    images: [vtu, vtu_about, vtu_dashboard],
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
    images: [skillManAuth_api],
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
    images: [portfolio, portfolio_skill],
    technologies: ["React", "emailjs", "TailwindCSS", "shadcn/ui"],
    features: ["Responsive Design", "EmailJS Integration", "Interactive UI"],
    role: "Frontend Developer",
    liveUrl: "https://joshuasco.vercel.app",
    githubUrl: "https://github.com/joshuasco/joshua-odigbo-Portfolio",
    category: "Portfolio",
  },
];

const ProjectImageCarousel = ({
  images: rawImages,
  title,
  category,
}: {
  images?: string | string[];
  title: string;
  category: string;
}) => {
  const images = Array.isArray(rawImages)
    ? rawImages
    : typeof rawImages === "string"
    ? [rawImages]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [disableTransition, setDisableTransition] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // If there are multiple images, append the first one at the end for seamless looping
  const carouselImages = images.length > 1 ? [...images, images[0]] : images;

  const startAutoScroll = () => {
    if (images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoScroll = () => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [images.length]);

  useEffect(() => {
    if (disableTransition) {
      const raf = requestAnimationFrame(() => {
        setDisableTransition(false);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [disableTransition]);

  const handleTransitionEnd = () => {
    if (images.length > 1 && currentIndex === carouselImages.length - 1) {
      setDisableTransition(true);
      setCurrentIndex(0);
    }
  };

  const goTo = (index: number) => {
    setDisableTransition(false);
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative h-56 overflow-hidden"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      {/* Horizontally sliding container */}
      <div
        className={`flex w-full h-full ${disableTransition ? "" : "transition-transform duration-500 ease-in-out"}`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {carouselImages.map((src, i) => (
          <div key={i} className="w-full h-full shrink-0">
            <img
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom-to-top fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

      {/* Category badge */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-xs font-medium text-primary z-10">
        {category}
      </span>

      {/* Image counter badge (only for multiple images) */}
      {images.length > 1 && (
        <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white z-10">
          {(currentIndex % images.length) + 1} / {images.length}
        </span>
      )}

      {/* Dot navigation */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === (currentIndex % images.length)
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-card"
            >
              {/* Image Carousel */}
              <ProjectImageCarousel
                images={project.images}
                title={project.title}
                category={project.category}
              />

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

                {/* Role + View Project */}
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
