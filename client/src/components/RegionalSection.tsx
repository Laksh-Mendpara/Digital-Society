import { useEffect, useRef, useState } from "react";
import ComicPanel from "./ComicPanel";
import { Card } from "@/components/ui/card";

interface ComicPanelData {
  image?: string;
  caption: string;
  narrativeTitle?: string;
}

interface CulturalImage {
  image: string;
  caption: string;
}

interface RegionalSectionProps {
  id: string;
  title: string;
  subtitle: string;
  backgroundColor: string;
  backgroundImage?: string;
  comicPanels: ComicPanelData[];
  history: string;
  culture: string;
  culturalImages?: CulturalImage[];
  animationClass?: string;
}

export default function RegionalSection({
  id,
  title,
  subtitle,
  backgroundColor,
  backgroundImage,
  comicPanels,
  history,
  culture,
  culturalImages,
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
        <div className="mb-12">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {comicPanels.map((panel, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? 'md:translate-y-8' : ''
              } ${
                index === 2 ? 'md:translate-y-4' : ''
              }`}
            >
              <ComicPanel
                image={panel.image}
                caption={panel.caption}
                delay={index * 150}
                panelNumber={index + 1}
                narrativeTitle={`Chapter ${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
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

        {culturalImages && culturalImages.length > 0 && (
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-display text-3xl font-bold mb-8 text-foreground uppercase tracking-wide">
              Local Culture & Traditions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturalImages.map((item, index) => (
                <Card
                  key={index}
                  className={`overflow-hidden hover-elevate hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group ${
                    index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-4'
                  }`}
                  data-testid={`card-culture-${index}`}
                >
                  <div className="aspect-square bg-gradient-to-br from-[#F4C2C2] to-[#E89BA3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 bg-card">
                    <p className="font-sans text-sm text-card-foreground leading-snug group-hover:text-primary transition-colors">
                      {item.caption}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
