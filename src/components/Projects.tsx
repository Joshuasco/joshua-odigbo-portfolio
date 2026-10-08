import {
  ExternalLink,
  Github,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Monitor,
  Info,
  Code2,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
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
import circuit_dashboard from "@/assets/images/circuit_dashboard.png";
import cirkuit_hub from "@/assets/images/cirkuit_hub.png";
import portfolio from "@/assets/images/portfolio.png";
import portfolio_skill from "@/assets/images/portfolio_skill.png";
import depalscare_home from "@/assets/images/depalscare_home.png";
import depalscare_dashboard from "@/assets/images/depalscare_dashboard.png";
import depalscare_analytics from "@/assets/images/depalscare_analytics.png";

const projects = [
  {
    title: "Depals Care Foundation",
    description:
      "A Community management and analytic platform for participants (elders and aged) and care givers (volunteers) with admin role. Designed to streamline operations, facilitate caregiver-participant pairings, track care activities in real time, and deliver powerful visual reporting.",
    images: [depalscare_home, depalscare_dashboard, depalscare_analytics],
    technologies: ["Reactjs", "TailwindCSS", "FastAPI", "PostgreSQL", "AWS"],
    features: [
      "Volunteer-Participant Management",
      "Professional Dashboard",
      "Report & Analytics",
      "User Management",
      "Chat & Call Integration",
    ],
    role: "Full-Stack Developer",
    liveUrl: "https://depalskare.vercel.app/",
    githubUrl: "https://github.com/joshuasco/demo-design-showcase",
    category: "Community Management System",
  },
  {
    title: "Jcoteck Company Website",
    description:
      "A full featured company website for Jcoteck. Incorporates an e-commerce platform and blogging platform with real-time inventory management, secure payments, and an intuitive admin dashboard. Built for scalability, high concurrency, and performance.",
    images: [jcoteck, jcoteck_service_sectors, jcoteck_dev_cycle],
    technologies: [
      "HTML5",
      "CSS3",
      "JQuery",
      "Ajax",
      "Django",
      "PostgreSQL",
      "PayStack",
      "AWS",
    ],
    features: [
      "Real-time inventory tracking",
      "Payment processing (PayStack)",
      "Full E-commerce platform",
      "Blogging engine",
      "Admin dashboard & Analytics",
    ],
    role: "Lead Developer",
    liveUrl: "https://jcoteck.com.ng/",
    githubUrl: "https://github.com/joshuasco/jcoteck",
    category: "SaaS",
  },
  {
    title: "TXA26 Event Platform",
    description:
      "An annual event platform empowering young African tech talent through knowledge exchange and capacity building across the continent. Connects professionals and novices, featuring ticket purchasing, swag store, payment gateways, and real-time updates.",
    images: [txa26, txa_ticket, txa_swag],
    technologies: [
      "React",
      "TailwindCSS",
      "Framer Motion",
      "FastAPI",
      "FireBase",
      "Flutterwave",
    ],
    features: [
      "RESTful API backend",
      "Real-time sync via Firebase",
      "Merchandise & Swag purchase",
      "Flutterwave payment integration",
    ],
    role: "Lead Developer",
    liveUrl: "https://txa-26.vercel.app",
    githubUrl: "https://github.com/Joshuasco/TXA-26.git",
    category: "Event Platform",
  },
  {
    title: "Circuit Hub Ecommerce Platform",
    description:
      "A full featured e-commerce platform for Circuit Hub. Incorporates electronics e-commerce and blogging with real-time inventory management, analytics, secure payments, and an admin dashboard with logistics and order tracking functionality.",
    images: [cirkuit_hub, circuit_dashboard],
    technologies: ["React", "TailwindCSS", "Supabase", "JWT", "Redis"],
    features: [
      "Real-time Inventory management",
      "Advanced Sales Analytics",
      "E-commerce checkout flow",
      "Blogging engine",
      "Admin & Logistics Dashboard",
    ],
    role: "Backend Developer",
    liveUrl: "https://circuithub-orcin.vercel.app/",
    githubUrl: "https://github.com/joshuasco/circuit-hub",
    category: "SaaS",
  },
  {
    title: "JcoteckVTU",
    description:
      "A virtual top up platform for data, airtime, and utility bill payments. Allows API integration for third-party websites, white-label reseller upgrades, automated transaction reporting, and real-time payment processing.",
    images: [vtu, vtu_about, vtu_dashboard],
    technologies: ["React", "TailwindCSS", "FastAPI", "Chart.js", "Firebase"],
    features: [
      "Data & Airtime top-ups",
      "Third-party API integration",
      "Financial data visualization",
      "Real-time status updates & reporting",
    ],
    role: "Full-Stack Developer",
    liveUrl: "https://jcoteck-vtu.vercel.app/",
    githubUrl: "https://github.com/joshuasco/jcoteck-vtu",
    category: "VTU Platform",
  },
  {
    title: "SkillMan Authentication API",
    description:
      "Secure, scalable authentication service supporting OAuth 2.0, Two-Factor Authentication (2FA), and session management with comprehensive audit logging, Redis token caching, and Dockerized microservice architecture.",
    images: [skillManAuth_api],
    technologies: ["FastAPI", "PostgreSQL", "JWT", "Redis", "Docker"],
    features: [
      "OAuth 2.0 & Social Logins",
      "Two-factor authentication (2FA)",
      "Session token management",
      "Audit & Security logging",
    ],
    role: "Backend Developer",
    liveUrl: "https://skileman.onrender.com",
    githubUrl: "https://github.com/joshuasco/skileman",
    category: "API Platform",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio website showcasing my skills, projects, and contact details to prospective clients and employers. Features AI chatbot integration, dark theme, smooth scroll, and responsive design.",
    images: [portfolio, portfolio_skill],
    technologies: ["React", "emailjs", "TailwindCSS", "shadcn/ui"],
    features: ["Responsive Design", "EmailJS Integration", "AI Chatbot", "Interactive UI"],
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
      <div
        className={`flex w-full h-full ${
          disableTransition ? "" : "transition-transform duration-500 ease-in-out"
        }`}
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

      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-xs font-medium text-primary z-10">
        {category}
      </span>

      {images.length > 1 && (
        <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white z-10">
          {(currentIndex % images.length) + 1} / {images.length}
        </span>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                goTo(i);
              }}
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

interface ProjectDetailOverlayProps {
  project: (typeof projects)[0];
  projectIndex: number;
  totalProjects: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const ProjectDetailOverlay = ({
  project,
  projectIndex,
  totalProjects,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: ProjectDetailOverlayProps) => {
  const [activeTab, setActiveTab] = useState<"details" | "live">("details");
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  useEffect(() => {
    setActiveTab("details");
    setSelectedImgIndex(0);
  }, [projectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || !project) return null;

  const images = Array.isArray(project.images) ? project.images : [project.images];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Prev Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous project"
        className="fixed left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-card/90 border border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-2xl group hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next project"
        className="fixed right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-card/90 border border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-2xl group hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* Overlay Card */}
      <div
        className="relative z-50 w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-card/90 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
              {project.category}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Project {projectIndex + 1} of {totalProjects}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Mobile Navigation Controls */}
            <div className="flex sm:hidden items-center space-x-1 mr-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onPrev}
                className="h-8 w-8 rounded-full"
                title="Previous Project"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onNext}
                className="h-8 w-8 rounded-full"
                title="Next Project"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-9 w-9 rounded-full hover:bg-secondary"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close overlay</span>
            </Button>
          </div>
        </div>

        {/* Navigation Tab */}
        <div className="flex border-b border-border px-5 bg-secondary/30">
          <button
            onClick={() => setActiveTab("details")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "details"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Info className="w-4 h-4" />
            Overview & Details
          </button>
          <button
            onClick={() => setActiveTab("live")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "live"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Monitor className="w-4 h-4" />
            Live Preview
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {activeTab === "details" ? (
            <>
              {/* Title & Role */}
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-primary font-medium">
                  Role: <span className="text-foreground">{project.role}</span>
                </p>
              </div>

              {/* Gallery / Image Display */}
              {images.length > 0 && (
                <div className="space-y-3">
                  <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden border border-border bg-secondary/30 shadow-inner">
                    <img
                      src={images[selectedImgIndex]}
                      alt={`${project.title} screenshot ${selectedImgIndex + 1}`}
                      className="w-full h-full object-cover transition-all duration-300"
                    />
                  </div>

                  {images.length > 1 && (
                    <div className="flex gap-2.5 overflow-x-auto pb-1">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImgIndex(idx)}
                          className={`relative h-16 w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                            idx === selectedImgIndex
                              ? "border-primary scale-105 shadow-md"
                              : "border-border opacity-70 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img}
                            alt="thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Full Description */}
              <div className="space-y-2">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Description
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2.5 p-3 rounded-lg bg-secondary/40 border border-border/70 text-sm text-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-secondary/80 border border-border text-xs font-medium text-foreground flex items-center gap-1.5"
                    >
                      <Code2 className="w-3.5 h-3.5 text-primary" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button asChild variant="default" size="default" className="gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Live Site
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" size="default" className="gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Source Code
                      <Github size={16} />
                    </a>
                  </Button>
                )}
              </div>
            </>
          ) : (
            /* Live Demo Tab */
            <div className="h-[60vh] w-full bg-white rounded-xl overflow-hidden border border-border relative">
              <iframe
                src={project.liveUrl === "#" ? "about:blank" : project.liveUrl}
                className="w-full h-full border-0"
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + projects.length) % projects.length
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % projects.length
    );
  };

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
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-card cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedIndex(index)}
            >
              <div>
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
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
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
                </div>
              </div>

              {/* Role + View Project Button */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground">
                    Role: <span className="text-foreground">{project.role}</span>
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(index);
                    }}
                  >
                    View Project
                    <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/joshuasco" target="_blank" rel="noopener noreferrer">
              View All Projects
              <Github className="ml-2" size={18} />
            </a>
          </Button>
        </div>

        {/* Project Detail Overlay with Left & Right Navigation */}
        {selectedIndex !== null && (
          <ProjectDetailOverlay
            project={projects[selectedIndex]}
            projectIndex={selectedIndex}
            totalProjects={projects.length}
            isOpen={selectedIndex !== null}
            onClose={() => setSelectedIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </div>
    </section>
  );
};

