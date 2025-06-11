import { motion } from "framer-motion";
import { ExternalLink, Share2, Github, Globe } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { DiscordEmbedPreview } from "@/components/ui/discord-embed-preview";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Hexra.cloud",
    description: "High-performance cloud hosting platform with blazing-fast infrastructure and enterprise-grade security.",
    url: "https://hexra.cloud",
    status: "Live",
    tech: ["Node.js", "React", "Docker", "NGINX"],
    image: "https://8upload.com/image/68488b1d8eac6/95bbbfeb-73cc-453f-ab60-33929726e21d.jpeg"
  },
  {
    id: 2,
    name: "Strelizia",
    description: "Advanced AI-powered Discord bot with comprehensive moderation and utility features.",
    url: "https://strelizia.space",
    status: "Live",
    tech: ["Discord.js", "AI/ML", "Node.js", "MongoDB"],
    image: "https://8upload.com/image/68488d3fc3bd2/Screenshot_2025_0611_015300.png"
  },
  {
    id: 3,
    name: "VoidNodes",
    description: "Reliable VPS hosting service offering both free and premium server solutions.",
    url: "https://voidhost.pro",
    status: "Live",
    tech: ["Pterodactyl", "Docker", "Linux", "Cloudflare"],
    image: "https://8upload.com/image/68488dcce2fae/Screenshot_2025_0611_014202.png"
  },
  {
    id: 4,
    name: "HighTPS",
    description: "Specialized hosting platform for Minecraft servers and Discord bots with easy deployment.",
    url: "https://hightps.pro",
    status: "Live",
    tech: ["Java", "Node.js", "Docker", "php"],
    image: "https://8upload.com/image/68488e68766b4/black_discord_banner_______________.jpeg"
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isEmbedOpen, setIsEmbedOpen] = useState(false);

  const handleShareProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsEmbedOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-black/30">
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
              Projects
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A collection of projects I've built, maintained, and launched into production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/50 card-hover glint-effect"
            >
              <div className="aspect-video bg-black/20 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.name} preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-white/20 text-white border border-white/30' 
                      : 'bg-white/10 text-white/70 border border-white/20'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                    {project.name}
                  </h3>
                  <Button3D
                    variant="secondary"
                    size="sm"
                    icon={Share2}
                    onClick={() => handleShareProject(project)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                <p className="text-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button3D
                    variant="primary"
                    size="sm"
                    icon={Globe}
                    onClick={() => window.open(project.url, '_blank')}
                    className="flex-1 btn-glint"
                  >
                    Visit Project
                  </Button3D>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <DiscordEmbedPreview
          data={{
            title: `🚀 ${selectedProject.name}`,
            description: selectedProject.description,
            url: selectedProject.url,
            color: "8B5CF6",
            author: "Hiro.null"
          }}
          isOpen={isEmbedOpen}
          onClose={() => setIsEmbedOpen(false)}
        />
      )}
    </section>
  );
}
