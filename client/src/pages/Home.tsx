import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navigation from "@/components/Navigation";

export default function Home() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <motion.main 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <AboutSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ProjectsSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <SkillsSection />
        </motion.div>
        
        <motion.div variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </motion.main>

      <footer className="border-t border-white/20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-white/60">
            <p>&copy; 2025 Hiro.null. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
