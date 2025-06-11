class SoundEffects {
  private audioContext: AudioContext | null = null;
  private volume: number = 0.3;

  constructor() {
    this.init();
  }

  private init() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.warn('Web Audio API not supported');
    }
  }

  private createOscillator(frequency: number, duration: number, type: OscillatorType = 'sine') {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  playClick() {
    this.createOscillator(800, 0.1, 'square');
    setTimeout(() => this.createOscillator(600, 0.05, 'square'), 50);
  }

  playHover() {
    this.createOscillator(1000, 0.08, 'sine');
  }

  playSuccess() {
    this.createOscillator(523, 0.1, 'sine'); // C
    setTimeout(() => this.createOscillator(659, 0.1, 'sine'), 100); // E
    setTimeout(() => this.createOscillator(784, 0.2, 'sine'), 200); // G
  }

  playError() {
    this.createOscillator(220, 0.3, 'sawtooth');
  }

  playNotification() {
    this.createOscillator(800, 0.1, 'triangle');
    setTimeout(() => this.createOscillator(1000, 0.1, 'triangle'), 150);
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
  }
}

export const soundEffects = new SoundEffects();