import mandalaImage from "@assets/generated_images/Rajasthani_mandala_desert_motif_ad5035d7.png";

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#EDD5B3] via-[#F4C2C2] to-[#D4846A]">
      <div
        className="absolute inset-0 opacity-20 animate-drift"
        style={{
          backgroundImage: `url(${mandalaImage})`,
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        }}
      />
      
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <div className="mb-12 opacity-30">
          <img
            src={mandalaImage}
            alt="Rajasthani mandala"
            className="w-32 h-32 mx-auto opacity-60"
          />
        </div>

        <h1
          className="font-display text-5xl md:text-7xl font-bold mb-8 text-[#2E3A8C] animate-fade-in"
          data-testid="text-hero-title"
        >
          Rajasthan: The Living Museum
        </h1>

        <p
          className="font-serif text-xl md:text-2xl leading-relaxed mb-12 text-[#4A5899] max-w-3xl mx-auto"
          data-testid="text-hero-subtitle"
        >
          Rajasthan is not just a land of palaces and deserts. It is a museum
          without walls — where water sings, marble hums, puppets rebel,
          frescoes imagine science fiction, and every region tells a different
          story.
        </p>

        <div className="mt-8 text-[#4A5899] font-serif text-sm animate-fade-in">
          Scroll to begin your journey ↓
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20 pointer-events-none" />
    </section>
  );
}
