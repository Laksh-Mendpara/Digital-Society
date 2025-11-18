import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

interface ComicPanelProps {
  image?: string;
  caption: string;
  delay?: number;
}

export default function ComicPanel({ image, caption, delay = 0 }: ComicPanelProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <Card
      ref={ref}
      className={`overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      data-testid="card-comic-panel"
    >
      {image && (
        <div className="aspect-[4/3] bg-gradient-to-br from-[#F4C2C2] to-[#E89BA3] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={caption}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6 bg-card">
        <p className="font-serif italic text-base text-card-foreground leading-relaxed" data-testid="text-panel-caption">
          {caption}
        </p>
      </div>
    </Card>
  );
}
