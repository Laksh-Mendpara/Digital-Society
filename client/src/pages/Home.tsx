import HeroSection from "@/components/HeroSection";
import RegionalSection from "@/components/RegionalSection";
import ClosingSection from "@/components/ClosingSection";
import frescoImage from "@assets/generated_images/Shekhawati_fresco_comic_panel_ef5ab5f5.png";
import stepwellImage from "@assets/generated_images/Bundi_stepwell_architectural_illustration_5b60a3f1.png";
import jodhpurImage from "@assets/generated_images/Jodhpur_blue_city_panorama_28781efd.png";
import fortImage from "@assets/generated_images/Mehrangarh_Fort_illustration_125df1d7.png";
import udaipurImage from "@assets/generated_images/Udaipur_palace_and_lake_2c93c672.png";
import puppetImage from "@assets/generated_images/Kathputli_puppet_illustration_0c859712.png";
import jaisalmerImage from "@assets/generated_images/Jaisalmer_desert_landscape_5f5afeb7.png";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection />

      <RegionalSection
        id="shekhawati"
        title="Shekhawati"
        subtitle="The Surreal Open-Air Art Gallery"
        backgroundColor="#F4C2C2"
        backgroundImage={frescoImage}
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

      <RegionalSection
        id="bundi"
        title="Bundi"
        subtitle="The City Where Water Spoke"
        backgroundColor="#9BC4E2"
        backgroundImage={stepwellImage}
        audioLabel="Water Echoes"
        comicPanels={[
          {
            image: stepwellImage,
            caption: "Women stand at stepwell edge at dusk. 'Water was judged not by sight, but by sound.'",
          },
          {
            caption: "Girl throws a bowl; echo rings. 'A deep echo meant sweet rainwater; a flat one meant danger.'",
          },
          {
            caption: "Torchlight reveals layers of steps like an infinite maze.",
          },
        ]}
        history="Bundi's 50+ stepwells were marvels of water engineering (13th–17th century). Acoustics helped determine water quality & monsoon prediction."
        culture="Stepwells doubled as social gathering spaces. Women exchanged news, sang songs, and offered prayers."
        animationClass="animate-shimmer bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
      />

      <RegionalSection
        id="jodhpur"
        title="Jodhpur"
        subtitle="The Blue City of Songs and Memory"
        backgroundColor="#5B7FA8"
        backgroundImage={jodhpurImage}
        audioLabel="Ravanhatta"
        comicPanels={[
          {
            image: jodhpurImage,
            caption: "A Manganiyar sings to a newborn child. 'We remember 30 generations of your family.'",
          },
          {
            caption: "Rajput noble listens. 'Their songs are moving genealogies.'",
          },
          {
            caption: "The blue city spreads behind them.",
          },
        ]}
        history="Manganiyars maintained oral genealogical records for Rajputs. Blue color believed to cool buildings & reflect caste-based settlement patterns."
        culture="Jodhpur is known for opium-sharing traditions (Amal). Music central to festivals & life-cycle ceremonies."
      />

      <RegionalSection
        id="mehrangarh"
        title="Mehrangarh Fort"
        subtitle="The Fort That Never Fell"
        backgroundColor="#C96449"
        backgroundImage={fortImage}
        audioLabel="Cannon Echo"
        comicPanels={[
          {
            image: fortImage,
            caption: "Hermit curses the land.",
          },
          {
            caption: "A man offers his life to lift the curse.",
          },
          {
            caption: "Foundation stone laid over his sacrifice.",
          },
        ]}
        history="Built 1459 by Rao Jodha. One of the best-preserved Rajput forts. Never conquered due to strategic height & walls."
        culture="Mehrangarh hosts annual music festivals celebrating desert heritage."
      />

      <RegionalSection
        id="udaipur"
        title="Udaipur"
        subtitle="City of Mirrors and Lakes"
        backgroundColor="#B8D4E8"
        backgroundImage={udaipurImage}
        audioLabel="Lake Waves"
        comicPanels={[
          {
            image: udaipurImage,
            caption: "Queen uses mirror to send signals across the lake.",
          },
          {
            caption: "Palace guard receives coded flash.",
          },
          {
            caption: "Entire palace lights up.",
          },
        ]}
        history="Mewar queens used mirror signaling systems during sieges. Udaipur founded by Maharana Udai Singh in 1559. Known for architectural water management."
        culture="Miniature paintings. Traditional boat races. Shilpgram crafts village."
        animationClass="animate-glint"
      />

      <RegionalSection
        id="barmer"
        title="Barmer"
        subtitle="The Puppets That Fought Kings"
        backgroundColor="#EDD5B3"
        backgroundImage={puppetImage}
        audioLabel="Puppet Theatre"
        comicPanels={[
          {
            image: puppetImage,
            caption: "King bans poets from mocking him.",
          },
          {
            caption: "Puppeteers create a puppet that imitates the king.",
          },
          {
            caption: "Audience laughs as puppet says truths no human could.",
          },
        ]}
        history="Kathputli puppetry dates back 1,000 years. Used for teaching, satire, and political critique."
        culture="Barmer also known for ajrakh block printing & wooden carvings."
        animationClass="animate-swing"
      />

      <RegionalSection
        id="jaisalmer"
        title="Jaisalmer"
        subtitle="The Desert Mirage City"
        backgroundColor="#D4AF6A"
        backgroundImage={jaisalmerImage}
        audioLabel="Desert Wind"
        comicPanels={[
          {
            image: jaisalmerImage,
            caption: "Caravan leader shows children how to read dune wind patterns.",
          },
          {
            caption: "They avoid a mirage.",
          },
          {
            caption: "Golden fort rises through dust.",
          },
        ]}
        history="Important Silk Route link. Caravans traded with Persia, Arabia, and Central Asia. Fort built in 1156 AD."
        culture="Dastangoi (storytelling). Ghoomar & Kalbeliya dance. Desert cooking on embers."
      />

      <RegionalSection
        id="pushkar"
        title="Pushkar"
        subtitle="The Lotus of Creation"
        backgroundColor="#F4C2C2"
        audioLabel="Temple Bells"
        comicPanels={[
          {
            caption: "Brahma drops lotus → lake forms.",
          },
          {
            caption: "Pilgrims gather.",
          },
          {
            caption: "Brahma temple stands tall.",
          },
        ]}
        history="Only dedicated Brahma temple in India. Dates to 14th century (rebuilt multiple times)."
        culture="Annual camel fair. Sacred lake rituals. Rose cultivation."
      />

      <RegionalSection
        id="chittorgarh"
        title="Chittorgarh"
        subtitle="The Flame of Courage"
        backgroundColor="#D4846A"
        audioLabel="War Drums"
        comicPanels={[
          {
            caption: "Soldiers prepare for siege.",
          },
          {
            caption: "Women gather together, determined.",
          },
          {
            caption: "Flame rises — symbol of sacrifice.",
          },
        ]}
        history="Faced three major sieges: Alauddin Khilji, Bahadur Shah, Akbar. Symbol of Rajput honor & resistance."
        culture="Fairs celebrating local heroes. Phad storytelling tradition."
      />

      <RegionalSection
        id="ranakpur"
        title="Ranakpur"
        subtitle="The Marble Symphony"
        backgroundColor="#E8E8E8"
        audioLabel="Marble Notes"
        comicPanels={[
          {
            caption: "Two artisans tap pillars.",
          },
          {
            caption: "Pillar emits a clear note.",
          },
          {
            caption: "Forest of 1,444 pillars appears.",
          },
        ]}
        history="Built in 15th century by Dharna Shah. Famous for 1,444 unique pillars — none identical. Some pillars are acoustically tuned."
        culture="Jain tradition of precision, symmetry, and non-violence."
      />

      <RegionalSection
        id="rural-dhani"
        title="Rural Dhani"
        subtitle="Heart of the Desert"
        backgroundColor="#C9A876"
        audioLabel="Village Sounds"
        comicPanels={[
          {
            caption: "Grandma teaches child to knead dough.",
          },
          {
            caption: "Chulha fire glows.",
          },
          {
            caption: "Desert night sky blankets the home.",
          },
        ]}
        history="Remote Rajasthan villages preserved age-old water conservation: Taanka (underground tank), Johad (small check dams). Architecture was climate-responsive."
        culture="Bajra rotis. Camel milk traditions. Handmade quilts (ralli)."
      />

      <ClosingSection />
    </div>
  );
}
