import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AudioToggleProps {
  label: string;
  regionName: string;
}

export default function AudioToggle({ label, regionName }: AudioToggleProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
    console.log(`${isPlaying ? "Pausing" : "Playing"} audio for ${regionName}`);
  };

  return (
    <Button
      onClick={handleToggle}
      variant="outline"
      size="sm"
      className={cn(
        "backdrop-blur-sm transition-all",
        isPlaying && "bg-primary/10 border-primary animate-glint"
      )}
      data-testid={`button-audio-${regionName.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {isPlaying ? (
        <Volume2 className="h-4 w-4 mr-2" />
      ) : (
        <VolumeX className="h-4 w-4 mr-2" />
      )}
      {label}
    </Button>
  );
}
