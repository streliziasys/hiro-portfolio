import { useState, useRef, useEffect } from "react";

export function useMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio('/music.mp3');
    audioRef.current.preload = 'metadata';

    // Load saved volume from localStorage
    const savedVolume = localStorage.getItem('hiroMusicVolume');
    if (savedVolume) {
      const vol = parseFloat(savedVolume);
      setVolumeState(vol);
      if (audioRef.current) {
        audioRef.current.volume = vol;
      }
    } else if (audioRef.current) {
      audioRef.current.volume = volume;
    }

    // Set up event listeners
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    };

    if (audio) {
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audio) {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
        audio.pause();
      }
    };
  }, []);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    localStorage.setItem('hiroMusicVolume', newVolume.toString());

    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }

    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (audioRef.current) {
      audioRef.current.volume = newMutedState ? 0 : volume;
    }
  };

  const seek = (percentage: number) => {
    if (audioRef.current && duration > 0) {
      const newTime = percentage * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(percentage * 100);
    }
  };

  return {
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
  };
}