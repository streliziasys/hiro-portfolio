import { motion } from "framer-motion";
import { Github, MessageCircle, Mail, Share2 } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { DiscordEmbedPreview } from "@/components/ui/discord-embed-preview";
import { soundEffects } from "@/lib/sound-effects";
import { useState } from "react";

export default function ContactSection() {
  const [isEmbedOpen, setIsEmbedOpen] = useState(false);

  const contacts = [
    {
      platform: "GitHub",
      icon: Github,
      handle: "streliziasys",
      url: "https://github.com/streliziasys",
      color: "text-white"
    },
    {
      platform: "Discord",
      icon: MessageCircle,
      handle: "hiro.null",
      url: null,
      color: "text-white"
    }
  ];

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText('hiro.null');
      soundEffects.playSuccess();
    } catch (error) {
      soundEffects.playError();
    }
  };

  const handleShareContact = () => {
    setIsEmbedOpen(true);
  };

  return (
    <section id="contact" className="py-20 bg-black/50">
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
              Contact
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Ready to collaborate or have questions? Reach out through any of these platforms.
          </p>
          
          <Button3D
            variant="secondary"
            icon={Share2}
            onClick={handleShareContact}
          >
            Share Contact Info
          </Button3D>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/50 card-hover glint-effect"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <contact.icon className={`${contact.color}`} size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{contact.platform}</h3>
                      <p className="text-white/70">{contact.handle}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {contact.url ? (
                      <Button3D
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(contact.url, '_blank')}
                        className="btn-glint"
                      >
                        Visit
                      </Button3D>
                    ) : (
                      <Button3D
                        variant="accent"
                        size="sm"
                        onClick={handleCopyDiscord}
                        className="btn-glint"
                      >
                        Copy
                      </Button3D>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-black/80 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <Mail className="text-white mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Project Collaboration</h3>
              <p className="text-white/70 mb-4">
                Interested in working together? I'm always open to discussing new projects and opportunities.
              </p>
              <p className="text-white/50 text-sm">
                Feel free to reach out on any platform above!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <DiscordEmbedPreview
        data={{
          title: "💻 Contact Hiro.null",
          description: "Get in touch for collaboration or inquiries",
          url: window.location.origin,
          color: "8B5CF6",
          author: "Hiro.null"
        }}
        isOpen={isEmbedOpen}
        onClose={() => setIsEmbedOpen(false)}
      />
    </section>
  );
}
