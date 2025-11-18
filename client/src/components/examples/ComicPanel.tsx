import ComicPanel from "../ComicPanel";
import frescoImage from "@assets/generated_images/Shekhawati_fresco_comic_panel_ef5ab5f5.png";

export default function ComicPanelExample() {
  return (
    <div className="p-8 bg-background">
      <ComicPanel
        image={frescoImage}
        caption="Merchant hears stories of Europe from travelers. He heard of cars, phones, and flying machines… but had never seen them."
      />
    </div>
  );
}
