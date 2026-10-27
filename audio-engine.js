/**
 * FocusDock — Procedural & Custom Audio Engine
 * 100% Offline Web Audio API Synthesizer + IndexedDB Custom Sound Storage
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isMuted = false;
    this.sounds = {}; // procedural sound instances
    this.customSounds = {}; // custom audio instances: { id: { audioEl, sourceNode, gainNode } }
    this.initialized = false;
    this.db = null;
  }

  // Ensure AudioContext is started on user gesture
  init() {
    if (this.initialized) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      console.warn('Web Audio API is not supported in this browser.');
      return;
    }
    this.ctx = new AudioContextClass();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
    this.initialized = true;
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMasterVolume(val) {
    if (!this.initialized) this.init();
    if (!this.masterGain) return;
    const clamped = Math.max(0, Math.min(1, val));
    this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : clamped, this.ctx.currentTime, 0.05);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (!this.masterGain || !this.ctx) return this.isMuted;
    const target = this.isMuted ? 0 : 0.8;
    this.masterGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.05);
    return this.isMuted;
  }

  // -------------------------------------------------------------------------
  // Procedural Sound Management
  // -------------------------------------------------------------------------
  setSoundVolume(type, volume) {
    if (!this.initialized) this.init();
    this.resume();

    if (!this.sounds[type]) {
      this.startSound(type, volume);
      return;
    }

    const clamped = Math.max(0, Math.min(1, volume));
    if (clamped <= 0.001) {
      this.stopSound(type);
    } else {
      this.sounds[type].gainNode.gain.setTargetAtTime(clamped, this.ctx.currentTime, 0.05);
      this.sounds[type].volume = clamped;
    }
  }

  startSound(type, initialVolume = 0.5) {
    if (!this.initialized) this.init();
    this.resume();

    // If sound already exists and was paused, resume it
    if (this.sounds[type]) {
      if (this.sounds[type].isPaused) {
        this.resumeSound(type);
      }
      return;
    }

    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(initialVolume, this.ctx.currentTime);
    gainNode.connect(this.masterGain);

    let nodes = [];

    switch (type) {
      case 'brown':
        nodes = this.createBrownNoise(gainNode);
        break;
      case 'white':
        nodes = this.createWhiteNoise(gainNode);
        break;
      case 'pink':
        nodes = this.createPinkNoise(gainNode);
        break;
      case 'rain':
        nodes = this.createRain(gainNode);
        break;
      case 'campfire':
        nodes = this.createCampfire(gainNode);
        break;
      case 'alpha':
        nodes = this.createAlphaWaves(gainNode);
        break;
      default:
        console.warn('Unknown sound type:', type);
        return;
    }

    this.sounds[type] = {
      gainNode,
      volume: initialVolume,
      nodes,
      isPaused: false,
      startedAt: Date.now(),
      elapsedSeconds: 0,
      stop: () => {
        nodes.forEach(n => {
          try {
            if (n.stop) n.stop();
            if (n.disconnect) n.disconnect();
          } catch (e) {}
        });
        gainNode.disconnect();
      }
    };
  }

  pauseSound(type) {
    if (this.sounds[type] && !this.sounds[type].isPaused) {
      const sound = this.sounds[type];
      sound.elapsedSeconds += (Date.now() - sound.startedAt) / 1000;
      sound.isPaused = true;
      if (this.ctx) {
        sound.gainNode.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03);
      }
    }
  }

  resumeSound(type) {
    if (this.sounds[type] && this.sounds[type].isPaused) {
      const sound = this.sounds[type];
      this.resume();
      sound.isPaused = false;
      sound.startedAt = Date.now();
      if (this.ctx) {
        sound.gainNode.gain.setTargetAtTime(sound.volume, this.ctx.currentTime, 0.03);
      }
    }
  }

  stopSound(type) {
    if (this.sounds[type]) {
      this.sounds[type].stop();
      delete this.sounds[type];
    }
  }

  getSoundState(type) {
    if (this.sounds[type]) {
      const sound = this.sounds[type];
      const elapsed = sound.elapsedSeconds + (sound.isPaused ? 0 : (Date.now() - sound.startedAt) / 1000);
      return {
        active: true,
        isPaused: sound.isPaused,
        elapsed: Math.floor(elapsed)
      };
    }
    return { active: false, isPaused: false, elapsed: 0 };
  }

  pauseAllSounds() {
    let anyPaused = false;
    Object.keys(this.sounds).forEach(type => {
      if (!this.sounds[type].isPaused) {
        this.pauseSound(type);
        anyPaused = true;
      }
    });
    Object.keys(this.customSounds).forEach(id => {
      if (!this.customSounds[id].isPaused) {
        this.pauseCustomSound(id);
        anyPaused = true;
      }
    });
    return anyPaused;
  }

  resumeAllSounds() {
    let anyResumed = false;
    Object.keys(this.sounds).forEach(type => {
      if (this.sounds[type].isPaused) {
        this.resumeSound(type);
        anyResumed = true;
      }
    });
    Object.keys(this.customSounds).forEach(id => {
      if (this.customSounds[id].isPaused) {
        this.resumeCustomSound(id);
        anyResumed = true;
      }
    });
    return anyResumed;
  }

  hasPlayingSounds() {
    const proceduralPlaying = Object.keys(this.sounds).some(k => !this.sounds[k].isPaused);
    const customPlaying = Object.keys(this.customSounds).some(k => !this.customSounds[k].isPaused);
    return proceduralPlaying || customPlaying;
  }

  hasActiveOrPausedSounds() {
    return Object.keys(this.sounds).length > 0 || Object.keys(this.customSounds).length > 0;
  }

  stopAllSounds() {
    Object.keys(this.sounds).forEach(type => this.stopSound(type));
    Object.keys(this.customSounds).forEach(id => this.stopCustomSound(id));
  }

  // -------------------------------------------------------------------------
  // Custom Sounds (IndexedDB Storage & HTML5 Web Audio Node Playback)
  // -------------------------------------------------------------------------
  async getDb() {
    if (this.db) return this.db;
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('FocusDockAudioDB', 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains('sounds')) {
          db.createObjectStore('sounds', { keyPath: 'id' });
        }
      };
      req.onsuccess = (e) => {
        this.db = e.target.result;
        resolve(this.db);
      };
      req.onerror = (e) => reject(e);
    });
  }

  async saveCustomSoundToDb(id, name, blob) {
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sounds', 'readwrite');
      const store = tx.objectStore('sounds');
      const item = { id, name, blob, createdAt: Date.now() };
      store.put(item);
      tx.oncomplete = () => resolve(item);
      tx.onerror = (e) => reject(e);
    });
  }

  async getAllCustomSoundsFromDb() {
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sounds', 'readonly');
      const store = tx.objectStore('sounds');
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = (e) => reject(e);
    });
  }

  async deleteCustomSoundFromDb(id) {
    this.stopCustomSound(id);
    const db = await this.getDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('sounds', 'readwrite');
      const store = tx.objectStore('sounds');
      store.delete(id);
      tx.oncomplete = () => resolve();
      tx.onerror = (e) => reject(e);
    });
  }

  playCustomSound(id, blob, volume = 0.5) {
    if (!this.initialized) this.init();
    this.resume();

    if (this.customSounds[id]) {
      const item = this.customSounds[id];
      item.isPaused = false;
      if (item.audioEl.paused) {
        item.audioEl.play().catch(err => console.warn('Audio play error:', err));
      }
      this.setCustomSoundVolume(id, volume);
      return;
    }

    const audioUrl = URL.createObjectURL(blob);
    const audioEl = new Audio(audioUrl);
    audioEl.loop = true;

    const sourceNode = this.ctx.createMediaElementSource(audioEl);
    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(volume, this.ctx.currentTime);

    sourceNode.connect(gainNode);
    gainNode.connect(this.masterGain);

    audioEl.play().catch(err => console.warn('Audio play error:', err));

    this.customSounds[id] = {
      audioEl,
      audioUrl,
      sourceNode,
      gainNode,
      volume,
      blob,
      isPaused: false
    };
  }

  pauseCustomSound(id) {
    if (this.customSounds[id]) {
      const item = this.customSounds[id];
      item.audioEl.pause();
      item.isPaused = true;
    }
  }

  resumeCustomSound(id) {
    if (this.customSounds[id]) {
      const item = this.customSounds[id];
      this.resume();
      item.isPaused = false;
      item.audioEl.play().catch(err => console.warn('Audio resume error:', err));
      this.setCustomSoundVolume(id, item.volume);
    }
  }

  getCustomSoundState(id) {
    if (this.customSounds[id] && this.customSounds[id].audioEl) {
      const item = this.customSounds[id];
      return {
        active: true,
        isPaused: item.isPaused || item.audioEl.paused,
        current: Math.floor(item.audioEl.currentTime || 0),
        duration: Math.floor(item.audioEl.duration || 0)
      };
    }
    return { active: false, isPaused: false, current: 0, duration: 0 };
  }

  setCustomSoundVolume(id, volume) {
    if (!this.initialized) this.init();
    this.resume();

    if (!this.customSounds[id]) return;
    const clamped = Math.max(0, Math.min(1, volume));
    this.customSounds[id].gainNode.gain.setTargetAtTime(clamped, this.ctx.currentTime, 0.05);
    this.customSounds[id].volume = clamped;
  }

  stopCustomSound(id) {
    if (this.customSounds[id]) {
      const item = this.customSounds[id];
      try {
        item.audioEl.pause();
        item.audioEl.currentTime = 0;
        URL.revokeObjectURL(item.audioUrl);
        item.sourceNode.disconnect();
        item.gainNode.disconnect();
      } catch (e) {}
      delete this.customSounds[id];
    }
  }

  // -------------------------------------------------------------------------
  // Procedural Noise Generators (Brown, White, Pink)
  // -------------------------------------------------------------------------
  createWhiteNoise(destination) {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 400;

    whiteNoise.connect(filter);
    filter.connect(destination);
    whiteNoise.start(0);

    return [whiteNoise, filter];
  }

  createPinkNoise(destination) {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const pinkNoise = this.ctx.createBufferSource();
    pinkNoise.buffer = buffer;
    pinkNoise.loop = true;

    pinkNoise.connect(destination);
    pinkNoise.start(0);

    return [pinkNoise];
  }

  createBrownNoise(destination) {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 3.5;
    }

    const brownNoise = this.ctx.createBufferSource();
    brownNoise.buffer = buffer;
    brownNoise.loop = true;

    const lowpass = this.ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 650;

    brownNoise.connect(lowpass);
    lowpass.connect(destination);
    brownNoise.start(0);

    return [brownNoise, lowpass];
  }

  createRain(destination) {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.04 * white) / 1.04;
      data[i] = lastOut * 2.2;
    }

    const rainSource = this.ctx.createBufferSource();
    rainSource.buffer = buffer;
    rainSource.loop = true;

    const lowFilter = this.ctx.createBiquadFilter();
    lowFilter.type = 'lowpass';
    lowFilter.frequency.value = 1200;

    const highFilter = this.ctx.createBiquadFilter();
    highFilter.type = 'bandpass';
    highFilter.frequency.value = 3500;
    highFilter.Q.value = 0.8;

    const splashGain = this.ctx.createGain();
    splashGain.gain.value = 0.35;

    rainSource.connect(lowFilter);
    lowFilter.connect(destination);

    rainSource.connect(highFilter);
    highFilter.connect(splashGain);
    splashGain.connect(destination);

    rainSource.start(0);

    return [rainSource, lowFilter, highFilter, splashGain];
  }

  createCampfire(destination) {
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      const crackle = Math.random() > 0.9992 ? (Math.random() * 4 - 2) : 0;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = (lastOut * 2.5) + crackle;
    }

    const fireSource = this.ctx.createBufferSource();
    fireSource.buffer = buffer;
    fireSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1800;

    fireSource.connect(filter);
    filter.connect(destination);
    fireSource.start(0);

    return [fireSource, filter];
  }

  createAlphaWaves(destination) {
    const merger = this.ctx.createChannelMerger(2);

    const oscLeft = this.ctx.createOscillator();
    oscLeft.type = 'sine';
    oscLeft.frequency.value = 200;

    const oscRight = this.ctx.createOscillator();
    oscRight.type = 'sine';
    oscRight.frequency.value = 212;

    const subGain = this.ctx.createGain();
    subGain.gain.value = 0.4;

    oscLeft.connect(merger, 0, 0);
    oscRight.connect(merger, 0, 1);
    merger.connect(subGain);
    subGain.connect(destination);

    oscLeft.start(0);
    oscRight.start(0);

    return [oscLeft, oscRight, merger, subGain];
  }

  playChime(type = 'bowl') {
    try {
      if (!this.initialized) this.init();
      if (!this.ctx) return;

      const trigger = () => {
        try {
          const now = this.ctx.currentTime + 0.05;

          // Duck ambient sounds temporarily so chime cuts through with crystal clarity
          if (this.masterGain && !this.isMuted) {
            const normalVol = 1.0;
            this.masterGain.gain.setValueAtTime(normalVol, now);
            this.masterGain.gain.setTargetAtTime(0.18, now, 0.08);
            this.masterGain.gain.setTargetAtTime(normalVol, now + 3.2, 0.6);
          }

          let strikes = [];
          if (type === 'focus') {
            // 3-stage uplifting triad chime: A4 (440Hz) -> C#5 (554Hz) -> E5 (659Hz) with crystalline resonance
            strikes = [
              { offset: 0, freqs: [440, 880, 1320], gains: [0.75, 0.35, 0.15], peak: 0.9, decay: 1.4 },
              { offset: 0.28, freqs: [554.37, 1108.7, 1663], gains: [0.8, 0.4, 0.18], peak: 0.95, decay: 1.6 },
              { offset: 0.62, freqs: [659.25, 1318.5, 1977], gains: [0.95, 0.5, 0.25], peak: 1.1, decay: 2.8 }
            ];
          } else {
            // Two-stage Tibetan singing bowl resonance:
            // Strike 1 (now): 280Hz fundamental + 560Hz overtone + 842Hz sparkle
            // Strike 2 (now + 0.85s): Deeper 350Hz / 700Hz harmonic gong with long singing sustain
            strikes = [
              { offset: 0, freqs: [280, 560, 842, 1400], gains: [0.85, 0.45, 0.22, 0.12], peak: 1.0, decay: 1.6 },
              { offset: 0.85, freqs: [350, 700, 1050, 1400], gains: [0.9, 0.5, 0.28, 0.15], peak: 1.1, decay: 2.6 }
            ];
          }

          strikes.forEach(strike => {
            const strikeTime = now + strike.offset;
            const chimeGain = this.ctx.createGain();
            chimeGain.gain.setValueAtTime(strike.peak, strikeTime);
            chimeGain.gain.setTargetAtTime(0.0001, strikeTime + 0.2, strike.decay);
            chimeGain.connect(this.ctx.destination);

            strike.freqs.forEach((freq, idx) => {
              const osc = this.ctx.createOscillator();
              const overtoneGain = this.ctx.createGain();

              osc.type = 'sine';
              osc.frequency.setValueAtTime(freq, strikeTime);

              // Gentle pitch shimmer (vibrato)
              const vibrato = this.ctx.createOscillator();
              const vibratoGain = this.ctx.createGain();
              vibrato.frequency.value = 3.6;
              vibratoGain.gain.value = 1.8;
              vibrato.connect(vibratoGain);
              vibratoGain.connect(osc.frequency);
              vibrato.start(strikeTime);

              overtoneGain.gain.setValueAtTime(strike.gains[idx], strikeTime);
              overtoneGain.gain.setTargetAtTime(0.0001, strikeTime + 0.12, strike.decay);

              osc.connect(overtoneGain);
              overtoneGain.connect(chimeGain);

              osc.start(strikeTime);
              osc.stop(strikeTime + 5.5);
              vibrato.stop(strikeTime + 5.5);
            });
          });
        } catch (e) {
          console.warn('[FocusDock Audio] Internal chime trigger error:', e);
        }
      };

      if (this.ctx.state === 'suspended') {
        this.ctx.resume().then(trigger).catch(trigger);
      } else {
        trigger();
      }
    } catch (err) {
      console.warn('[FocusDock Audio] playChime failed:', err);
    }
  }
}

window.audioEngine = new AudioEngine();
