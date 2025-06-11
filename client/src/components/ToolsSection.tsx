import { motion } from "framer-motion";

const tools = [
  "React + TypeScript",
  "Vite", 
  "Tailwind CSS",
  "shadcn/ui",
  "Framer Motion",
  "Lucide Icons",
  "Node.js",
  "Docker",
  "Cloudflare",
  "Firebase",
  "Java"
];

export default function ToolsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="mb-16">
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="terminal-primary mr-2">┌──(</span>
          <span className="terminal-accent font-bold">hiro</span>
          <span className="terminal-text">@</span>
          <span className="terminal-secondary font-bold">terminal</span>
          <span className="terminal-primary">)-[</span>
          <span className="terminal-text">~</span>
          <span className="terminal-primary">]</span>
        </div>
        <div className="flex items-center">
          <span className="terminal-primary mr-2">└─$</span>
          <span className="terminal-command">cat</span>
          <span className="terminal-arg ml-2">tools.txt</span>
          <span className="animate-cursor-blink terminal-command ml-1">|</span>
        </div>
        
        <div className="terminal-section">
          <h3 className="text-xl terminal-primary font-bold mb-6"># Tech Stack</h3>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.div 
                key={index}
                className="group cursor-default"
                variants={itemVariants}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="terminal-accent">▸</span>
                  <span className="terminal-text group-hover:terminal-secondary transition-colors text-sm">
                    {tool}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
