import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { getAudioContext, isAudioUnlocked } from "@/lib/audioContext";

interface ComicPanelProps {
  image?: string;
  caption: string;
  delay?: number;
  panelNumber?: number;
  narrativeTitle?: string;
}

export default function ComicPanel({ 
  image, 
  caption, 
  delay = 0, 
  panelNumber,
  narrativeTitle 
}: ComicPanelProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const playHoverSound = () => {
    if (!isAudioUnlocked()) return;
    
    const audioContext = getAudioContext();
    if (!audioContext) return;

    try {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 600;
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      console.error('Audio playback error:', e);
    }
  };

  return (
    <Card
      ref={ref}
      className={`overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="card-comic-panel"
      onMouseEnter={() => {
        setIsHovered(true);
        playHoverSound();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="aspect-[4/3] bg-gradient-to-br from-[#F4C2C2] to-[#E89BA3] flex items-center justify-center overflow-hidden relative">
          <img
            src={image}
            alt={caption}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
          {panelNumber && (
            <div className="absolute top-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
              <span className="text-white font-bold text-sm">{panelNumber}</span>
            </div>
          )}
        </div>
      )}
      <div className="p-6 bg-card border-t-4 border-primary/20">
        {narrativeTitle && (
          <h4 className="font-display text-sm font-bold mb-2 text-primary uppercase tracking-wide">
            {narrativeTitle}
          </h4>
        )}
        <p className="font-serif italic text-base text-card-foreground leading-relaxed" data-testid="text-panel-caption">
          {caption}
        </p>
      </div>
    </Card>
  );
}
