import { useEffect, useRef, useState } from "react";

const culturalElements = [
  { name: "Fresco", icon: "🎨" },
  { name: "Stepwell", icon: "💧" },
  { name: "Mirror", icon: "✨" },
  { name: "Puppet", icon: "🎭" },
  { name: "Dune", icon: "🏜️" },
  { name: "Lotus", icon: "🌸" },
  { name: "Fort", icon: "🏰" },
  { name: "Music", icon: "🎵" },
];

export default function ClosingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-32 px-8 overflow-hidden bg-gradient-to-b from-[#D4846A] via-[#4A5899] to-[#2E3A8C]"
      data-testid="section-closing"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-4 gap-8 mb-16">
          {culturalElements.map((element, index) => (
            <div
              key={element.name}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl mb-2 filter drop-shadow-lg">
                {element.icon}
              </div>
              <div className="font-serif text-sm text-white/80">
                {element.name}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-8 text-white"
            data-testid="text-closing-title"
          >
            The Living Museum Continues
          </h2>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto" data-testid="text-closing-message">
            Rajasthan is a living museum — not of royalty alone, but of
            artisans, mothers, musicians, caravans, storytellers, dancers, and
            dreamers.
            <br />
            <br />
            <span className="italic">Carry these stories forward.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
