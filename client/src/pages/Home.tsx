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
            caption: "In the bustling courtyard of a Shekhawati haveli, 1880s. A wealthy merchant sits cross-legged, listening intently to a British traveler. 'He spoke of horseless carriages, machines that fly like birds, and boxes that capture voices...' The merchant's eyes widen with wonder. He had never ventured beyond Rajasthan, yet these tales painted worlds he could barely imagine.",
            narrativeTitle: "The Merchant's Wonder"
          },
          {
            image: frescoCarImage,
            caption: "The local fresco artist receives his commission: 'Paint what the sahib described.' With no photograph, no blueprint, only words and imagination, he begins. A Ford motorcar emerges on the wall... but driven by Lord Krishna, decorated with peacock feathers. The wheels? Ornate like temple chakras. 'What I cannot see, I must dream.'",
            narrativeTitle: "Imagination Meets Reality"
          },
          {
            image: frescoAngelImage,
            caption: "On another wall: a British soldier rendered with magnificent angel wings, floating above the fort. The artist grins mischievously. 'If they can conquer our land, in my art, I make them guardians of heaven.' Satire masked as devotion. The walls became silent protests, fantasy kingdoms where locals controlled the narrative.",
            narrativeTitle: "Art as Rebellion"
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
            caption: "Dusk settles over Bundi's Raniji ki Baori, 1650. Women gather at the ornate stepwell's edge, not to draw water, but to listen. An elder teaches: 'Close your eyes, child. In the desert, your ears must see what your eyes cannot.' Here, water quality was measured by acoustics—an ancient science passed through generations.",
            narrativeTitle: "The Science of Sound"
          },
          {
            image: bundiEchoImage,
            caption: "A young girl drops a brass bowl into the depths. It tumbles down 100 feet of carved steps. The echo rises—clear, resonant, musical. 'Deep and pure, like temple bells. This water is blessed by monsoon rains.' A different echo might warn of stagnant water or mineral deposits. Each stepwell had its own acoustic signature.",
            narrativeTitle: "Reading the Echo"
          },
          {
            image: bundiStepsImage,
            caption: "As torches are lit for the evening ritual, the stepwell transforms. Nine stories of symmetrical steps descend into darkness, each level carved with deities and celestial dancers. 'We descended not just for water, but into geometry itself—a meditation in stone.' The architecture was both functional and spiritual, a stairway between earth and underworld.",
            narrativeTitle: "Infinite Descent"
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
            caption: "Jodhpur, 18th century. A Manganiyar musician sits cross-legged before a Rajput noble's newborn son. He tunes his kamaycha and begins: 'Listen well, for I shall sing your lineage back 30 generations.' His voice weaves through centuries—each ancestor's name, their deeds, their marriages. The Rajputs had no written records; these singers were living libraries, their songs the only proof of royal blood.",
            narrativeTitle: "Songs as Memory"
          },
          {
            image: jodhpurImage,
            caption: "The noble listens, tears in his eyes. 'My grandfather's grandfather's voice lives in your song.' Manganiyar families served specific Rajput clans for centuries, memorizing thousands of genealogical verses. They were historians, poets, and proof of legitimacy. A disputed heir might call a Manganiyar to court to sing their ancestry. Truth resided not in paper, but in melody.",
            narrativeTitle: "Living Archives"
          },
          {
            image: jodhpurCityImage,
            caption: "Behind them, the blue city cascades down the hill. Houses painted in indigo—originally by Brahmins to signify caste, later adopted citywide to reflect heat and repel insects. Each blue wall holds stories. Each narrow lane echoes with ravanhatta strings. Jodhpur became a city where memory lived in music and walls breathed color.",
            narrativeTitle: "City of Blue Memory"
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
            caption: "1459 AD. Rao Jodha surveys the rocky hilltop, envisioning his impregnable fortress. But a hermit named Cheeria Nathji meditates in a cave on this very spot. 'Leave this sacred ground!' he warns. When ignored, the hermit's eyes blaze with fury: 'Your fort will stand eternal, but this land shall forever thirst for water.' A curse echoes across the cliffs.",
            narrativeTitle: "The Hermit's Curse"
          },
          {
            image: fortSacrificeImage,
            caption: "The curse begins to manifest—wells run dry, construction workers collapse from thirst. Desperation grips Rao Jodha. A man named Rajaram Meghwal steps forward: 'Bury me alive in the foundation. Let my sacrifice appease the gods and lift this curse.' The king hesitates, but Rajaram insists. 'My family will be honored forever.' A selfless act to save a kingdom.",
            narrativeTitle: "The Ultimate Sacrifice"
          },
          {
            image: fortImage,
            caption: "The foundation stone descends over Rajaram's living burial. His family is granted land and eternal royal protection. The fort rises—400 feet of sandstone might, with walls 69 feet thick. Never conquered by siege or assault. The sacrifice worked. Even today, his descendants live in Raj Bagh, a garden within the fort, guardians of memory.",
            narrativeTitle: "Fort of Eternal Watch"
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
            caption: "Lake Pichola, during a Mughal siege, 1600s. The Mewar queen stands at her palace window, holding a polished bronze mirror. She angles it toward the sun—one flash, two flashes, pause, three rapid flashes. Across the water, two miles away, another palace catches the signal. No messenger could cross the siege lines. But light travels unimpeded. A code older than morse, simpler than semaphore.",
            narrativeTitle: "Light as Language"
          },
          {
            image: udaipurSignalImage,
            caption: "The guard at Jag Mandir receives the flash. He decodes: 'Northeast gate vulnerable at dawn. Prepare ambush.' He signals confirmation—a different rhythm. The mirrors continue their conversation as soldiers prepare below. During the siege, these light signals coordinated attacks, warned of breaches, and maintained royal communication. The Mughals never learned to read the flashes.",
            narrativeTitle: "Secret in Sunlight"
          },
          {
            image: udaipurImage,
            caption: "When victory came, the City Palace illuminated—thousands of oil lamps reflected in the lake, doubling the light. Mirror work inside the palace halls amplified every flame into infinity. Udaipur's architecture was designed around light: reflection, refraction, multiplication. Even in siege, light remained their unbreakable weapon.",
            narrativeTitle: "Palace of Infinite Light"
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
            caption: "Barmer, 16th century. The local raja, humiliated by satirical poets at his court, slams his fist: 'Anyone who mocks me shall lose their tongue!' Fear spreads. The poets go silent. The musicians play only praise songs. The marketplace, once vibrant with wit and debate, becomes suffocatingly polite. But the people's need for truth doesn't disappear—it merely finds a new voice.",
            narrativeTitle: "Silencing the Voice"
          },
          {
            image: puppetImage,
            caption: "In secret, the Bhatt puppeteer carves a wooden marionette with exaggerated features—a rotund belly, jeweled turban, oversized mustache. He dresses it in royal silk. 'This is not the king,' he announces with a wink to his family. 'This is merely... a character.' The puppet cannot be arrested. The puppet cannot lose its tongue. Art finds its loophole.",
            narrativeTitle: "Wood Speaks Truth"
          },
          {
            image: barmerPuppetImage,
            caption: "Under the desert moon, a crowd gathers for the puppet show. The 'king' puppet proclaims absurd decrees: 'I declare clouds illegal! Tax the sand!' The audience roars with laughter. Children point. Adults nod knowingly. The real king, hearing of this, sends guards—but what can they do? Arrest a puppet? Kathputli became Rajasthan's uncensored press, truth wrapped in entertainment.",
            narrativeTitle: "Laughter as Resistance"
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
            caption: "The Thar Desert, 12th century. A caravan leader crouches beside two young boys at dawn. 'See how the wind shapes the dune? When ripples flow northeast, we travel west.' He teaches them to read sand: sharp crests mean harsh wind, smooth slopes mean calm. Each dune is a compass, each grain of sand a story. The Silk Route depended not on roads, but on those who could read the desert's breath.",
            narrativeTitle: "Reading the Dunes"
          },
          {
            image: jaisalmerMirageImage,
            caption: "By midday, shimmering water appears on the horizon. The younger boy runs forward, desperate for drink. The leader grabs his shoulder: 'Stop! That water lies. See how it moves with your eyes, not your feet?' He teaches the mirage test—throw sand ahead; if the 'water' remains, it's illusion. Caravans that chased mirages died. Those who learned to see truth survived. Desert wisdom was survival science.",
            narrativeTitle: "Illusions and Truth"
          },
          {
            image: jaisalmerImage,
            caption: "Through heat and dust, the golden fort of Jaisalmer materializes—not a mirage, but real stone glowing like honey in sunset. Built from yellow sandstone that camouflages into desert, visible only at certain angles. A fortress designed to be both sentinel and secret. Inside, merchants from Persia, Arabia, and Central Asia trade silk, spices, and knowledge. The desert's harshness created the sharpest traders.",
            narrativeTitle: "Fortress of Gold"
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
            caption: "In the beginning, Lord Brahma—creator of the universe—searched for the perfect place to perform a yajna. He held a lotus flower, let it fall from the sky. Where each petal touched earth, water sprang forth. Pushkar Lake materialized in the Aravalli hills, a miracle in the desert. The lotus became sacred. The water, eternal. Mythology and geography merged into pilgrimage.",
            narrativeTitle: "The Lotus Falls"
          },
          {
            image: pushkarPilgrimsImage,
            caption: "Kartik Purnima, the full moon night. Hundreds of thousands of pilgrims descend upon Pushkar's 52 ghats. They believe bathing here on this night absolves all sins. The lake glows with floating diyas—tiny oil lamps on leaf boats. Brahmins chant. Bells ring. The air thickens with incense and devotion. For centuries, this desert lake has been Hinduism's most sacred bathing site after the Ganges.",
            narrativeTitle: "Night of Redemption"
          },
          {
            image: pushkarPilgrimsImage,
            caption: "The Brahma Temple rises white and red, crowned with a swan—Brahma's vehicle. Why only here? Legend says Brahma's wife Savitri cursed him: 'You shall be worshipped nowhere but Pushkar.' So this single temple became the universe's creator's only earthly throne. Pilgrims circle it, touch its walls, pray to the architect of existence. Meanwhile, camels trade in the fair outside—sacred and commerce intertwined.",
            narrativeTitle: "The Only Temple"
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
            caption: "Chittorgarh Fort, 1303. Alauddin Khilji's army surrounds the massive fort—20,000 troops against 8,000 defenders. Inside, Rajput soldiers don saffron robes, the color of sacrifice. 'Today we perform Saka,' declares their commander. Saka—the ritual of fighting to death when victory is impossible. They sharpen swords, embrace families one last time. Honor demands they never surrender.",
            narrativeTitle: "The Siege Begins"
          },
          {
            image: chittorgarhWomenImage,
            caption: "While men prepare for Saka, women gather in the underground chambers. Queen Padmini addresses them: 'We shall not be prizes for the enemy.' They perform Jauhar—mass self-immolation to protect honor. 13,000 women and children descend into the pyre chamber. Flames rise as drums beat. Outside, seeing the smoke, the Rajput men charge into their final battle. Death chosen, not imposed.",
            narrativeTitle: "Jauhar's Fire"
          },
          {
            image: chittorgarhSoldiersImage,
            caption: "The fort falls. Khilji enters to find only ashes and empty halls. No prisoners. No spoils. Only sacrifice. Chittorgarh would face this twice more—in 1535 and 1567. Each time: Jauhar, then Saka. The fort became a symbol: Rajputs valued honor above life. Today, the Jauhar Kund (sacrifice pit) remains—a monument to defiant choice in the face of defeat.",
            narrativeTitle: "Monument to Honor"
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
            caption: "15th century, Ranakpur. Two master sculptors work in the marble quarry. One taps a half-carved pillar with a metal rod. It rings—a pure, bell-like note. 'This one,' he declares. His companion taps another; it thuds dully. 'Flawed marble, internal fractures.' They're selecting stone not by sight, but by sound. The Jain temple they're building demands perfection in every pillar—1,444 of them.",
            narrativeTitle: "Testing the Stone"
          },
          {
            image: ranakpurTestingImage,
            caption: "Each pillar must sing. The architect Depaka's vision: a forest of carved stone where every column resonates at a unique frequency. Tap one pillar, and its neighbors hum in sympathetic vibration. The entire temple would be a musical instrument. Artisans spent decades hand-carving each pillar differently—no two alike. Mathematics, sculpture, and acoustics merged into prayer.",
            narrativeTitle: "Pillars That Sing"
          },
          {
            image: ranakpurPillarsImage,
            caption: "Inside the completed temple, 1,444 pillars rise like a white marble forest. Each intricately carved with dancers, deities, and geometric patterns. Light filters through, creating ever-shifting shadow plays. Stand in the center, clap your hands—the echo takes 7 seconds to fade, bouncing between pillars. The Jains built this as a meditation on infinity: infinite detail, infinite reflection, infinite patience.",
            narrativeTitle: "The Infinite Forest"
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
            caption: "In a remote dhani (hamlet), 50 km from any town, a grandmother teaches her granddaughter the art of bajra roti. 'Feel the dough—too wet and it tears, too dry and it cracks.' Her hands, weathered by decades of desert sun, shape the millet flour expertly. No measuring cups, no recipes written down. Knowledge passed through touch, repetition, survival. In these villages, women are unacknowledged engineers of nutrition.",
            narrativeTitle: "Hands That Know"
          },
          {
            image: ruralFireImage,
            caption: "The clay chulha (stove) glows orange as cow dung cakes burn—sustainable fuel in a treeless land. The roti puffs on the flame, charring perfectly. 'We waste nothing,' Grandmother explains. Dung becomes fuel. Ash becomes fertilizer. Every drop of water stored in underground taankas is treasured. Desert life demands a circular economy; waste is a luxury these villages can't afford.",
            narrativeTitle: "Circle of Survival"
          },
          {
            image: ruralNightImage,
            caption: "Night falls. The dhani—just four mud homes clustered together—seems impossibly small under the vast Milky Way. No electricity, no internet, yet here families have lived for 400 years. Children learn constellations for navigation. Elders tell stories that preserve history. The desert night sky, unpolluted, reveals the universe. In the remotest corners of Rajasthan, ancient wisdom persists, unhurried by modernity.",
            narrativeTitle: "Under Infinite Stars"
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
