import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { unlockAudioContext, getAudioContext, registerAmbientAudio, unregisterAmbientAudio } from "@/lib/audioContext";

interface AudioToggleProps {
  label: string;
  regionName: string;
}

export default function AudioToggle({ label, regionName }: AudioToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodesRef = useRef<GainNode[]>([]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const createAmbientSound = (context: AudioContext, type: string) => {
    const soundMap: { [key: string]: { frequencies: number[], type: OscillatorType, volume: number }[] } = {
      "Shekhawati": [
        { frequencies: [220, 330, 440], type: 'sine', volume: 0.08 },
        { frequencies: [165, 247], type: 'triangle', volume: 0.05 }
      ],
      "Bundi": [
        { frequencies: [130, 195, 260], type: 'sine', volume: 0.06 },
        { frequencies: [98, 147], type: 'triangle', volume: 0.04 }
      ],
      "Jodhpur": [
        { frequencies: [196, 294, 392], type: 'sawtooth', volume: 0.07 },
        { frequencies: [147, 220], type: 'sine', volume: 0.05 }
      ],
      "Mehrangarh Fort": [
        { frequencies: [110, 165, 220], type: 'square', volume: 0.06 },
        { frequencies: [82, 123], type: 'triangle', volume: 0.04 }
      ],
      "Udaipur": [
        { frequencies: [174, 261, 349], type: 'sine', volume: 0.07 },
        { frequencies: [130, 195], type: 'triangle', volume: 0.05 }
      ],
      "Barmer": [
        { frequencies: [196, 294, 392], type: 'triangle', volume: 0.08 },
        { frequencies: [147, 220], type: 'sine', volume: 0.06 }
      ],
      "Jaisalmer": [
        { frequencies: [146, 219, 293], type: 'sine', volume: 0.06 },
        { frequencies: [110, 165], type: 'triangle', volume: 0.04 }
      ],
      "Pushkar": [
        { frequencies: [261, 392, 523], type: 'sine', volume: 0.09 },
        { frequencies: [196, 294], type: 'triangle', volume: 0.06 }
      ],
      "Chittorgarh": [
        { frequencies: [130, 195, 260], type: 'square', volume: 0.07 },
        { frequencies: [98, 147], type: 'triangle', volume: 0.05 }
      ],
      "Ranakpur": [
        { frequencies: [523, 784, 1046], type: 'sine', volume: 0.05 },
        { frequencies: [392, 587], type: 'triangle', volume: 0.03 }
      ],
      "Rural Dhani": [
        { frequencies: [146, 219, 293], type: 'triangle', volume: 0.07 },
        { frequencies: [110, 165], type: 'sine', volume: 0.05 }
      ]
    };

    const soundConfig = soundMap[regionName] || soundMap["Shekhawati"];

    soundConfig.forEach((config, index) => {
      config.frequencies.forEach((freq, freqIndex) => {
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();
        const filterNode = context.createBiquadFilter();
        
        oscillator.type = config.type;
        oscillator.frequency.value = freq;
        
        filterNode.type = 'lowpass';
        filterNode.frequency.value = 800;
        
        oscillator.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(context.destination);
        
        gainNode.gain.setValueAtTime(0, context.currentTime);
        gainNode.gain.linearRampToValueAtTime(config.volume, context.currentTime + 1);
        
        oscillator.start();
        
        oscillatorsRef.current.push(oscillator);
        gainNodesRef.current.push(gainNode);
        
        const lfoGain = context.createGain();
        const lfo = context.createOscillator();
        lfo.frequency.value = 0.1 + (index * 0.05) + (freqIndex * 0.02);
        lfoGain.gain.value = config.volume * 0.3;
        lfo.connect(lfoGain);
        lfoGain.connect(gainNode.gain);
        lfo.start();
        
        oscillatorsRef.current.push(lfo);
      });
    });
  };

  const stopAudio = () => {
    oscillatorsRef.current.forEach(osc => {
      try {
        osc.stop();
      } catch (e) {
      }
    });
    oscillatorsRef.current = [];
    gainNodesRef.current = [];
    audioContextRef.current = null;
  };

  const handleToggle = async () => {
    if (!isPlaying) {
      const context = await unlockAudioContext();
      if (context) {
        audioContextRef.current = context;
        createAmbientSound(context, regionName);
        registerAmbientAudio(() => {
          stopAudio();
          setIsPlaying(false);
        });
        setIsPlaying(true);
        console.log(`Playing ${label} audio for ${regionName}`);
      }
    } else {
      stopAudio();
      unregisterAmbientAudio();
      setIsPlaying(false);
      console.log(`Stopping audio for ${regionName}`);
    }
  };

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="sm"
      className={cn(
        "backdrop-blur-sm transition-all hover:scale-105",
        isPlaying && "bg-primary/10 border-primary animate-pulse shadow-lg"
      )}
      data-testid={`button-audio-${regionName.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {isPlaying ? (
        <Volume2 className="h-4 w-4 mr-2 animate-pulse" />
      ) : (
        <VolumeX className="h-4 w-4 mr-2" />
      )}
      {label}
    </Button>
  );
}
