import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/NavanChakravarthiHS" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/navanchakravarthihs" },
  { icon: Mail, label: "Email", href: "mailto:navan1307@yahoo.com" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <Input
              placeholder="Your Name"
              required
              className="bg-muted/50 border-border focus:border-primary/50 rounded-lg"
            />
            <Input
              type="email"
              placeholder="Your Email"
              required
              className="bg-muted/50 border-border focus:border-primary/50 rounded-lg"
            />
            <Textarea
              placeholder="Your Message"
              required
              rows={5}
              className="bg-muted/50 border-border focus:border-primary/50 rounded-lg resize-none"
            />
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              size="lg"
            >
              {sending ? "Sending..." : "Send Message"} <Send size={16} className="ml-1" />
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-4">
              Let's work together
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part
              of your vision. Feel free to reach out!
            </p>

            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Navan Chakravarthi. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
