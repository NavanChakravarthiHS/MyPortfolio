import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Rocket } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - decorative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 rotate-6 glow-border" />
              <div className="absolute inset-0 rounded-2xl glass-card flex items-center justify-center">
                <Code2 className="text-primary" size={80} strokeWidth={1} />
              </div>
            </div>
          </motion.div>

          {/* Right - text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm an aspiring <span className="text-foreground font-medium">Java Developer</span> and{" "}
              <span className="text-foreground font-medium">Full Stack Developer</span> with a passion for
              building robust, scalable web applications. Currently deepening my expertise in
              backend technologies, databases, and modern frontend frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My journey in software development started with curiosity and has grown into a dedicated
              pursuit of clean code and elegant solutions. I believe in continuous learning and
              staying up-to-date with the latest technologies to deliver the best possible experiences.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Code2, label: "Clean Code", desc: "Best Practices" },
                { icon: GraduationCap, label: "Continuous", desc: "Learning" },
                { icon: Rocket, label: "Problem", desc: "Solver" },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center">
                  <item.icon className="mx-auto mb-2 text-accent" size={24} />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
