const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive, interactive user interfaces",
    skills: [
      { name: "React", level: 95 },
      { name: "TailwindCSS", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 95 },
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Backend",
    description: "Designing robust APIs and server-side logic",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "Django", level: 90 },
      { name: "Python", level: 93 },
      { name: "REST APIs", level: 95 },
      { name: "Golang", level: 75},
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    description: "Managing data efficiently and securely",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "Firebase", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "DevOps & Tools",
    description: "Streamlining development and deployment",
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 82 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 85 },
    ],
    color: "from-purple-500 to-pink-500",
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
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="font-heading text-xl font-semibold mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Deployment Platforms */}
        <div className="text-center">
          <h3 className="font-heading text-lg font-semibold mb-4 text-muted-foreground">
            Deployment Platforms
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {deploymentPlatforms.map((platform) => (
              <span
                key={platform}
                className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
