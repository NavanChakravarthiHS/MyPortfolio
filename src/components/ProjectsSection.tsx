import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Quiz Quest",
    subtitle: "Full Stack Quiz Application",
    description:
      "An interactive quiz application featuring multiple categories, timed questions, score tracking, and a leaderboard. Built with a focus on user experience and responsive design.",
    tech: ["Java", "HTML", "CSS", "JavaScript", "MongoDB"],
    github: "https://github.com/NavanChakravarthiHS/Quiz-Quest-main",
    live: "https://quiz-quest-main.vercel.app/",
    image: "/quiz-quest.png",
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and a premium dark UI design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/NavanChakravarthiHS/MyPortfolio",
    live: "https://my-portfolio-theta-eosin-31.vercel.app/",
    image: "/portfolio.png",
  },
    {
    title: "Smart Bin Tracking System",
    subtitle: "Major Project (Working on it currently)",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and a premium dark UI design.",
    tech: ["React", "JS", "Tailwind CSS", "HTML", "CSS" ],
    github: "https://github.com/NavanChakravarthiHS/Bin-tracking-System",
    live: "#",
    image: "/dashboard.png",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Project image area */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-48 overflow-hidden border-b border-border"
              >
                <img
                  src={project.image}
                  alt={`${project.title} landing page screenshot`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-accent mb-3">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-border hover:border-primary/50 hover:bg-primary/5 rounded-lg"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
