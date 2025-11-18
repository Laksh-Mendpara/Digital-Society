import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with autoplay
    const audio = new Audio("/ghoomar.mp3");
    audio.loop = true;
    audio.volume = 0.3; // Set volume to 30%
    audio.autoplay = true;
    audio.muted = false;
    audioRef.current = audio;

    // Start playing immediately
    const playAudio = async () => {
      try {
        // Force play with a promise
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        // If autoplay is blocked, keep trying on interactions
        console.log("Autoplay blocked by browser, will retry on user interaction");
        
        const retryPlay = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            // Remove all listeners after successful play
            document.removeEventListener("click", retryPlay);
            document.removeEventListener("scroll", retryPlay);
            document.removeEventListener("keydown", retryPlay);
            document.removeEventListener("touchstart", retryPlay);
          } catch (e) {
            console.log("Retry failed:", e);
          }
        };
        
        document.addEventListener("click", retryPlay, { once: true });
        document.addEventListener("scroll", retryPlay, { once: true });
        document.addEventListener("keydown", retryPlay, { once: true });
        document.addEventListener("touchstart", retryPlay, { once: true });
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
