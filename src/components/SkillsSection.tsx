import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Java", logo: "/skill-logos/java.svg" },
  { name: "OOP", logo: "/skill-logos/oop.svg" },
  { name: "HTML", logo: "/skill-logos/html.svg" },
  { name: "CSS", logo: "/skill-logos/css.svg" },
  { name: "JavaScript", logo: "/skill-logos/javascript.svg" },
  { name: "MongoDB", logo: "/skill-logos/mongodb.svg" },
  { name: "Git", logo: "/skill-logos/git.svg" },
  { name: "GitHub", logo: "/skill-logos/github.svg" },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-default hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-3">
                <img src={skill.logo} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-medium text-foreground mt-0">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
