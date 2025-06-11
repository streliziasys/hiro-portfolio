import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, Code2 } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { useTypewriter } from "@/hooks/useTypewriter";

export default function HeroSection() {
  const { displayText: nameText, isComplete: nameComplete } = useTypewriter("Hiro.null", 100);
  const { displayText: roleText, isComplete: roleComplete } = useTypewriter(
    "Developer & Cybersecurity Enthusiast", 
    80, 
    nameComplete ? 500 : 0
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">


      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="/hiro-logo.svg" 
              alt="Hiro Logo" 
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="text-white text-glow">
                {nameText}
              </span>
            </h1>
          </div>

          <h2 className="text-xl md:text-2xl text-white/80 mb-8 min-h-[2rem]">
            <span className="typewriter-text">
              {roleText}
            </span>
          </h2>

          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate developer exploring cybersecurity, building innovative solutions, and constantly learning new technologies.
          </p>

          {roleComplete && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button3D
                variant="primary"
                size="lg"
                className="btn-glint"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me →
              </Button3D>
            </motion.div>
          )}

          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-end mr-16 mt-16"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-white border-4 border-white/20 overflow-hidden shadow-2xl">
                <img 
                  src="/hiro-avatar.svg" 
                  alt="Hiro Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm -z-10"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-white/60 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>


      </div>
    </section>
  );
}