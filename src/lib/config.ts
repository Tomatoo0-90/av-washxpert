// ============================================================================
// AV's WashXpert — Site Configuration
// ----------------------------------------------------------------------------
// सारा टेक्स्ट और फोटो यहीं से आता है। बदलाव सिर्फ इसी फाइल में करें।
// All text and images come from this file. Edit here only — no component code.
//
// LANGUAGE RULE
//   English  → navigation, headings, service names, buttons, field labels.
//              Short words every customer already recognises.
//   Hindi    → the explaining sentences under each heading, the address,
//              opening hours and customer reviews — where understanding
//              actually matters.
// ============================================================================

export const business = {
  name: "AV's WashXpert",
  // पता हिंदी में (page पर यही दिखेगा)
  addressLine1: "खरोरा रोड, होंडा शोरूम के सामने,",
  addressLine2: "पंजाब नेशनल बैंक के बगल में, सिमगा, तिल्दा,",
  addressLine3: "छत्तीसगढ़ 493114",
  // English address — used for the map link and search engines
  fullAddress:
    "Khaarora Road, in front of Honda Showroom, beside Punjab National Bank, Simga, Tilda, Chhattisgarh 493114",
  landmarks: ["होंडा शोरूम के सामने", "पंजाब नेशनल बैंक के बगल में"],
  // TODO: असली लोकेशन का Google Maps embed यहाँ डालें।
  // Google Maps → Share → Embed a map → copy the src URL.
  mapEmbedSrc:
    "https://www.google.com/maps?q=Simga,Tilda,Chhattisgarh+493114&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Simga+Tilda+Chhattisgarh+493114",
  hours: [
    { day: "सोमवार – शनिवार", time: "सुबह 8:00 – रात 8:00" },
    { day: "रविवार", time: "सुबह 9:00 – शाम 6:00" },
  ],
};

export const contact = {
  // WhatsApp number — international format, digits only, no "+" or spaces.
  whatsappNumber: "917067766274",
  whatsappMessage: "नमस्ते, मुझे कार वॉश बुक करना है",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      this.whatsappMessage
    )}`;
  },
  instagramUrl: "https://instagram.com/avs_washxpert_",
  // TODO: असली Facebook पेज का लिंक डालें (खाली है तो आइकन नहीं दिखेगा)।
  facebookUrl: "",
};

// ----------------------------------------------------------------------------
// MEDIA — सब placeholder हैं। असली फोटो/वीडियो से बदलें।
//
// Every photo below was viewed before being used. They show the WORK — foam,
// pressure washing, polishing, vacuuming — rather than a foreign luxury car,
// and none of them contain readable foreign-language signage.
//
// Replace with real AV's WashXpert photos: drop files into /public/images
// and change the URL below to "/images/your-file.jpg".
// ----------------------------------------------------------------------------

const px = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const media = {
  // असली फोम/पानी/चमक वाला लूप वीडियो यहाँ डालें:
  // /public/videos/hero-wash-loop.mp4
  heroVideoSrc: "/videos/hero-wash-loop.mp4",
  // Dark car sheeted in soap — matches the deep blue/cyan theme.
  heroPosterImage: px(29504457, 1600),
};

export const services = [
  {
    icon: "Droplets",
    title: "Exterior Wash",
    description: "बाहर की पूरी धुलाई, बिना किसी स्क्रैच के।",
    image: px(4892130), // washing a car with a hose on the street
  },
  {
    icon: "Sparkles",
    title: "Foam Wash",
    description: "मोटा झाग जो मिट्टी को आसानी से हटाता है।",
    image: px(28995189), // car body under thick foam
  },
  {
    icon: "Armchair",
    title: "Interior Detailing",
    description: "सीट, कारपेट और डैशबोर्ड — अंदर से एकदम नया।",
    image: px(5233285), // deep-cleaning a fabric car seat
  },
  {
    icon: "CircleDot",
    title: "Polishing",
    description: "हल्के स्क्रैच हटाकर पुरानी चमक वापस।",
    image: px(6870296), // polishing machine on car paint
  },
  {
    icon: "Shield",
    title: "Ceramic Coating",
    description: "सालों तक चलने वाली चमक और पानी से बचाव।",
    image: px(6872572), // microfiber cloth on glossy paint
  },
  {
    icon: "Wind",
    title: "Underbody Wash",
    description: "नीचे जमी मिट्टी हटाकर जंग से बचाव।",
    image: px(6873122), // pressure washing a car in a workshop
  },
] as const;

export const gallery = {
  // IMPORTANT — these pairs are stock stand-ins showing DIFFERENT vehicles.
  // Replace each pair with two photos of the SAME car: one before your wash,
  // one after. That is what actually convinces a customer to book.
  beforeAfter: [
    {
      label: "Full Body Wash",
      // Both shots are a grey Hyundai Creta — a car people here actually
      // drive — so the pair reads as one vehicle before and after.
      before:
        "https://images.unsplash.com/photo-1770935883781-a2f5a52b69da?auto=format&fit=crop&w=1000&q=80",
      after:
        "https://images.unsplash.com/photo-1628573042918-a91e94c2c906?auto=format&fit=crop&w=1000&q=80",
    },
    {
      label: "Wheels & Tyres",
      before: px(19826713, 1000), // caked-on dirt across the rim
      after: px(33994539, 1000), // clean, glossy wheel
    },
  ],
  masonry: [
    px(37809565), // buffing a car panel
    px(5233264), // vacuuming a car carpet
    px(6872609), // foam spray over the bonnet
    px(20051458), // detailing a car hood in a garage
    px(17623850), // cleaning a wheel by hand
    // Freshly cleaned Maruti Swift — another everyday car around Simga.
    "https://images.unsplash.com/photo-1663852408695-f57f4d75a536?auto=format&fit=crop&w=900&q=80",
  ],
  // असली प्रोसेस वीडियो /public/videos में डालें।
  processClips: [
    { src: "/videos/foam-wash-clip.mp4", label: "Foam Wash" },
    { src: "/videos/shine-reveal-clip.mp4", label: "Shine Reveal" },
  ],
};

export const stats = [
  { label: "गाड़ियाँ धुलीं", value: 500, suffix: "+" },
  { label: "साल का अनुभव", value: 6, suffix: "+" },
  { label: "ग्राहक रेटिंग", value: 4.9, suffix: "/5" },
  { label: "खुश ग्राहक", value: 450, suffix: "+" },
];

export const trustBadges = [
  {
    icon: "ShieldCheck",
    title: "Trained Team",
    description: "हर काम अनुभवी और ट्रेंड हाथों से।",
  },
  {
    icon: "Timer",
    title: "On Time",
    description: "WhatsApp पर बुक कीजिए, गाड़ी समय पर तैयार।",
  },
  {
    icon: "ThumbsUp",
    title: "Full Satisfaction",
    description: "पसंद न आए तो दोबारा — बिल्कुल फ्री।",
  },
  {
    icon: "Award",
    title: "Best Products",
    description: "अच्छी कंपनी का फोम, पॉलिश और कोटिंग।",
  },
];

// TODO: असली ग्राहकों के रिव्यू से बदलें।
export const testimonials = [
  {
    name: "Rohit Verma",
    vehicle: "Honda City",
    rating: 5,
    quote: "गाड़ी शोरूम से भी बढ़िया लग रही है। सिरेमिक कोटिंग का काम कमाल का है।",
  },
  {
    name: "Priya Sahu",
    vehicle: "Hyundai Creta",
    rating: 5,
    quote: "WhatsApp पर बुक किया, गाड़ी दी और चमकती हुई वापस मिली। बहुत जल्दी काम।",
  },
  {
    name: "Ankit Dewangan",
    vehicle: "Maruti Swift",
    rating: 5,
    quote: "अंदर के पुराने दाग भी निकल गए। तिल्दा में सबसे बढ़िया डिटेलिंग।",
  },
  {
    name: "Simran Kaur",
    vehicle: "Tata Nexon",
    rating: 5,
    quote: "पॉलिश के बाद गाड़ी की पुरानी चमक वापस आ गई। सबको सलाह दूँगी।",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Location", href: "#location" },
];

// ----------------------------------------------------------------------------
// सारे सेक्शन का टेक्स्ट। Headings English, नीचे की लाइन हिंदी में।
// ----------------------------------------------------------------------------

export const copy = {
  nav: { book: "Book Now" },
  hero: {
    badge: "Simga • Car Detailing Studio",
    headlineTop: "Showroom shine,",
    headlineAccent: "every single visit.",
    sub: "फोम वॉश, इंटीरियर डिटेलिंग और सिरेमिक कोटिंग — हर बार नई जैसी चमक।",
    ctaPrimary: "Book on WhatsApp",
    ctaSecondary: "View Services",
  },
  services: {
    eyebrow: "What We Do",
    heading: "Services built for a perfect finish",
    sub: "छोटी धुलाई से लेकर पूरी सिरेमिक कोटिंग तक — हर काम हाथ से।",
  },
  gallery: {
    eyebrow: "Transformations",
    heading: "See the difference",
    sub: "स्लाइडर को दाएँ-बाएँ खिसकाकर फर्क खुद देखिए।",
    before: "Before",
    after: "After",
    moreHeading: "More from the studio",
  },
  whyUs: {
    eyebrow: "Why Choose Us",
    heading: "Trusted by hundreds of car owners",
  },
  testimonials: {
    eyebrow: "Reviews",
    heading: "What our customers say",
  },
  location: {
    eyebrow: "Find Us",
    heading: "Visit the studio",
    addressLabel: "Address",
    hoursLabel: "Opening Hours",
    directions: "Get Directions",
  },
  footer: {
    ctaHeading: "Ready for a fresh shine?",
    ctaSub: "WhatsApp पर मैसेज कीजिए — 1 मिनट में बुकिंग।",
    ctaButton: "Book on WhatsApp",
    linksLabel: "Quick Links",
    connectLabel: "Connect",
    rights: "All rights reserved.",
  },
};
