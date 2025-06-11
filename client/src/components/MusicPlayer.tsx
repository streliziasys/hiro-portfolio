import { useState, useRef, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X, Music } from "lucide-react";
import { useMusicPlayer } from "@/hooks/useMusicPlayer";

export default function MusicPlayer() {
  const [isVisible, setIsVisible] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragControls = useDragControls();
  const constraintsRef = useRef(null);
  
  const {
    isPlaying,
    volume,
    isMuted,
    currentTime,
    duration,
    progress,
    togglePlayPause,
    setVolume,
    toggleMute,
    seek
  } = useMusicPlayer();

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    seek(percentage);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      ref={constraintsRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ top: '80px' }}
    >
      <motion.div
        drag
        dragControls={dragControls}
        dragConstraints={constraintsRef}
        initial={{ x: 0, y: 0 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          right: '24px',
        }}
        className="pointer-events-auto glassmorphism rounded-xl p-4 shadow-2xl min-w-[280px] animate-float music-player-mobile card-hover glint-effect"
        whileHover={{ scale: 1.02 }}
        whileDrag={{ scale: 1.05 }}
      >
        {/* Player Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Music className="text-black text-sm" />
            </div>
            <div>
              <div className="terminal-text text-sm font-medium">Hiro Vibes</div>
              <div className="terminal-arg text-xs">Now Playing</div>
            </div>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="terminal-text opacity-60 hover:opacity-100 hover:text-white transition-colors" 
            title="Close Player"
          >
            <X size={16} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs terminal-text opacity-60 mb-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
          <div 
            className="w-full bg-opacity-50 rounded-full h-1 cursor-pointer"
            style={{ backgroundColor: 'var(--terminal-alt)' }}
            onClick={handleProgressClick}
          >
            <div 
              className="bg-white h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          {/* Mute Button */}
          <button 
            onClick={toggleMute}
            className="terminal-text opacity-80 hover:opacity-100 hover:text-white transition-colors p-2 rounded-lg hover:bg-white hover:bg-opacity-10" 
            title="Mute/Unmute"
          >
            {isMuted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Play/Pause Button */}
          <button 
            onClick={togglePlayPause}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-white hover:shadow-opacity-30 transition-all duration-300" 
            title="Play/Pause"
          >
            {isPlaying ? (
              <Pause className="text-black" size={20} />
            ) : (
              <Play className="text-black ml-1" size={20} />
            )}
          </button>

          {/* Volume Slider */}
          <div className="flex items-center space-x-2 flex-1 ml-4">
            <Volume2 className="terminal-text opacity-60 text-sm" size={14} />
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume * 100}
              onChange={(e) => setVolume(Number(e.target.value) / 100)}
              className="flex-1 h-1 music-slider rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Mini Equalizer Animation */}
        <div className="flex items-end justify-center space-x-1 mt-3 h-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 rounded-full"
              style={{ 
                backgroundColor: 'white',
                opacity: isPlaying ? 1 : 0.3
              }}
              animate={isPlaying ? {
                height: ['20%', '80%', '20%']
              } : {
                height: '20%'
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
