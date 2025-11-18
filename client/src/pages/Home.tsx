import HeroSection from "@/components/HeroSection";
import RegionalSection from "@/components/RegionalSection";
import ClosingSection from "@/components/ClosingSection";

// Original images
import frescoImage from "@assets/generated_images/Shekhawati_fresco_comic_panel_ef5ab5f5.png";
import stepwellImage from "@assets/generated_images/Bundi_stepwell_architectural_illustration_5b60a3f1.png";
import jodhpurImage from "@assets/generated_images/Jodhpur_blue_city_panorama_28781efd.png";
import fortImage from "@assets/generated_images/Mehrangarh_Fort_illustration_125df1d7.png";
import udaipurImage from "@assets/generated_images/Udaipur_palace_and_lake_2c93c672.png";
import puppetImage from "@assets/generated_images/Kathputli_puppet_illustration_0c859712.png";
import jaisalmerImage from "@assets/generated_images/Jaisalmer_desert_landscape_5f5afeb7.png";

// New comic panel images
import frescoCarImage from "@assets/generated_images/Shekhawati_fresco_artist_painting_car_8f5076a9.png";
import frescoAngelImage from "@assets/generated_images/Shekhawati_soldier_angel_fresco_37add40f.png";
import bundiEchoImage from "@assets/generated_images/Bundi_stepwell_echo_test_27d2c962.png";
import bundiStepsImage from "@assets/generated_images/Bundi_stepwell_infinite_steps_75de3a74.png";
import jodhpurSingerImage from "@assets/generated_images/Jodhpur_Manganiyar_genealogy_song_6e860c88.png";
import jodhpurCityImage from "@assets/generated_images/Jodhpur_blue_city_spread_dabbd461.png";
import fortCurseImage from "@assets/generated_images/Mehrangarh_hermit_curse_03745d91.png";
import fortSacrificeImage from "@assets/generated_images/Mehrangarh_foundation_sacrifice_eecd2a5d.png";
import udaipurMirrorImage from "@assets/generated_images/Udaipur_mirror_signal_communication_e0b8672a.png";
import udaipurSignalImage from "@assets/generated_images/Udaipur_palace_signal_received_be54e67f.png";
import barmerKingImage from "@assets/generated_images/Barmer_king_banning_poets_406111a4.png";
import barmerPuppetImage from "@assets/generated_images/Barmer_satirical_puppet_show_bd514ed9.png";
import jaisalmerNavigationImage from "@assets/generated_images/Jaisalmer_desert_navigation_lesson_cfaca9af.png";
import jaisalmerMirageImage from "@assets/generated_images/Jaisalmer_mirage_avoidance_b40bbb44.png";
import pushkarLotusImage from "@assets/generated_images/Pushkar_lotus_lake_creation_6a17e495.png";
import pushkarPilgrimsImage from "@assets/generated_images/Pushkar_pilgrims_gathering_b2fefd43.png";
import chittorgarhSoldiersImage from "@assets/generated_images/Chittorgarh_soldiers_preparing_siege_c808d8fe.png";
import chittorgarhWomenImage from "@assets/generated_images/Chittorgarh_women_unity_courage_a57e7a7a.png";
import ranakpurTestingImage from "@assets/generated_images/Ranakpur_pillar_acoustic_testing_bece8b76.png";
import ranakpurPillarsImage from "@assets/generated_images/Ranakpur_pillar_forest_interior_e96cf63b.png";
import ruralCookingImage from "@assets/generated_images/Rural_Dhani_grandmother_teaching_cooking_f5214986.png";
import ruralFireImage from "@assets/generated_images/Rural_Dhani_chulha_fire_glow_b5dd4903.png";
import ruralNightImage from "@assets/generated_images/Rural_Dhani_starry_night_village_c7b43735.png";

// Cultural images
import ghomarDanceImage from "@assets/generated_images/Rajasthani_Ghoomar_dance_culture_a2cd8cdd.png";
import thaliImage from "@assets/generated_images/Rajasthani_traditional_thali_food_e08bf289.png";
import blockPrintImage from "@assets/generated_images/Rajasthani_block_printing_craft_db3a9510.png";
import bazaarImage from "@assets/generated_images/Rajasthani_local_market_bazaar_fed7fec8.png";
import turbanImage from "@assets/generated_images/Rajasthani_turban_tying_tradition_27a21dd2.png";

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
            image: frescoCarImage,
            caption: "Painter imagines a Ford car → paints one driven by Krishna. 'Imagination filled the gaps of reality.'",
          },
          {
            image: frescoAngelImage,
            caption: "British soldier painted with angel wings. 'Satire and fantasy blended into everyday walls.'",
          },
        ]}
        history="Between 1850–1930, Shekhawati merchants built havelis showcasing their wealth. They instructed fresco painters to depict modern inventions, often based on hearsay. Result: world's largest collection of anachronistic murals."
        culture="Women used fresco courtyards for songs, gatherings, and festivals. The region had a unique tradition of 'wall storytelling.'"
        culturalImages={[
          { image: blockPrintImage, caption: "Traditional ajrakh block printing craft" },
          { image: bazaarImage, caption: "Vibrant local bazaars with handicrafts" },
          { image: ghomarDanceImage, caption: "Ghoomar folk dance celebrations" },
          { image: turbanImage, caption: "Traditional turban tying ceremony" },
        ]}
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
            image: bundiEchoImage,
            caption: "Girl throws a bowl; echo rings. 'A deep echo meant sweet rainwater; a flat one meant danger.'",
          },
          {
            image: bundiStepsImage,
            caption: "Torchlight reveals layers of steps like an infinite maze.",
          },
        ]}
        history="Bundi's 50+ stepwells were marvels of water engineering (13th–17th century). Acoustics helped determine water quality & monsoon prediction."
        culture="Stepwells doubled as social gathering spaces. Women exchanged news, sang songs, and offered prayers."
        culturalImages={[
          { image: thaliImage, caption: "Traditional Rajasthani thali cuisine" },
          { image: ghomarDanceImage, caption: "Folk music and dance traditions" },
        ]}
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
            image: jodhpurSingerImage,
            caption: "A Manganiyar sings to a newborn child. 'We remember 30 generations of your family.'",
          },
          {
            image: jodhpurImage,
            caption: "Rajput noble listens. 'Their songs are moving genealogies.'",
          },
          {
            image: jodhpurCityImage,
            caption: "The blue city spreads behind them.",
          },
        ]}
        history="Manganiyars maintained oral genealogical records for Rajputs. Blue color believed to cool buildings & reflect caste-based settlement patterns."
        culture="Jodhpur is known for opium-sharing traditions (Amal). Music central to festivals & life-cycle ceremonies."
        culturalImages={[
          { image: ghomarDanceImage, caption: "Kalbeliya and Ghoomar dances" },
          { image: bazaarImage, caption: "Traditional spice and textile markets" },
          { image: turbanImage, caption: "Colorful Rajasthani pagdi traditions" },
        ]}
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
            image: fortCurseImage,
            caption: "Hermit curses the land.",
          },
          {
            image: fortSacrificeImage,
            caption: "A man offers his life to lift the curse.",
          },
          {
            image: fortImage,
            caption: "Foundation stone laid over his sacrifice.",
          },
        ]}
        history="Built 1459 by Rao Jodha. One of the best-preserved Rajput forts. Never conquered due to strategic height & walls."
        culture="Mehrangarh hosts annual music festivals celebrating desert heritage."
        culturalImages={[
          { image: ghomarDanceImage, caption: "Annual Rajasthan International Folk Festival (RIFF)" },
          { image: turbanImage, caption: "Traditional Rajput warrior attire" },
        ]}
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
            image: udaipurMirrorImage,
            caption: "Queen uses mirror to send signals across the lake.",
          },
          {
            image: udaipurSignalImage,
            caption: "Palace guard receives coded flash.",
          },
          {
            image: udaipurImage,
            caption: "Entire palace lights up.",
          },
        ]}
        history="Mewar queens used mirror signaling systems during sieges. Udaipur founded by Maharana Udai Singh in 1559. Known for architectural water management."
        culture="Miniature paintings. Traditional boat races. Shilpgram crafts village."
        culturalImages={[
          { image: blockPrintImage, caption: "Miniature painting traditions" },
          { image: bazaarImage, caption: "Shilpgram crafts and artisans" },
          { image: ghomarDanceImage, caption: "Traditional boat festivals on Lake Pichola" },
        ]}
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
            image: barmerKingImage,
            caption: "King bans poets from mocking him.",
          },
          {
            image: puppetImage,
            caption: "Puppeteers create a puppet that imitates the king.",
          },
          {
            image: barmerPuppetImage,
            caption: "Audience laughs as puppet says truths no human could.",
          },
        ]}
        history="Kathputli puppetry dates back 1,000 years. Used for teaching, satire, and political critique."
        culture="Barmer also known for ajrakh block printing & wooden carvings."
        culturalImages={[
          { image: blockPrintImage, caption: "Famous ajrakh block printing" },
          { image: puppetImage, caption: "Kathputli puppet making craft" },
          { image: bazaarImage, caption: "Traditional handicraft bazaars" },
        ]}
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
            image: jaisalmerNavigationImage,
            caption: "Caravan leader shows children how to read dune wind patterns.",
          },
          {
            image: jaisalmerMirageImage,
            caption: "They avoid a mirage.",
          },
          {
            image: jaisalmerImage,
            caption: "Golden fort rises through dust.",
          },
        ]}
        history="Important Silk Route link. Caravans traded with Persia, Arabia, and Central Asia. Fort built in 1156 AD."
        culture="Dastangoi (storytelling). Ghoomar & Kalbeliya dance. Desert cooking on embers."
        culturalImages={[
          { image: ghomarDanceImage, caption: "Kalbeliya snake charmer dances" },
          { image: thaliImage, caption: "Desert cuisine cooked on embers" },
          { image: bazaarImage, caption: "Camel fairs and desert markets" },
        ]}
      />

      <RegionalSection
        id="pushkar"
        title="Pushkar"
        subtitle="The Lotus of Creation"
        backgroundColor="#F4C2C2"
        audioLabel="Temple Bells"
        comicPanels={[
          {
            image: pushkarLotusImage,
            caption: "Brahma drops lotus → lake forms.",
          },
          {
            image: pushkarPilgrimsImage,
            caption: "Pilgrims gather.",
          },
          {
            image: pushkarPilgrimsImage,
            caption: "Brahma temple stands tall.",
          },
        ]}
        history="Only dedicated Brahma temple in India. Dates to 14th century (rebuilt multiple times)."
        culture="Annual camel fair. Sacred lake rituals. Rose cultivation."
        culturalImages={[
          { image: bazaarImage, caption: "Famous Pushkar Camel Fair" },
          { image: ghomarDanceImage, caption: "Sacred lake rituals and ceremonies" },
        ]}
      />

      <RegionalSection
        id="chittorgarh"
        title="Chittorgarh"
        subtitle="The Flame of Courage"
        backgroundColor="#D4846A"
        audioLabel="War Drums"
        comicPanels={[
          {
            image: chittorgarhSoldiersImage,
            caption: "Soldiers prepare for siege.",
          },
          {
            image: chittorgarhWomenImage,
            caption: "Women gather together, determined.",
          },
          {
            image: chittorgarhSoldiersImage,
            caption: "Flame rises — symbol of sacrifice.",
          },
        ]}
        history="Faced three major sieges: Alauddin Khilji, Bahadur Shah, Akbar. Symbol of Rajput honor & resistance."
        culture="Fairs celebrating local heroes. Phad storytelling tradition."
        culturalImages={[
          { image: ghomarDanceImage, caption: "Phad scroll painting storytelling" },
          { image: turbanImage, caption: "Rajput warrior heritage celebrations" },
        ]}
      />

      <RegionalSection
        id="ranakpur"
        title="Ranakpur"
        subtitle="The Marble Symphony"
        backgroundColor="#E8E8E8"
        audioLabel="Marble Notes"
        comicPanels={[
          {
            image: ranakpurTestingImage,
            caption: "Two artisans tap pillars.",
          },
          {
            image: ranakpurTestingImage,
            caption: "Pillar emits a clear note.",
          },
          {
            image: ranakpurPillarsImage,
            caption: "Forest of 1,444 pillars appears.",
          },
        ]}
        history="Built in 15th century by Dharna Shah. Famous for 1,444 unique pillars — none identical. Some pillars are acoustically tuned."
        culture="Jain tradition of precision, symmetry, and non-violence."
        culturalImages={[
          { image: blockPrintImage, caption: "Marble carving craftsmanship" },
          { image: bazaarImage, caption: "Local artisan workshops" },
        ]}
      />

      <RegionalSection
        id="rural-dhani"
        title="Rural Dhani"
        subtitle="Heart of the Desert"
        backgroundColor="#C9A876"
        audioLabel="Village Sounds"
        comicPanels={[
          {
            image: ruralCookingImage,
            caption: "Grandma teaches child to knead dough.",
          },
          {
            image: ruralFireImage,
            caption: "Chulha fire glows.",
          },
          {
            image: ruralNightImage,
            caption: "Desert night sky blankets the home.",
          },
        ]}
        history="Remote Rajasthan villages preserved age-old water conservation: Taanka (underground tank), Johad (small check dams). Architecture was climate-responsive."
        culture="Bajra rotis. Camel milk traditions. Handmade quilts (ralli)."
        culturalImages={[
          { image: thaliImage, caption: "Traditional bajra roti and dal" },
          { image: ruralCookingImage, caption: "Clay chulha cooking methods" },
          { image: bazaarImage, caption: "Handmade ralli quilts and crafts" },
          { image: turbanImage, caption: "Village gathering traditions" },
        ]}
      />

      <ClosingSection />
    </div>
  );
}
