import { motion } from "framer-motion";
import { Code, Database, Server, Shield, Globe, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite", "Next.js", "shadcn/ui"]
  },
  {
    title: "Backend Development", 
    icon: Server,
    skills: ["Node.js", "Python", "Express", "API Development", "Webhooks", "Microservices"]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Database Design", "Query Optimization"]
  },
  {
    title: "DevOps & Infrastructure",
    icon: Cpu,
    skills: ["Docker", "Kubernetes", "Linux", "NGINX", "Cloudflare", "VPS Management"]
  },
  {
    title: "Security & Networking",
    icon: Shield,
    skills: ["Cybersecurity", "Network Protocols", "SSL/TLS", "Penetration Testing", "Security Audits"]
  },
  {
    title: "Specialized Platforms",
    icon: Globe,
    skills: ["Discord Bot Development", "Minecraft Server Development", "Pterodactyl Panel", "Game Server Management"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">
              Skills
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Technologies and tools I work with to build robust, scalable solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/50 card-hover glint-effect"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
