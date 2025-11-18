import RegionalSection from "../RegionalSection";
import frescoImage from "@assets/generated_images/Shekhawati_fresco_comic_panel_ef5ab5f5.png";

export default function RegionalSectionExample() {
  return (
    <RegionalSection
      id="shekhawati"
      title="Shekhawati"
      subtitle="The Surreal Open-Air Art Gallery"
      backgroundColor="#F4C2C2"
      audioLabel="Sarangi & Bazaar"
      comicPanels={[
        {
          image: frescoImage,
          caption: "Merchant hears stories of Europe from travelers. 'He heard of cars, phones, and flying machines… but had never seen them.'",
        },
        {
          caption: "Painter imagines a Ford car → paints one driven by Krishna. 'Imagination filled the gaps of reality.'",
        },
        {
          caption: "British soldier painted with angel wings. 'Satire and fantasy blended into everyday walls.'",
        },
      ]}
      history="Between 1850–1930, Shekhawati merchants built havelis showcasing their wealth. They instructed fresco painters to depict modern inventions, often based on hearsay. Result: world's largest collection of anachronistic murals."
      culture="Women used fresco courtyards for songs, gatherings, and festivals. The region had a unique tradition of 'wall storytelling.'"
    />
  );
}
