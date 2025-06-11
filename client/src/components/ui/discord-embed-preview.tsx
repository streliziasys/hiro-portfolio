import { motion } from "framer-motion";
import { Copy, CheckCircle, ExternalLink } from "lucide-react";
import { Button3D } from "@/components/ui/button-3d";
import { useState } from "react";
import { soundEffects } from "@/lib/sound-effects";

interface DiscordEmbedData {
  title: string;
  description: string;
  url: string;
  color?: string;
  author?: string;
  thumbnail?: string;
}

interface DiscordEmbedPreviewProps {
  data: DiscordEmbedData;
  isOpen: boolean;
  onClose: () => void;
}

export function DiscordEmbedPreview({ data, isOpen, onClose }: DiscordEmbedPreviewProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  const embedCode = {
    embeds: [{
      title: data.title,
      description: data.description,
      url: data.url,
      color: parseInt((data.color || "8B5CF6").replace("#", ""), 16),
      author: {
        name: data.author || "Hiro.null",
        icon_url: `${window.location.origin}/favicon.ico`
      },
      thumbnail: {
        url: data.thumbnail || `${window.location.origin}/favicon.ico`
      },
      footer: {
        text: "Portfolio • Hiro.null",
        icon_url: `${window.location.origin}/favicon.ico`
      },
      timestamp: new Date().toISOString()
    }]
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(embedCode, null, 2));
      setCopySuccess(true);
      soundEffects.playSuccess();
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      soundEffects.playError();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto border border-slate-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-white">Discord Embed Preview</h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Discord Embed Preview */}
          <div className="bg-slate-900 rounded-lg p-4 mb-6 border-l-4 border-purple-500">
            <div className="flex items-center gap-2 mb-2">
              <img 
                src="/favicon.ico" 
                alt="Author" 
                className="w-5 h-5 rounded-full"
              />
              <span className="text-sm font-medium text-slate-300">{data.author || "Hiro.null"}</span>
            </div>
            
            <h4 className="text-lg font-semibold text-white mb-2 hover:underline cursor-pointer">
              {data.title}
            </h4>
            
            <p className="text-slate-300 mb-3 leading-relaxed">
              {data.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>Portfolio • Hiro.null</span>
                <span>•</span>
                <span>now</span>
              </div>
              {data.thumbnail && (
                <img 
                  src={data.thumbnail}
                  alt="Thumbnail"
                  className="w-12 h-12 rounded object-cover"
                />
              )}
            </div>
          </div>

          {/* JSON Code */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Discord Embed Code (Ready to paste):
            </label>
            <div className="bg-slate-950 rounded-lg p-4 border border-slate-700 max-h-48 overflow-auto">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap">
                {JSON.stringify(embedCode, null, 2)}
              </pre>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button3D
              variant="primary"
              icon={copySuccess ? CheckCircle : Copy}
              onClick={handleCopy}
              className="flex-1"
            >
              {copySuccess ? "Copied!" : "Copy Discord Embed"}
            </Button3D>
            
            <Button3D
              variant="secondary"
              icon={ExternalLink}
              onClick={() => window.open(data.url, '_blank')}
            >
              Visit
            </Button3D>
          </div>
        </motion.div>
      </div>
    </>
  );
}