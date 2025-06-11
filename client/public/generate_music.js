// Generate a simple ambient music track
const fs = require('fs');
const { execSync } = require('child_process');

// Create a simple sine wave audio file using SoX if available, otherwise use a simple approach
try {
  // Try to create a simple ambient track with multiple tones
  execSync('which sox', { stdio: 'ignore' });
  execSync(`sox -n -r 44100 -c 2 music.wav synth 30 sine 220 sine 330 sine 440 vol 0.1 fade h 1 28 1`, { stdio: 'ignore' });
  execSync(`ffmpeg -i music.wav -codec:a libmp3lame -b:a 128k music.mp3 -y`, { stdio: 'ignore' });
  execSync('rm music.wav');
  console.log('Generated ambient music track');
} catch (error) {
  console.log('SoX/FFmpeg not available, creating silent track placeholder');
  // Create a minimal MP3 header for a silent track
  const silentMp3 = Buffer.from([
    0xFF, 0xFB, 0x90, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
  ]);
  fs.writeFileSync('music.mp3', silentMp3);
}
