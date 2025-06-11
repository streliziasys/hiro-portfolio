import { motion } from "framer-motion";

export default function WhoAmISection() {
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
          <span className="terminal-command">whoami</span>
          <span className="animate-cursor-blink terminal-command ml-1">|</span>
        </div>
        
        <div className="terminal-section">
          <div className="space-y-3">
            <motion.div 
              className="flex items-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.1 }}
            >
              <span className="terminal-secondary w-20">Name:</span>
              <span className="terminal-text ml-4">Hiro</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
            >
              <span className="terminal-secondary w-20">Alias:</span>
              <span className="terminal-accent font-bold ml-4">Hiro.null</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.3 }}
            >
              <span className="terminal-secondary w-20">AKA:</span>
              <span className="terminal-text ml-4">HiroDev, HiroSys</span>
            </motion.div>
            <motion.div 
              className="flex items-center mt-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4 }}
            >
              <span className="terminal-secondary w-20">Status:</span>
              <span className="terminal-success ml-4 animate-pulse flex items-center">
                <span className="w-2 h-2 bg-terminal-success rounded-full mr-2"></span>
                Online
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
