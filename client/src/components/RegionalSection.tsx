import { useEffect, useRef, useState } from "react";
import ComicPanel from "./ComicPanel";
import AudioToggle from "./AudioToggle";
import { Card } from "@/components/ui/card";

interface ComicPanelData {
  image?: string;
  caption: string;
}

interface RegionalSectionProps {
  id: string;
  title: string;
  subtitle: string;
  backgroundColor: string;
  backgroundImage?: string;
  audioLabel: string;
  comicPanels: ComicPanelData[];
  history: string;
  culture: string;
  animationClass?: string;
}

export default function RegionalSection({
  id,
  title,
  subtitle,
  backgroundColor,
  backgroundImage,
  audioLabel,
  comicPanels,
  history,
  culture,
  animationClass,
}: RegionalSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className="relative min-h-screen py-24 px-8 overflow-hidden"
      style={{ backgroundColor }}
      data-testid={`section-${id}`}
    >
      {backgroundImage && (
        <div
          className={`absolute inset-0 opacity-10 ${animationClass || ""}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-block mb-3">
              <div className="h-1 w-24 bg-primary/40 mb-4" />
            </div>
            <h2
              className="font-display text-4xl md:text-5xl font-bold mb-3 uppercase tracking-wide"
              data-testid={`text-${id}-title`}
            >
              {title}
            </h2>
            <p className="font-serif text-2xl italic opacity-80" data-testid={`text-${id}-subtitle`}>
              {subtitle}
            </p>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <AudioToggle label={audioLabel} regionName={title} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {comicPanels.map((panel, index) => (
            <ComicPanel
              key={index}
              image={panel.image}
              caption={panel.caption}
              delay={index * 150}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            className={`p-8 bg-white/80 dark:bg-card/80 backdrop-blur-sm transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-primary uppercase tracking-wide">
              History
            </h3>
            <div className="font-sans text-base leading-relaxed text-card-foreground whitespace-pre-line" data-testid={`text-${id}-history`}>
              {history}
            </div>
          </Card>

          <Card
            className={`p-8 bg-white/80 dark:bg-card/80 backdrop-blur-sm transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-primary uppercase tracking-wide">
              Culture
            </h3>
            <div className="font-sans text-base leading-relaxed text-card-foreground whitespace-pre-line" data-testid={`text-${id}-culture`}>
              {culture}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
