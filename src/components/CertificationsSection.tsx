import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Java for Beginners",
    issuer: "Infosys SpringBoard",
    date: "25/02/20205",
    description: "Comprehensive Java programming course covering OOP, data structures, and advanced Java concepts.",
    credentialUrl: "https://drive.google.com/file/d/1JNI0FjTjojq1XyoYOKW_pFxH10BTvb-a/view?usp=drive_link",
    icon: "/skill-logos/java.svg",
  },
  {
    title: "Fundamentals of HTML",
    issuer: "Code 360 by CodingNinjas ",
    date: "09/10/2025",
    description: "Complete web development bootcamp covering HTML, CSS, JavaScript, React, and backend technologies.",
    credentialUrl: "https://files.codingninjas.in/certi_image70430795633b71f5a054d5a2b42a90a93dd7a5.jpg",
    icon: "/skill-logos/codingninjas.svg",
  },
  {
    title: "TCS Youth Employment Program",
    issuer: "Tata Consultancy Services",
    date: "28/03/2026",
    description: "Learnt Business Communication Skills, Aptitude, and Soft Skills",
    credentialUrl: "https://drive.google.com/file/d/192AZuF9H2gVjHrXbLMLSIX7WxK1eTv3l/view?usp=drive_link",
    icon: "/skill-logos/Logo.png",
  },
  {
    title: "Weekly Java Challenge 3 ",
    issuer: "LoopLogicArena- unstop",
    date: "13/04/2026",
    description: "Did Codign challege and scored full marks and secred 19th rank by showcasing my problem solving skills.",
    credentialUrl: "https://unstop.com/certificate-preview/17cf46af-e000-4b2d-8099-767fafaa90e8?utm_campaign=",
    icon: "/skill-logos/unstop.svg",
  },
  {
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "13/04/2026",
    description: "Learn the essentials of JavaScript, including variables, data types, control structures, functions, and more.",
    credentialUrl: "https://drive.google.com/file/d/1loSOPOHoIpVacD3uv0u4U-SCay7cZ7SD/view?usp=sharing",
    icon: "/skill-logos/cisco.jpeg",
  }
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            My <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-6 group hover:scale-105 transition-all duration-300 block border border-border hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 flex-shrink-0 p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <img src={cert.icon} alt={`${cert.title} icon`} className="w-full h-full text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1"
                    />
                  </div>

                  <p className="text-sm text-accent mb-2">{cert.issuer}</p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
