import { motion } from "framer-motion";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/navan_chakravarthi_h_s/",
    stats: "20+ Problems"
  },
  {
    name: "HackerRank",
    icon: SiHackerrank,
    link: "https://www.hackerrank.com/profile/chakravarthi1307",
    stats: "3★ Java | 3★ Python | 1★ SQL"
  },
  {
    name: "GeeksforGeeks",
    icon: SiGeeksforgeeks,
    link: "https://www.geeksforgeeks.org/profile/chakravarp2fq",
    stats: "40+ Problems"
  }
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Coding <span className="text-gradient">Profiles</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((p, index) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center hover:scale-105 transition"
            >
              <p.icon size={40} className="mb-4 text-accent" />
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-muted-foreground text-sm">{p.stats}</p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}