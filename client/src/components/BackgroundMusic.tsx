import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/ghoomar.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // Set volume to 30%

    // Try to autoplay (will work after user interaction)
    const playAudio = async () => {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (error) {
        // Autoplay blocked - will play after user interaction
        console.log("Autoplay blocked. Click to play music.");
      }
    };

    playAudio();

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0.3;
        if (!isPlaying) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      } else {
        audioRef.current.volume = 0;
      }
      setIsMuted(!isMuted);
    }
  };

  const handleClick = async () => {
    if (!isPlaying && audioRef.current) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    } else {
      toggleMute();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={handleClick}
        variant="outline"
        size="icon"
        className="bg-white/90 backdrop-blur-sm border-[#D4846A] text-[#2E3A8C] hover:bg-white shadow-lg rounded-full w-14 h-14"
        title={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6" />
        ) : (
          <Volume2 className="h-6 w-6 animate-pulse" />
        )}
      </Button>
    </div>
  );
}
