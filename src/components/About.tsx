import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "5+ Years Experience",
    description: "Building scalable web applications across diverse industries",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working with startups, agencies, and enterprise teams",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Rocket,
    title: "End-to-End Delivery",
    description: "From concept to deployment and beyond",
  },
];

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Passionate about building{" "}
              <span className="text-gradient">exceptional</span> digital experiences
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Joshua Odigbo, an experienced full-stack developer with over 5 years 
                of hands-on experience building scalable, high-performance web applications. 
                My journey into development started with a curiosity for how things work on 
                the web, which quickly evolved into a passion for creating impactful digital solutions.
              </p>
              <p>
                I specialize in both frontend and backend development, delivering clean, 
                efficient code and user-focused products. Whether it's crafting pixel-perfect 
                interfaces with React and TailwindCSS or building robust APIs with FastAPI 
                and Django, I bring the same level of dedication and attention to detail.
              </p>
              <p>
                Beyond code, I enjoy solving real-world problems through technology. 
                I've had the privilege of collaborating with teams, startups, and clients 
                across various industries, always striving to exceed expectations and 
                deliver value.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
