const fs = require('fs');

// Create a simple WAV file with ambient tones
function generateWAV() {
  const sampleRate = 44100;
  const duration = 30; // 30 seconds
  const samples = sampleRate * duration;
  const bytesPerSample = 2;
  const numChannels = 2;
  
  // WAV header
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + samples * numChannels * bytesPerSample, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // PCM
  header.writeUInt16LE(1, 20); // PCM format
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * numChannels * bytesPerSample, 28);
  header.writeUInt16LE(numChannels * bytesPerSample, 32);
  header.writeUInt16LE(16, 34); // 16-bit
  header.write('data', 36);
  header.writeUInt32LE(samples * numChannels * bytesPerSample, 40);
  
  // Generate audio data - ambient tones
  const audioData = Buffer.alloc(samples * numChannels * bytesPerSample);
  
  for (let i = 0; i < samples; i++) {
    const t = i / sampleRate;
    // Create ambient sound with multiple sine waves
    const freq1 = 220; // A3
    const freq2 = 330; // E4
    const freq3 = 440; // A4
    
    let sample = Math.sin(2 * Math.PI * freq1 * t) * 0.1 +
                 Math.sin(2 * Math.PI * freq2 * t) * 0.05 +
                 Math.sin(2 * Math.PI * freq3 * t) * 0.03;
    
    // Add some gentle reverb effect
    sample += Math.sin(2 * Math.PI * freq1 * t * 1.01) * 0.02;
    
    // Apply fade in/out
    if (t < 1) sample *= t;
    if (t > duration - 1) sample *= (duration - t);
    
    // Convert to 16-bit integer
    const intSample = Math.max(-32768, Math.min(32767, sample * 32767));
    
    // Write stereo samples
    audioData.writeInt16LE(intSample, i * 4);
    audioData.writeInt16LE(intSample, i * 4 + 2);
  }
  
  return Buffer.concat([header, audioData]);
}

// Generate and save the WAV file
const wavData = generateWAV();
fs.writeFileSync('music.wav', wavData);
console.log('Generated ambient music track (WAV format)');