import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Floating shapes */}
      <FloatingShape
        className="absolute top-32 right-[15%] w-20 h-20 rounded-full border border-primary/20 opacity-30"
        delay={0}
      />
      <FloatingShape
        className="absolute top-[60%] right-[10%] w-12 h-12 rounded-lg border border-accent/20 opacity-20 rotate-45"
        delay={2}
      />
      <FloatingShape
        className="absolute top-[40%] left-[5%] w-16 h-16 rounded-full border border-primary/15 opacity-20"
        delay={1}
      />
      <FloatingShape
        className="absolute bottom-32 left-[15%] w-8 h-8 bg-primary/10 rounded-md opacity-30 rotate-12"
        delay={3}
      />
      <FloatingShape
        className="absolute top-[25%] right-[40%] w-6 h-6 bg-accent/10 rounded-full opacity-25"
        delay={1.5}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent font-medium mb-4 tracking-wide text-sm"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4"
          >
            Hello, I'm{" "}
            <span className="text-gradient">Navan Chakravarthi</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-primary font-medium mb-4"
          >
            Java Developer | Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground leading-relaxed mb-8 max-w-lg"
          >
            Passionate about crafting clean, scalable web applications with modern technologies. 
            I transform ideas into elegant digital experiences that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              size="lg"
            >
              View Projects <ArrowDown className="ml-1" size={16} />
            </Button>
            <a href="/resume.pdf" download="Navan_Chakravarthi_Resume.pdf" className="inline-block">
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:border-primary/50 hover:bg-primary/5 rounded-lg px-6"
              >
                Download Resume <Download className="ml-1" size={16} />
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden border-2 border-primary/10">
                <img
                  src="/profile.jpeg"
                  alt="Navan Chakravarthi profile"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: "center 60%" }}
                  onError={(event) => {
                    const target = event.currentTarget as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' fill='%23E5E7EB'/%3E%3Ctext x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial,Helvetica,sans-serif' font-size='48' fill='%236B7280'%3ENC%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-primary/10 animate-float-slow" />
            <div className="absolute -inset-8 rounded-full border border-accent/5 animate-float-delayed" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
