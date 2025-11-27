// Dynamically set CSS variables for tile/card sizing based on device ratio and dimensions
function setResponsiveTileVars() {
  const root = document.documentElement;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const ratio = w / h;
  // Default mobile tile sizes
  let brandCardW = 170, brandCardMediaH = 90, cardW = 180, cardMediaH = 110, presenceCardH = 90, presenceImgH = 28;
  // If device is very tall (portrait phone, ratio < 0.6), make tiles even smaller
  if (w < 700 && ratio < 0.6) {
    brandCardW = 140; brandCardMediaH = 70; cardW = 150; cardMediaH = 85; presenceCardH = 70; presenceImgH = 20;
  }
  // If device is very wide (landscape phone/tablet, ratio > 1.5), allow slightly larger tiles
  if (w < 900 && ratio > 1.5) {
    brandCardW = 200; brandCardMediaH = 110; cardW = 210; cardMediaH = 130; presenceCardH = 110; presenceImgH = 36;
  }
  // Set CSS variables
  root.style.setProperty('--brand-card-w', brandCardW + 'px');
  root.style.setProperty('--brand-card-media-h', brandCardMediaH + 'px');
  root.style.setProperty('--card-w', cardW + 'px');
  root.style.setProperty('--card-media-h', cardMediaH + 'px');
  root.style.setProperty('--presence-card-h', presenceCardH + 'px');
  root.style.setProperty('--presence-img-h', presenceImgH + 'px');
}

window.addEventListener('resize', setResponsiveTileVars);
setResponsiveTileVars();

const catalog = [
  {
    id: "Putrika",
    title: "Putrika",
    subtitle: "Hand-beaten brass heirlooms and temple essentials",
    brandSummary:
      "Heritage brassware hammered in family ateliers across Kumbakonam and Moradabad.",
    brandDetail:
      "Putrika collaborates with fifth-generation sthapathis to revive zari-inspired repoussé, finishing every urli, kalash, and diya with smoke-fired patinas that age beautifully.",
    brandImage:
      "./assets/Putrika.png",
    items: [
      {
        title: "Lotus Pradip Diya Set",
        summary: "Nested diyas with petal rims and sandal patina finish.",
        detail:
          "Cast in lost-wax molds in Kumbakonam, each diya is hand polished, then smoked for the antique auburn hue ideal for altar glow.",
        origin: "Kumbakonam (Tamil Nadu)",
        care: "Wipe with lime and ash paste weekly.",
        price: "₹3,600",
        tag: "Heritage Brass",
        media:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Temple Bell Wind Chime",
        summary: "Five-tone ghanta cascade tuned to evening aarti notes.",
        detail:
          "Bell metal alloy tuned by ear delivers resonance at 432Hz. Neem-wood striker ensures mellow decay.",
        origin: "Kundapura (Karnataka)",
        care: "Oil the hemp cord every quarter.",
        price: "₹4,250",
        tag: "Devotional",
        media:
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Hammered Kansa Kalash",
        summary: "Wide-mouth kalash with repoussé mango leaves.",
        detail:
          "Each vessel is hammered 1,200 times to compact the alloy, balancing weight and shine for prasadam storage.",
        origin: "Moradabad (Uttar Pradesh)",
        care: "Rinse with tamarind pulp, dry soft.",
        price: "₹6,800",
        tag: "Puja Kalash",
        media:
          "https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Peacock Urli Trough",
        summary: "Low floral urli with peacock finials and meenakari infill.",
        detail:
          "Inlay artisans from Jaipur fill cloisonné grooves with jewel tones, making it perfect for marigold floats.",
        origin: "Jaipur (Rajasthan)",
        care: "Use neutral soap, avoid soaking overnight.",
        price: "₹8,200",
        tag: "Statement Brass",
        media:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Aarati Peacock Thali",
        summary: "Rimmed thali with detachable incense holders.",
        detail:
          "Spillbox collaborated with Thanjavur gilders to etch tiny kolam borders celebrating dawn prayers.",
        origin: "Thanjavur (Tamil Nadu)",
        care: "Buff with pitambari cloth only.",
        price: "₹5,950",
        tag: "Temple Ritual",
        media:
          "https://images.unsplash.com/photo-1487412663231-5808152d71d5?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "Pujalane",
    title: "Pujalane",
    subtitle: "Gods, idols, and ceremonial accompaniments",
    brandSummary:
      "Sacred idols, puja linens, and copperware curated for immersive daily practice.",
    brandDetail:
      "Pujalane works with Mysuru sandal carvers, Varanasi coppersmiths, and Madurai foil ateliers so every shrine feels intimate, intentional, and deeply rooted.",
    brandImage:
      "./assets/Pujalane.png",
    items: [
      {
        title: "Sandalwood Ganesha Idol",
        summary: "Hand-carved seated Ganesha with turmeric glaze.",
        detail:
          "Carvers in Mysuru follow the Panchaloha proportions, finishing with cold-pressed sandal oil for aroma.",
        origin: "Mysuru (Karnataka)",
        care: "Keep away from direct sun, dust softly.",
        price: "₹7,400",
        tag: "Sacred Idol",
        media:
          "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Copper Panchapatra Kit",
        summary: "Matte hammered panchapatra with spoon and udharani.",
        detail:
          "Triple annealed copper retains water purity, perfect for daily abhishekam rituals.",
        origin: "Varanasi (Uttar Pradesh)",
        care: "Rinse with shikakai powder after use.",
        price: "₹2,850",
        tag: "Temple Copper",
        media:
          "https://images.unsplash.com/photo-1455659817273-f96807779a8e?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Silver-Plated Shankh Stand",
        summary: "Lotus pedestal to cradle sacred conch shells.",
        detail:
          "Artisans in Ahmedabad electroplate sterling silver over brass, then hand-burnish the petal edges.",
        origin: "Ahmedabad (Gujarat)",
        care: "Polish with soft muslin, store wrapped.",
        price: "₹3,950",
        tag: "Shrine Accent",
        media:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Handloom Puja Asan Pair",
        summary: "Organic cotton seaters with rudraksha borders.",
        detail:
          "Kanchipuram weavers use temple motifs in extra weft to depict lamps and kalashas on each mat.",
        origin: "Kanchipuram (Tamil Nadu)",
        care: "Hand wash separately, dry shade.",
        price: "₹2,150",
        tag: "Altar Textile",
        media:
          "https://images.unsplash.com/photo-1509401934319-cb35b7940bae?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Kamadhenu Shrine Frame",
        summary: "Gold foil mounted deity print with teak frame.",
        detail:
          "The print is hand-pulled on cotton rag paper, then accented with 24kt leafing around the halo.",
        origin: "Madurai (Tamil Nadu)",
        care: "Wipe frame with dry cloth, keep silica gel inside.",
        price: "₹4,600",
        tag: "Devotional Art",
        media:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "Djuize",
    title: "Djuize",
    subtitle: "Home improvement, layering, and uplift accents",
    brandSummary:
      "Layered soft furnishings, lighting, and organizers built with natural dyes and honest timber.",
    brandDetail:
      "Djuize pairs Bagru block printers, Pondicherry potters, and Jodhpur carpenters to deliver modular upgrades that feel handcrafted yet contemporary.",
    brandImage:
      "./assets/Djuize.png",
    items: [
      {
        title: "Indigo Block Curtain Panel",
        summary: "Bagru block print on organic cotton voile.",
        detail:
          "Dyed in natural indigo vats, resisting sun fade and giving breezy privacy for verandahs.",
        origin: "Bagru (Rajasthan)",
        care: "Cold hand wash with mild soap.",
        price: "₹3,200",
        tag: "Soft Furnishing",
        media:
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Terracotta Planter Trio",
        summary: "Smoky fired planters with cane hangers.",
        detail:
          "Crafted in Pondicherry kilns, each planter has drainage ridges and volcanic sand mix for breathability.",
        origin: "Pondicherry",
        care: "Wipe exterior monthly, avoid frost.",
        price: "₹2,450",
        tag: "Green Corner",
        media:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Mango Wood Floating Shelf",
        summary: "Hidden-bracket shelves finished in warm walnut stain.",
        detail:
          "Carpenters in Jodhpur sand by hand and oil with linseed, giving smooth edges for entryways.",
        origin: "Jodhpur (Rajasthan)",
        care: "Dust weekly, oil yearly.",
        price: "₹5,100",
        tag: "Storage",
        media:
          "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Rattan Dome Pendant",
        summary: "Ceiling pendant with double weave cane shade.",
        detail:
          "Azhapuzha cane artisans weave over brass frame, diffusing light for dining zones.",
        origin: "Alappuzha (Kerala)",
        care: "Vacuum with brush tip, avoid dampness.",
        price: "₹6,450",
        tag: "Lighting",
        media:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Marble Inlay Console Top",
        summary: "Hand-set floral pietra dura slab.",
        detail:
          "Agra artisans inlay semiprecious stones into Makrana marble, adding instant foyer drama.",
        origin: "Agra (Uttar Pradesh)",
        care: "Clean with pH-neutral cleanser, avoid citrus.",
        price: "₹11,800",
        tag: "Surface Upgrade",
        media:
          "https://images.unsplash.com/photo-1465310477141-6fb93167a273?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "Jobo",
    title: "Jobo",
    subtitle: "Artisan leather staples with South Indian tanning",
    brandSummary:
      "Small-batch vegetable-tanned accessories built for work, travel, and ritual gifting.",
    brandDetail:
      "Jobo sources hides from ethical tanneries in Chromepet and Kolhapur, blending kalamkari linings and brass hardware for warmth and longevity.",
    brandImage:
      "./assets/Jobo.png",
    items: [
      {
        title: "Madras Tan Laptop Sleeve",
        summary: "Full-grain sleeve with kalamkari lined pocket.",
        detail:
          "Vegetable-tanned hide from Chromepet drums is hand-stitched and burnished for city commutes.",
        origin: "Chennai (Tamil Nadu)",
        care: "Condition with neem oil balm every 6 months.",
        price: "₹5,950",
        tag: "Work Carry",
        media:
          "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Kolhapuri Strap Sling",
        summary: "Two-tone sling bag with braided handle.",
        detail:
          "Kolhapuri artisans weave contrast straps inspired by traditional chappal knots.",
        origin: "Kolhapur (Maharashtra)",
        care: "Store with stuffing, avoid rain.",
        price: "₹4,800",
        tag: "Everyday Sling",
        media:
          "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Hand-Plaited Desk Tray",
        summary: "Catchall tray lined with organic suede.",
        detail:
          "Pune ateliers braid offcuts into a lattice, keeping your entry console tidy.",
        origin: "Pune (Maharashtra)",
        care: "Dust with dry cloth, avoid direct light.",
        price: "₹2,450",
        tag: "Desk Utility",
        media:
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Indigo Resist Passport Wallet",
        summary: "Dyed leather exterior with brass zipper.",
        detail:
          "Auroville dyers use natural indigo vats, sealing with beeswax to prevent crocking.",
        origin: "Auroville (Tamil Nadu)",
        care: "Buff gently, keep away from acetone.",
        price: "₹3,300",
        tag: "Travel",
        media:
          "https://images.unsplash.com/photo-1518544801958-efcbf8a7ec10?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Dual-Tone Desk Mat",
        summary: "Cocoa and espresso leather mat with stitched edge.",
        detail:
          "Crafted in Bengaluru, the mat has suede backing for grip and protects wooden desks.",
        origin: "Bengaluru (Karnataka)",
        care: "Spot clean with damp cloth, air dry.",
        price: "₹4,050",
        tag: "Workspace",
        media:
          "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "Moongil",
    title: "Moongil",
    subtitle: "Bamboo and wood interpretations for soulful corners",
    brandSummary:
      "Bamboo furniture, tableware, and lighting shaped with slow-seasoned timber and cane.",
    brandDetail:
      "Moongil empowers Shillong weavers, Kochi carpenters, and Majuli bamboo carvers to produce breathable furniture with natural oils and jute lashings.",
    brandImage:
      "./assets/Moongil.png",
    items: [
      {
        title: "Bamboo Charpai Bench",
        summary: "Foldable charpai with jute lacing.",
        detail:
          "Lucknow weavers stretch jute ropes over bamboo frames, creating breathable seating.",
        origin: "Lucknow (Uttar Pradesh)",
        care: "Retighten knots yearly, keep indoors.",
        price: "₹7,800",
        tag: "Seating",
        media:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Teak Spice Drawer Tower",
        summary: "12-drawer tower with brass knobs.",
        detail:
          "Cochin carpenters carve each drawer from reclaimed teak, perfect for spice or jewelry sorting.",
        origin: "Kochi (Kerala)",
        care: "Apply beeswax polish twice a year.",
        price: "₹9,450",
        tag: "Storage",
        media:
          "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Cane Glow Bedside Lamp",
        summary: "Handwoven cane shade with teak base.",
        detail:
          "Shillong artisans weave airy cane, providing patterned shadows for slow evenings.",
        origin: "Shillong (Meghalaya)",
        care: "Dust with feather brush, avoid splashes.",
        price: "₹4,600",
        tag: "Lighting",
        media:
          "https://images.unsplash.com/photo-1505693314120-5e5e2d8d9960?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Moongil Kitchen Serving Set",
        summary: "Set of ladles, spatula, and tongs carved from bamboo.",
        detail:
          "Assam artisans steam bend handles for ergonomic grip and finish with food-safe oils.",
        origin: "Majuli (Assam)",
        care: "Hand wash, oil monthly.",
        price: "₹1,980",
        tag: "Kitchenware",
        media:
          "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Rosewood Spice Mortar",
        summary: "Heavy rosewood mortar with pestle.",
        detail:
          "Madurai woodturners align grain vertically for strength, perfect for crushing masalas.",
        origin: "Madurai (Tamil Nadu)",
        care: "Oil lightly, keep dry.",
        price: "₹2,750",
        tag: "Prep Tool",
        media:
          "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "Paracraft",
    title: "Paracraft",
    subtitle: "Paracord and rope expressions for modern living",
    brandSummary:
      "Paracord, macramé, and sisal creations that bring tactility to balconies and living rooms.",
    brandDetail:
      "Paracraft trains coastal knotters and Delhi macramé artists to braid durable cotton cords with brass fittings for storage, greenery, and light diffusion.",
    brandImage:
      "./assets/Paracraft.png",
    items: [
      {
        title: "Seaside Rope Hammock",
        summary: "Hand-braided cotton rope hammock with teak spreader.",
        detail:
          "Goan knotters braid double-helix ropes that hug the body while staying breathable.",
        origin: "Anjuna (Goa)",
        care: "Store dry, wash with mild soap when needed.",
        price: "₹6,900",
        tag: "Outdoor",
        media:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Macramé Wall Cascade",
        summary: "Three-panel macramé with terracotta beads.",
        detail:
          "Delhi studio knots recycled cotton cords into flowing chevron patterns for blank walls.",
        origin: "New Delhi",
        care: "Shake out dust, avoid moisture.",
        price: "₹3,550",
        tag: "Wall Art",
        media:
          "https://images.unsplash.com/photo-1448932380041-703838829e82?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Paracord Utility Basket",
        summary: "Structured basket with leather handles.",
        detail:
          "Nagpur maker collective weaves paracord around cane molds for sturdy storage.",
        origin: "Nagpur (Maharashtra)",
        care: "Wipe clean, reshape when damp.",
        price: "₹2,950",
        tag: "Storage",
        media:
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Knot-Tied Plant Sling",
        summary: "Dual-tone plant hanger with brass ring.",
        detail:
          "Hyderabad artisans blend jute and paracord giving 15kg load capacity for indoor greens.",
        origin: "Hyderabad (Telangana)",
        care: "Air dry after watering plants.",
        price: "₹1,450",
        tag: "Green Corner",
        media:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Rope Lantern Pair",
        summary: "Glass hurricanes wrapped in sailor’s knots.",
        detail:
          "Mumbai dockworkers weave sisal rope around recycled glass for cozy terrace lighting.",
        origin: "Mumbai (Maharashtra)",
        care: "Wipe glass with damp cloth, keep rope dry.",
        price: "₹3,400",
        tag: "Evening Glow",
        media:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "Abica",
    title: "Abica",
    subtitle: "Abacus learning tools for tactile numeracy",
    brandSummary:
      "Tactile sorobans and bead ladders crafted for every learning milestone.",
    brandDetail:
      "Abica partners with Coimbatore engineers and Kochi Montessori mentors to design classroom-ready abacus tools with brass rods, maple beads, and travel clasps.",
    brandImage:
      "./assets/Abica.png",
    items: [
      {
        title: "Teak Scholar Abacus",
        summary: "Precision soroban with teak frame and brass divider.",
        detail:
          "Coimbatore workshops turn smooth neem beads, then hand-place them on brass rods for fluid glide.",
        origin: "Coimbatore (Tamil Nadu)",
        care: "Wipe with dry cloth, avoid heat.",
        price: "₹2,700",
        tag: "Soroban",
        media:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Travel Pocket Abacus",
        summary: "Folding beechwood abacus with clasp.",
        detail:
          "Surat engineers craft compact hinges so students can revise sums on the move.",
        origin: "Surat (Gujarat)",
        care: "Keep in pouch, avoid moisture.",
        price: "₹1,450",
        tag: "On-the-go",
        media:
          "https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Rainbow Classroom Set",
        summary: "Color-coded abacus trio for visual learners.",
        detail:
          "Bengaluru educators designed this set with age-based bead spacing and pastel cues.",
        origin: "Bengaluru (Karnataka)",
        care: "Dust weekly, store upright.",
        price: "₹3,600",
        tag: "Learning Lab",
        media:
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Metal-Rod Soroban",
        summary: "Weighted rods for competition practice.",
        detail:
          "Pune fabricators add micro bearings to reduce friction, ideal for speed arithmetic.",
        origin: "Pune (Maharashtra)",
        care: "Oil rods lightly once a year.",
        price: "₹3,050",
        tag: "Pro Tool",
        media:
          "https://images.unsplash.com/photo-1523419409543-0c1df022bddb?auto=format&fit=crop&w=900&q=80",
      },
      {
        title: "Montessori Bead Ladder",
        summary: "Mini ladder for toddlers learning quantity.",
        detail:
          "Kochi studios sand maple beads silky smooth, pairing them with etched number blocks.",
        origin: "Kochi (Kerala)",
        care: "Clean with damp cloth, air dry.",
        price: "₹2,150",
        tag: "Early Years",
        media:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

let catalogSection;
let catalogGrid;
let catalogHeading;
let catalogBlurb;
let template;
let dialog;
let dialogContent;
let closeBtn;
let scrollButtons;
let brandGrid;
let brandTemplate;
let brandButtons;
let brandMap;
let activeBrandId = catalog[0]?.id || null;

function createCard(product) {
  if (!template) return document.createDocumentFragment();
  const node = template.content.cloneNode(true);
  const article = node.querySelector(".card");
  const focusBtn = node.querySelector(".card__focus");
  const img = node.querySelector(".card__media");
  const title = node.querySelector(".card__title");

  img.src = product.media;
  img.alt = product.title;
  title.textContent = product.title;
  focusBtn.setAttribute("aria-label", `View detail for ${product.title}`);

  const payload = { ...product };
  article.dataset.product = JSON.stringify(payload);
  return node;
}

function createBrandCard(category) {
  if (!brandTemplate) return document.createDocumentFragment();
  const node = brandTemplate.content.cloneNode(true);
  const card = node.querySelector(".brand-card");
  const img = node.querySelector("img");
  const title = node.querySelector(".brand-card__title");

  img.src = category.brandImage;
  img.alt = `${category.title} brand showcase`;
  title.textContent = category.title;
  card.dataset.brand = category.id;
  return node;
}

function openDialog(product) {
  dialogContent.innerHTML = `
    <p class="card__tag">${product.tag || product.category}</p>
    <h2>${product.title}</h2>
    <p>${product.detail}</p>
    <dl class="dialog__meta">
      <div>
        <dt>Origin</dt>
        <dd>${product.origin}</dd>
      </div>
      <div>
        <dt>Care Ritual</dt>
        <dd>${product.care}</dd>
      </div>
      <div>
        <dt>Category</dt>
        <dd>${product.category}</dd>
      </div>
    </dl>
    <p class="card__price">${product.price}</p>
  `;
  // Ensure brand-specific layout is not applied for product dialogs
  dialog.classList.remove('dialog--brand');
  // show modal and make it visible with the same animated class
  dialog.showModal();
  requestAnimationFrame(() => {
    dialog.classList.add('dialog--visible');
  });
}

function openBrandDialog(brand) {
  // create a small spotlight overlay showing the brand logo, then open the dialog with a smooth
  // transition where the logo scales/moves into the dialog image position
  const overlayObj = showBrandOverlay(brand);
  // populate dialog content
  dialogContent.innerHTML = `
    <p class="card__tag">${brand.subtitle}</p>
    <h2>${brand.title}</h2>
    <p>${brand.detail}</p>
    <dl class="dialog__meta">
      <div>
        <dt>Signature Style</dt>
        <dd>${brand.summary}</dd>
      </div>
    </dl>
    <div class="dialog__brand-media">
      <img src="${brand.image}" alt="${brand.title} atelier showcase" />
    </div>
  `;
  // mark this as a brand dialog (so CSS centers the logo) and show the dialog but keep it hidden visually so we can compute target bounds
  dialog.classList.add('dialog--brand');
  dialog.showModal();
  dialog.style.visibility = 'hidden';
  dialog.classList.remove('dialog--visible');

  // wait for next frame to ensure dialog layout is calculated, and ensure target image is loaded
  requestAnimationFrame(() => {
  // overlayObj returns { overlay, logo }
  const overlayLogo = overlayObj && overlayObj.logo;
    const targetImg = dialog.querySelector('.dialog__brand-media img');
    if (!overlayLogo || !targetImg) {
      // fallback: just show dialog after small delay
      dialog.style.visibility = '';
      dialog.classList.add('dialog--visible');
      removeBrandOverlay();
      return;
    }

    // proceed with bounding-box based animation once the target image is rendered
    const proceed = () => {
      const startRect = overlayLogo.getBoundingClientRect();
      const targetRect = targetImg.getBoundingClientRect();

      // compute translation and scale to move overlay logo into the dialog image position
      const startCx = startRect.left + startRect.width / 2;
      const startCy = startRect.top + startRect.height / 2;
      const targetCx = targetRect.left + targetRect.width / 2;
      const targetCy = targetRect.top + targetRect.height / 2;
      const translateX = targetCx - startCx;
      const translateY = targetCy - startCy;
      const scale = (targetRect.width / startRect.width) || 1;

        // set transform origin and animate (faster timing for responsive feel)
        overlayLogo.style.transition = 'transform 240ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      overlayLogo.style.transformOrigin = 'center center';
      // trigger the transform (preserve the initial -50% centering by adding the px translation)
      requestAnimationFrame(() => {
        overlayLogo.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scale})`;
      });

      // when animation ends, reveal the dialog and remove overlay
      const onEnd = (e) => {
        overlayLogo.removeEventListener('transitionend', onEnd);
        // show dialog fully
        dialog.style.visibility = '';
        dialog.classList.add('dialog--visible');
        // remove overlay and logo after a short delay so the dialog is visible behind
        setTimeout(() => removeBrandOverlay(), 140);
      };
      overlayLogo.addEventListener('transitionend', onEnd);
    };

    // If image already loaded, proceed immediately; otherwise wait for load or timeout
    if (targetImg.complete && targetImg.naturalWidth > 0) {
      proceed();
    } else {
      let fired = false;
      const onLoad = () => {
        if (fired) return;
        fired = true;
        targetImg.removeEventListener('load', onLoad);
        proceed();
      };
      targetImg.addEventListener('load', onLoad);
      // fallback in case load event doesn't fire quickly
      setTimeout(() => {
        if (!fired) {
          fired = true;
          targetImg.removeEventListener('load', onLoad);
          proceed();
        }
      }, 500);
    }
  });
}

function showBrandOverlay(brand) {
  removeBrandOverlay();
  // backdrop element (with blur) sits behind the logo
  const overlay = document.createElement('div');
  overlay.className = 'brand-overlay';
  overlay.setAttribute('data-generated', 'true');
  document.body.appendChild(overlay);

  // the logo is a separate fixed element so it isn't affected by the overlay's backdrop-filter
  const img = document.createElement('img');
  img.className = 'brand-overlay__logo';
  img.setAttribute('data-generated', 'true');
  img.src = brand.image;
  img.alt = `${brand.title} logo`;
  document.body.appendChild(img);

  // force reflow then show both
  requestAnimationFrame(() => {
    overlay.classList.add('brand-overlay--visible');
    img.classList.add('is-visible');
  });

  // return both so caller can find the logo element
  return { overlay, logo: img };
}

function removeBrandOverlay() {
  const overlay = document.querySelector('body > .brand-overlay[data-generated="true"]');
  const logo = document.querySelector('body > .brand-overlay__logo[data-generated="true"]');
  if (overlay) overlay.classList.remove('brand-overlay--visible');
  if (logo) logo.classList.remove('is-visible');
  // wait for transition then remove both
  setTimeout(() => {
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    if (logo && logo.parentNode) logo.parentNode.removeChild(logo);
  }, 520);
}

function renderCatalog() {
  if (!catalogGrid) return;
  let activeBrand = catalog.find((category) => category.id === activeBrandId);
  if (!activeBrand) {
    activeBrandId = catalog[0]?.id || null;
    activeBrand = catalog[0];
  }
  if (!activeBrand) return;

  if (catalogHeading) {
    catalogHeading.textContent = `${activeBrand.title} Collection`;
  }
  if (catalogBlurb) {
    catalogBlurb.textContent = activeBrand.subtitle;
  }
  const frag = document.createDocumentFragment();
  // Render only the first 3 items for each brand
  const itemsToShow = Array.isArray(activeBrand.items)
    ? activeBrand.items.slice(0, 3)
    : [];
  itemsToShow.forEach((product) => {
    frag.appendChild(
      createCard({
        ...product,
        category: activeBrand.title,
      })
    );
  });
  catalogGrid.innerHTML = "";
  catalogGrid.appendChild(frag);
}

function renderBrands() {
  if (!brandGrid) return;
  brandMap = {};
  const frag = document.createDocumentFragment();
  catalog.forEach((category) => {
    brandMap[category.id] = {
      title: category.title,
      subtitle: category.subtitle,
      summary: category.brandSummary,
      detail: category.brandDetail,
      image: category.brandImage,
    };
    frag.appendChild(createBrandCard(category));
  });
  brandGrid.innerHTML = "";
  brandGrid.appendChild(frag);
  highlightActiveBrand();
  // After brands are rendered, adjust the final (partial) row so its items appear centered
  adjustBrandGridLastRow();
}

function adjustBrandGridLastRow() {
  if (!brandGrid) return;
  const cards = Array.from(brandGrid.querySelectorAll('.brand-card'));
  if (!cards.length) return;

  // Reset any previous explicit placement/margins
  cards.forEach((c) => {
    c.style.removeProperty('grid-column-start');
    c.style.removeProperty('margin-left');
  });

  // Determine number of columns based on the computed grid -- use the column width (220px)
  const containerWidth = brandGrid.clientWidth;
  const colWidth = 220; // matches CSS grid-template-columns value
  const gapPx = parseFloat(getComputedStyle(brandGrid).getPropertyValue('gap')) || 16;
  const columns = Math.max(1, Math.floor((containerWidth + gapPx) / (colWidth + gapPx)));

  const total = cards.length;
  const lastCount = total % columns || (total >= columns ? columns : total);
  if (lastCount === 0 || lastCount === columns) {
    // full last row or exact fit — nothing to center specially
    return;
  }

  // Compute start column so the last row is centered
  const startColumn = Math.floor((columns - lastCount) / 2) + 1;
  const firstIndexOfLastRow = total - lastCount;
  const firstCard = cards[firstIndexOfLastRow];
  if (firstCard) {
    firstCard.style.gridColumnStart = startColumn;
    // Nudge the last-row group slightly to the right for visual balance
    const nudgePx = 12; // adjust this value to increase/decrease the right shift
    firstCard.style.marginLeft = `${nudgePx}px`;
  }
}

function highlightActiveBrand() {
  if (brandGrid) {
    const cards = brandGrid.querySelectorAll(".brand-card");
    cards.forEach((card) => {
      const isActive = card.dataset.brand === activeBrandId;
      card.classList.toggle("brand-card--active", isActive);
    });
  }
  if (brandButtons) {
    brandButtons.forEach((button) => {
      const isActive = button.dataset.brand === activeBrandId;
      button.classList.toggle("brand-switcher__button--active", isActive);
    });
  }
}

function clearActiveBrand() {
  activeBrandId = null;
  // Remove active classes/styles from any brand cards and buttons immediately
  if (brandGrid) {
    const cards = brandGrid.querySelectorAll('.brand-card');
    cards.forEach((c) => {
      c.classList.remove('brand-card--active');
      c.style.removeProperty('grid-column-start');
      c.style.removeProperty('margin-left');
    });
  }
  if (brandButtons) {
    brandButtons.forEach((b) => b.classList.remove('brand-switcher__button--active'));
  }
  // Re-render catalog to reflect no active brand
  renderCatalog();
  // Ensure any computed centering is recalculated
  adjustBrandGridLastRow();
  // remove any brand-specific dialog layout if present
  if (dialog) dialog.classList.remove('dialog--brand');
}

function setActiveBrand(brandId, openModal = false) {
  if (!brandMap?.[brandId]) return;
  activeBrandId = brandId;
  renderCatalog();
  highlightActiveBrand();
  if (openModal) {
    openBrandDialog(brandMap[brandId]);
  }
}

function initCatalog() {
  catalogSection = document.querySelector(".catalog");
  catalogGrid = document.querySelector(".catalog__grid");
  catalogHeading = document.querySelector(".catalog__heading");
  catalogBlurb = document.querySelector(".catalog__blurb");
  template = document.querySelector("#card-template");
  dialog = document.querySelector(".product-dialog");
  dialogContent = dialog?.querySelector(".dialog__content") || null;
  closeBtn = dialog?.querySelector(".dialog__close") || null;
  scrollButtons = document.querySelectorAll("[data-scroll]");
  brandGrid = document.querySelector(".brands__grid");
  brandTemplate = document.querySelector("#brand-card-template");
  brandButtons = document.querySelectorAll(".brand-switcher__button");

  if (!catalogGrid || !template) {
    console.warn("Catalog shell is missing required markup.");
    return;
  }

  renderCatalog();
  renderBrands();

  catalogSection.addEventListener("click", (event) => {
    const button = event.target.closest(".card__focus");
    if (!button) return;
    const article = button.closest(".card");
    try {
      const product = JSON.parse(article.dataset.product || "{}");
      if (product.title) {
        openDialog(product);
      }
    } catch (err) {
      console.error("Unable to parse product payload", err);
    }
  });

  closeBtn?.addEventListener("click", () => dialog?.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog?.close();
  });
  // When the dialog closes, clear the active brand so the scaled tile returns to normal
  dialog?.addEventListener('close', () => {
    clearActiveBrand();
    // also remove any dialog-visible class and overlay
    dialog.classList.remove('dialog--visible');
    // remove brand-specific layout class when closing
    dialog.classList.remove('dialog--brand');
    removeBrandOverlay();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dialog?.open) dialog?.close();
  });

  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetSelector = btn.dataset.scroll;
      const target = document.querySelector(targetSelector);
      const block = btn.dataset.scrollAlign || "start";
      target?.scrollIntoView({ behavior: "smooth", block, inline: "nearest" });
      if (btn.dataset.highlightOnClick === "true") {
        // remove active class from all scroll buttons, then add to the clicked one
        scrollButtons.forEach((b) => b.classList.remove("btn--active"));
        btn.classList.add("btn--active");
      }
    });
  });

  brandGrid?.addEventListener("click", (event) => {
    const card = event.target.closest(".brand-card");
    if (!card) return;
    setActiveBrand(card.dataset.brand, true);
  });

  // Clicking anywhere outside a brand tile or the brand switcher should clear the active brand
  document.addEventListener('click', (event) => {
    // If click was inside a brand card, do nothing
    if (event.target.closest('.brand-card')) return;
    // If click was on a brand switcher button, do nothing (it will set active)
    if (event.target.closest('.brand-switcher__button')) return;
    // Otherwise clear the active brand so any scaled tile returns to normal
    clearActiveBrand();
  });

  // Recompute centering of last row when window resizes
  window.addEventListener('resize', () => {
    // debounce simple
    clearTimeout(window.__brandGridResizeTimer);
    window.__brandGridResizeTimer = setTimeout(() => adjustBrandGridLastRow(), 120);
  });

  brandGrid?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      const card = event.target.closest(".brand-card");
      if (!card) return;
      event.preventDefault();
      setActiveBrand(card.dataset.brand, true);
    }
  });

  brandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveBrand(button.dataset.brand);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCatalog, { once: true });
} else {
  initCatalog();
}
