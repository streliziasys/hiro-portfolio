import { motion } from "framer-motion";
import { User, Code, Shield, Heart } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Building end-to-end solutions with modern technologies and best practices."
    },
    {
      icon: Shield,
      title: "Security Focused",
      description: "Implementing robust security measures and exploring cybersecurity concepts."
    },
    {
      icon: Heart,
      title: "Open Source",
      description: "Contributing to the community and sharing knowledge through open projects."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/50">
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
              About Me
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            I'm a developer who's passionate about learning and growing in the tech space. 
            I build things that interest me and constantly push myself to explore new technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <User className="text-white" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white">Name</h3>
                  <p className="text-white/70">Hiro</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-white text-xl">@</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Handle</h3>
                  <p className="text-white/70">Hiro.null</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-white text-xl">AKA</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Also Known As</h3>
                  <p className="text-white/70">HiroDev, HiroSys</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Status</h3>
                  <p className="text-white">Online & Available</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 card-hover glint-effect"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}