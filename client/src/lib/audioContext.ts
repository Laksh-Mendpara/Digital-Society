let sharedAudioContext: AudioContext | null = null;
let audioUnlocked = false;
let currentStopCallback: (() => void) | null = null;

export function isAudioUnlocked(): boolean {
  return audioUnlocked;
}

export function getAudioContext(): AudioContext | null {
  return sharedAudioContext;
}

export async function unlockAudioContext(): Promise<AudioContext | null> {
  if (typeof window === 'undefined') return null;
  
  if (!sharedAudioContext) {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      sharedAudioContext = new AudioContextClass();
    }
  }
  
  if (sharedAudioContext && sharedAudioContext.state === 'suspended') {
    try {
      await sharedAudioContext.resume();
      audioUnlocked = true;
    } catch (e) {
      console.error('Failed to resume AudioContext:', e);
    }
  } else if (sharedAudioContext) {
    audioUnlocked = true;
  }
  
  return sharedAudioContext;
}

export function registerAmbientAudio(stopCallback: () => void): void {
  if (currentStopCallback) {
    currentStopCallback();
  }
  currentStopCallback = stopCallback;
}

export function unregisterAmbientAudio(): void {
  currentStopCallback = null;
}
