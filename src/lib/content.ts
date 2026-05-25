// Aldovia canonical content store.
// Source of truth: live aldovia.in plus the Pointers document (Mar 31, 2026) corrections.
// All copy belongs to The Asylum / Aldovia Resort & Convention.

export const BRAND = {
  name: "Aldovia",
  longName: "Aldovia Resort & Convention",
  former: "Formerly known as Clarks Exotica Convention Resort & Spa",
  tagline: "Where Grace Finds You",
} as const;

export type NavChild = { label: string; path: string };
export type NavItem = { label: string; path?: string; children?: NavChild[] };

export const NAV_LINKS: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Stay",
    children: [
      { label: "Rooms", path: "/rooms" },
      { label: "Experiences & Packages", path: "/experience" },
      { label: "Dining", path: "/dining" },
      { label: "Activities", path: "/activities" },
    ],
  },
  {
    label: "Events",
    children: [
      { label: "Weddings", path: "/wedding" },
      { label: "Corporate Events", path: "/corporate" },
      { label: "Venues", path: "/venues" },
    ],
  },
  { label: "Convention Center", path: "/venues" },
  {
    label: "Discover",
    children: [
      { label: "About Us", path: "/about-us" },
      { label: "Contact Us", path: "/contact-us" },
    ],
  },
];

export const CONTACT_INFO = {
  phone1: "+91 80 3507 7000",
  phone1Label: "Hotel",
  phone2: "+91 80 3101 3831",
  phone2Label: "Sales",
  email: "info@aldovia.in",
  address: "Swiss Town, Sadahalli Post, Devanahalli Taluk, Bengaluru, Karnataka 562110, India",
  addressShort: ["Swiss Town, Sadahalli Post", "Devanahalli Taluk", "Bengaluru, KA 562110"],
  instagram: "https://www.instagram.com/aldovia.in",
  facebook: "#",
  linkedin: "#",
} as const;

export type Room = {
  id: string;
  name: string;
  category: "Room" | "Suite";
  size: string;
  occupancy: string;
  bed: string;
  description: string;
  images: string[];
};

export const ROOMS: Room[] = [
  {
    id: "deluxe-room",
    name: "Deluxe Room",
    category: "Room",
    size: "350 - 412 sq. ft.",
    occupancy: "3 guests",
    bed: "King bed",
    description:
      "Warm wood tones, muted interiors, and ceiling accents that catch the light just so. The Deluxe Room is Aldovia at its most considered: not the largest room, but the one where every detail has been thought through. A king bed, space for a small family, and the kind of quiet that makes forty minutes from Bangalore feel like a different latitude entirely.",
    images: [
      "/assets/rooms/deluxe-room/hero.jpg",
      "https://aldovia.in/assets/rooms/deluxe-room/s2.jpg",
      "https://aldovia.in/assets/rooms/deluxe-room/s3.jpg",
    ],
  },
  {
    id: "luxury-room",
    name: "Luxury Room",
    category: "Room",
    size: "350 sq. ft.",
    occupancy: "3 guests",
    bed: "King bed",
    description:
      "A step wider, a touch more generous. The Luxury Room takes everything the Deluxe offers and gives it breathing space. Upgraded furnishings, a larger work area, and a bathroom that feels like it was designed for staying in, not just passing through. For guests who want comfort without ceremony.",
    images: [
      "/assets/rooms/luxury-room/hero.jpg",
      "https://aldovia.in/assets/rooms/luxury-room/s2.jpg",
      "https://aldovia.in/assets/rooms/luxury-room/s3.jpg",
    ],
  },
  {
    id: "1-bedroom-suite",
    name: "1 Bedroom Suite",
    category: "Suite",
    size: "532 sq. ft.",
    occupancy: "3 guests",
    bed: "King bed",
    description:
      "A separate living area changes everything. The 1 Bedroom Suite gives you a proper room to sit in after the conference, a space to host a quiet drink, a place to spread out without feeling like you are living on the bed. One bedroom, one living room, and the sense that someone thought about how you actually use a hotel room.",
    images: [
      "/assets/rooms/1-bedroom-suite/hero.jpg",
      "https://aldovia.in/assets/rooms/1-bedroom-suite/s2.jpg",
      "https://aldovia.in/assets/rooms/1-bedroom-suite/s3.jpg",
    ],
  },
  {
    id: "2-bedroom-suite",
    name: "2 Bedroom Suite",
    category: "Suite",
    size: "730 sq. ft.",
    occupancy: "6 guests",
    bed: "King bed + Twin beds",
    description:
      "Built for families that want to be together without being on top of each other. Two bedrooms, a shared living area, and enough space for the children to claim their own territory while the adults keep theirs. The 2 Bedroom Suite turns a hotel stay into something closer to a home.",
    images: [
      "/assets/rooms/2-bedroom-suite/hero.jpg",
      "https://aldovia.in/assets/rooms/2-bedroom-suite/s2.jpg",
      "https://aldovia.in/assets/rooms/2-bedroom-suite/s3.jpg",
    ],
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    category: "Suite",
    size: "620 sq. ft.",
    occupancy: "3 guests",
    bed: "King bed",
    description:
      "Where the suite category begins to feel like a private residence. The Deluxe Suite pairs a generous bedroom with a living room that can double as a workspace, a meeting point, or simply a place to watch the grounds from the window. Premium furnishings, upgraded amenities, and the kind of space that makes extending your stay an easy decision.",
    images: [
      "/assets/rooms/deluxe-suite/hero.jpg",
      "https://aldovia.in/assets/rooms/deluxe-suite/s2.jpg",
      "https://aldovia.in/assets/rooms/deluxe-suite/s3.jpg",
    ],
  },
  {
    id: "executive-suite",
    name: "Executive Suite",
    category: "Suite",
    size: "1846 sq. ft.",
    occupancy: "4 guests",
    bed: "King bed",
    description:
      "The best room in the house, and it knows it. The Executive Suite is for the guest who treats a hotel stay as an extension of how they live. An expansive living area, a master bedroom with every upgrade the property offers, a bathroom that borders on indulgent, and views that remind you why this resort sits where it does. For leaders, for celebrations, for people who understand that the room you stay in sets the tone for everything else.",
    images: [
      "/assets/rooms/executive-suite/hero.jpg",
      "https://aldovia.in/assets/rooms/executive-suite/s2.jpg",
      "https://aldovia.in/assets/rooms/executive-suite/s3.jpg",
    ],
  },
];

export type Dining = {
  id: string;
  name: string;
  tagline: string;
  cuisine: string;
  timings: string;
  capacity: string;
  description: string;
  images: string[];
};

export const DINING: Dining[] = [
  {
    id: "ambrosia",
    name: "Ambrosia",
    tagline: "A Culinary Journey",
    cuisine: "Multi-Cuisine",
    timings: "7:00 AM — 11:00 PM",
    capacity: "158 guests",
    description:
      "The main restaurant at Aldovia, and the one that sets the standard. Ambrosia serves multi-cuisine fare with the kind of attention that turns a meal into a reason to come back. From authentic Indian thalis to international plates, every dish is built on fresh ingredients and a kitchen that takes pride in consistency. Breakfast, lunch, and dinner, seven days a week. The kind of restaurant a resort is judged by.",
    images: [
      "/assets/dining/ambrosia/hero.jpg",
      "https://aldovia.in/assets/pages/dining/day/ambrosia2.webp",
      "https://aldovia.in/assets/pages/dining/day/ambrosia3.webp",
    ],
  },
  {
    id: "oasis",
    name: "Oasis",
    tagline: "Pool Bar & Lounge",
    cuisine: "Bar & Lounge",
    timings: "5:00 PM — 1:00 AM",
    capacity: "Live music on select evenings",
    description:
      "Bar and lounge offering handcrafted cocktails, spirits and small plates. A perfect evening companion under the open sky.",
    images: [
      "/assets/dining/oasis/hero.jpg",
      "https://aldovia.in/assets/herobackgrounds/dining/day/banner1.webp",
      "https://aldovia.in/assets/herobackgrounds/dining/day/banner3.webp",
    ],
  },
  {
    id: "mirage",
    name: "Mirage",
    tagline: "All-Day Dining",
    cuisine: "All-Day Dining",
    timings: "11:00 AM — 11:00 PM",
    capacity: "Indoor and outdoor seating",
    description:
      "All-day dining restaurant with indoor and outdoor seating. Serves light meals, snacks and beverages throughout the day.",
    images: [
      "/assets/dining/mirage/hero.jpg",
      "https://aldovia.in/assets/herobackgrounds/dining/day/banner1.webp",
      "https://aldovia.in/assets/herobackgrounds/dining/day/banner3.webp",
    ],
  },
  {
    id: "square-cafe",
    name: "The Square Café",
    tagline: "Coffee & Quiet Mornings",
    cuisine: "Café",
    timings: "6:30 AM — 8:00 PM",
    capacity: "Open seven days a week",
    description:
      "Café serving freshly brewed coffee, teas, pastries and light bites. The right place to start your day.",
    images: [
      "https://aldovia.in/assets/pages/dining/day/mirage3.webp",
      "https://aldovia.in/assets/herobackgrounds/dining/day/banner1.webp",
      "https://aldovia.in/assets/herobackgrounds/dining/day/banner3.webp",
    ],
  },
  {
    id: "pool-bar",
    name: "Pool Bar",
    tagline: "Refresh by the Water",
    cuisine: "Bar",
    timings: "10:00 AM — 10:00 PM",
    capacity: "Poolside",
    description:
      "Poolside bar serving refreshing drinks and snacks for sun-soaked afternoons.",
    images: [
      "https://aldovia.in/assets/pages/dining/day/mirage3.webp",
      "https://aldovia.in/assets/herobackgrounds/dining/day/banner1.webp",
      "https://aldovia.in/assets/herobackgrounds/dining/day/banner3.webp",
    ],
  },
];

export type Package = {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  description: string;
  inclusions: string[];
  images: string[];
};

export const PACKAGES: Package[] = [
  {
    id: "morning-escape",
    name: "The Morning Escape",
    tagline: "Relax & Refresh Escape",
    duration: "Full Day",
    description:
      "Start your day with a refreshing breakfast and unwind through a balanced mix of leisure, dining, and recreational experiences designed for a perfect daytime retreat.",
    inclusions: [
      "Welcome Drink, Buffet Breakfast, Lunch, Hi-tea",
      "Indoor recreation — Squash, Billiards, Badminton, Table Tennis, Chess, Board Games",
      "Outdoor activities — Lawn Tennis, Basketball, Volleyball, Cycling, Amphitheatre, PickleBall, Net Cricket",
    ],
    images: [
      "https://aldovia.in/assets/pages/Experience&Packages/morning-escape/day/image1.webp",
      "https://aldovia.in/assets/pages/Experience&Packages/morning-escape/day/image2.webp",
      "https://aldovia.in/assets/pages/Experience&Packages/morning-escape/day/image4.webp",
    ],
  },
  {
    id: "still-afternoon",
    name: "The Still Afternoon",
    tagline: "Curated Day-Out Experience",
    duration: "Full Day",
    description:
      "A day defined by the perfect balance of vitality and indulgence. Master our world-class courts before surrendering to a culinary odyssey in our most prestigious dining hall.",
    inclusions: [
      "Welcome Drink, Buffet Lunch, Hi-tea",
      "Indoor recreation — Squash, Billiards, Badminton, Table Tennis, Chess, Board Games",
      "Outdoor activities — Lawn Tennis, Basketball, Volleyball, Cycling, Amphitheatre, PickleBall, Net Cricket",
    ],
    images: [
      "https://aldovia.in/assets/pages/Experience&Packages/still-afternoon/day/image1.webp",
      "https://aldovia.in/assets/pages/Experience&Packages/still-afternoon/day/image2.webp",
      "https://aldovia.in/assets/pages/Experience&Packages/still-afternoon/day/image3.webp",
    ],
  },
  {
    id: "unhurried-day",
    name: "The Unhurried Day",
    tagline: "Leisure Plus Dining",
    duration: "Full Day",
    description:
      "Enjoy a well-rounded day with indulgent meals and relaxing activities, ending with a delightful dinner to complete your experience on a satisfying note.",
    inclusions: [
      "Welcome Drink, Buffet Lunch, Hi-tea, Dinner",
      "Indoor recreation — Squash, Billiards, Badminton, Table Tennis, Chess, Board Games",
      "Outdoor activities — Lawn Tennis, Basketball, Volleyball, Cycling, Amphitheatre, PickleBall, Net Cricket",
    ],
    images: [
      "https://aldovia.in/assets/pages/activities/basketball/day/activities3.webp",
      "https://aldovia.in/assets/pages/activities/spa/day/spa5.webp",
      "https://aldovia.in/assets/pages/activities/billiards/day/billiards1.webp",
    ],
  },
  {
    id: "complete-retreat",
    name: "The Complete Retreat",
    tagline: "Ultimate All-Day Indulgence",
    duration: "Full Day",
    description:
      "Experience a complete day of luxury with all meals included, from breakfast to dinner, paired with engaging activities and serene relaxation moments throughout the day.",
    inclusions: [
      "Welcome Drink, Buffet Breakfast, Lunch, Hi-tea, Dinner",
      "Indoor recreation — Squash, Billiards, Badminton, Table Tennis, Chess, Board Games",
      "Outdoor activities — Lawn Tennis, Basketball, Volleyball, Cycling, Amphitheatre, PickleBall, Net Cricket",
    ],
    images: [
      "https://aldovia.in/assets/pages/dining/day/dining3.webp",
      "https://aldovia.in/assets/pages/activities/carrom/day/carrom_1.webp",
      "https://aldovia.in/assets/pages/activities/swimming/day/swimming3.webp",
    ],
  },
  {
    id: "gentle-evening",
    name: "The Gentle Evening",
    tagline: "Evening Retreat Experience",
    duration: "Evening",
    description:
      "Perfect for a relaxed evening escape, enjoy a refreshing welcome, light hi-tea, and a lavish dinner complemented by access to select leisure activities.",
    inclusions: [
      "Welcome Drink, Hi-tea, Buffet Dinner",
      "Indoor recreation — Squash, Billiards, Badminton, Table Tennis, Chess, Board Games",
      "Outdoor activities — Lawn Tennis, Basketball, Volleyball, Cycling, Amphitheatre, PickleBall, Net Cricket",
    ],
    images: [
      "https://aldovia.in/assets/pages/activities/billiards/day/billiards3.webp",
      "https://aldovia.in/assets/pages/activities/pickleball/day/pickleball_1.webp",
      "https://aldovia.in/assets/pages/dining/day/dining2.webp",
    ],
  },
];

export type Activity = {
  name: string;
  tagline: string;
  description: string;
  inclusions: string[];
  image: string;
};

export const ACTIVITIES: Record<string, Activity[]> = {
  Indoor: [
    {
      name: "Table Tennis",
      tagline: "Fast reflex rallies indoors",
      description:
        "Enjoy quick-paced table tennis in a dedicated indoor setup designed for fun rallies, focused practice, and friendly competition.",
      inclusions: ["Indoor table tennis setup", "Friendly and practice play", "Comfortable recreation space"],
      image: "https://aldovia.in/assets/pages/activities/tabletennis/day/tabletennis1.webp",
    },
    {
      name: "Badminton",
      tagline: "Agile indoor shuttle play",
      description:
        "Play energetic badminton matches indoors with space suited for quick movement and enjoyable rallies.",
      inclusions: ["Indoor badminton access", "Singles and doubles play", "Recreational match setup"],
      image: "https://aldovia.in/assets/pages/activities/badminton/day/badminton1.webp",
    },
    {
      name: "Billiards",
      tagline: "Classic precision gameplay",
      description: "Enjoy billiards in a relaxed indoor setting perfect for strategic games and social play.",
      inclusions: ["Billiards table access", "Casual and focused play", "Indoor leisure environment"],
      image: "/assets/activities/indoor/billiards.jpg",
    },
    {
      name: "Squash",
      tagline: "High-intensity indoor action",
      description: "Take on fast-paced squash sessions in a dynamic indoor court built for agility and endurance.",
      inclusions: ["Indoor squash court access", "Practice and match play", "Active training environment"],
      image: "https://aldovia.in/assets/pages/activities/squash/day/squash1.webp",
    },
    {
      name: "Board Games",
      tagline: "Timeless indoor board games",
      description: "Relax with classic carrom games in a cozy indoor space ideal for friendly rounds and family fun.",
      inclusions: ["Board Games setup", "Leisure group gameplay", "Indoor social activity space"],
      image: "https://aldovia.in/assets/pages/activities/carrom/day/carrom_1.webp",
    },
  ],
  Outdoor: [
    {
      name: "Basketball",
      tagline: "Open-court energy",
      description: "Full-size basketball court for casual games and energetic matches under open skies.",
      inclusions: ["Outdoor basketball court", "Casual & match play", "All-weather surface"],
      image: "https://aldovia.in/assets/pages/activities/basketball/day/activities3.webp",
    },
    {
      name: "Cycling",
      tagline: "Discover seventy acres",
      description: "Cycle through landscaped paths and quiet corners of the property at your own pace.",
      inclusions: ["Bicycles available", "Scenic property trails", "All ages welcome"],
      image: "https://aldovia.in/assets/pages/activities/cycling/day/cycling1.webp",
    },
    {
      name: "Swimming",
      tagline: "Signature outdoor pool",
      description: "Spend the afternoon by the signature pool with comfortable loungers and poolside service.",
      inclusions: ["Pool access", "Loungers & shade", "Towels included"],
      image: "https://aldovia.in/assets/pages/activities/swimming/day/swimming3.webp",
    },
    {
      name: "Pickleball",
      tagline: "A game for everyone",
      description:
        "Fast, friendly, and easy to learn — our pickleball court is open for casual play and tournaments.",
      inclusions: ["Court access", "Rackets & balls", "Singles or doubles"],
      image: "/assets/activities/outdoor/pickleball.jpg",
    },
  ],
  "Health & Wellness Spa": [
    {
      name: "Ayurvedic Therapies",
      tagline: "Traditional healing",
      description: "Ayurvedic therapies rooted in tradition, performed by trained therapists for deep restoration.",
      inclusions: ["Abhyanga, Shirodhara", "Herbal oils & blends", "Private treatment rooms"],
      image: "/assets/activities/spa/ayurvedic-therapies.jpg",
    },
    {
      name: "Couples Spa",
      tagline: "Together, restored",
      description: "Couples spa suites for a shared escape from the everyday.",
      inclusions: ["Couples suites", "Synchronized therapies", "Aromatherapy oils"],
      image: "https://aldovia.in/assets/pages/activities/spa/day/spa5.webp",
    },
  ],
};

export type Venue = {
  id: string;
  name: string;
  tagline: string;
  capacity: number;
  area: string;
  description: string;
  images: string[];
};

// Geneva and Pearl Boardroom capacities corrected per Pointers (Mar 31, 2026).
export const VENUES: Venue[] = [
  {
    id: "galaxy-grand-ballroom",
    name: "Galaxy Grand Ballroom",
    tagline: "Opulent Celebrations & Galas",
    capacity: 900,
    area: "6,834 sq ft",
    description:
      "The flagship venue at Aldovia. Spacious and versatile, the Galaxy Grand Ballroom is built for events that demand grandeur without compromise. From large-scale weddings to high-profile corporate galas, the space adapts to the scale of your ambition. Soaring ceilings, state-of-the-art AV, and a service team that has managed celebrations seating a thousand and intimate dinners for fifty in the same room.",
    images: [
      "https://aldovia.in/assets/pages/hall/galaxy/day/image1.webp",
      "https://aldovia.in/assets/pages/hall/galaxy/day/image2.webp",
      "https://aldovia.in/assets/pages/hall/galaxy/day/image6.webp",
    ],
  },
  {
    id: "galaxy-grand-courtyard",
    name: "Galaxy Grand Courtyard",
    tagline: "Elegant Outdoor Settings",
    capacity: 100,
    area: "24,800 sq ft",
    description:
      "For couples who want the sky above them and the grounds around them. An open-air venue that brings the beauty of Aldovia's landscaped property into the ceremony itself. Perfect for cocktail receptions, garden weddings, and al fresco dining.",
    images: [
      "https://aldovia.in/assets/pages/hall/galaxy/day/image2.webp",
      "https://aldovia.in/assets/pages/hall/galaxy/day/image6.webp",
      "https://aldovia.in/assets/pages/hall/galaxy/day/image1.webp",
    ],
  },
  {
    id: "galaxy-grand-dining",
    name: "Galaxy Grand Dining",
    tagline: "Exclusive Dining Experiences",
    capacity: 100,
    area: "3,300 sq ft",
    description:
      "Sophisticated dining venue for intimate celebrations, private dinners, and exclusive gatherings.",
    images: [
      "https://aldovia.in/assets/pages/dining/day/ambrosia1.webp",
      "https://aldovia.in/assets/pages/dining/day/ambrosia2.webp",
      "https://aldovia.in/assets/pages/dining/day/dining3.webp",
    ],
  },
  {
    id: "eden-lawn",
    name: "Eden Lawn",
    tagline: "Natural Beauty & Serenity",
    capacity: 400,
    area: "16,356 sq ft",
    description:
      "Some celebrations belong under open sky. Eden Lawn is 16,356 sq ft of lush, unhurried outdoor space — where guests gather not in a venue, but in a moment that feels like it was grown here.",
    images: [
      "https://aldovia.in/assets/herobackgrounds/wedding/day/image1.webp",
      "https://aldovia.in/assets/herobackgrounds/wedding/day/image2.webp",
      "https://aldovia.in/assets/herobackgrounds/wedding/day/image3.webp",
    ],
  },
  {
    id: "lotus",
    name: "Lotus",
    tagline: "Versatile Mid-Size Events",
    capacity: 400,
    area: "5,974 sq ft",
    description: "Multi-purpose venue ideal for corporate meetings, medium-sized celebrations, and conferences.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image1.webp"],
  },
  {
    id: "sunflower",
    name: "Sunflower",
    tagline: "Bright & Welcoming Space",
    capacity: 200,
    area: "2,637 sq ft",
    description: "Well-appointed hall perfect for seminars, workshops, and social gatherings.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image2.webp"],
  },
  {
    id: "rose",
    name: "Rose",
    tagline: "Elegant & Refined",
    capacity: 180,
    area: "2,540 sq ft",
    description: "Sophisticated venue for corporate events, training sessions, and intimate celebrations.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image6.webp"],
  },
  {
    id: "orchid",
    name: "Orchid",
    tagline: "Boutique Event Space",
    capacity: 150,
    area: "2,153 sq ft",
    description: "Intimate setting ideal for board meetings, private functions, and exclusive events.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image1.webp"],
  },
  {
    id: "jasmine",
    name: "Jasmine",
    tagline: "Cozy & Professional",
    capacity: 70,
    area: "1,026 sq ft",
    description: "Perfect for small meetings, workshops, and intimate gatherings with professional amenities.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image2.webp"],
  },
  {
    id: "tulip",
    name: "Tulip",
    tagline: "Intimate Meetings",
    capacity: 40,
    area: "770 sq ft",
    description: "Sophisticated venue ideal for corporate events, training sessions, and intimate events.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image6.webp"],
  },
  {
    id: "lily",
    name: "Lily",
    tagline: "Exclusive Small Gatherings",
    capacity: 30,
    area: "560 sq ft",
    description: "Intimate setting ideal for board meetings, private functions, and exclusive events.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image1.webp"],
  },
  {
    id: "geneva-boardroom",
    name: "Geneva Boardroom",
    tagline: "Executive Boardroom",
    capacity: 20,
    area: "472 sq ft",
    description:
      "For the meetings that do not need a ballroom. Geneva is a fully appointed boardroom for senior leadership sessions, board meetings, and high-level discussions that require privacy and professionalism. Seating for up to twenty, premium AV, and the kind of quiet that lets people focus on the agenda instead of the surroundings.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image2.webp"],
  },
  {
    id: "pearl-boardroom",
    name: "Pearl Boardroom",
    tagline: "Premium Boardroom Experience",
    capacity: 20,
    area: "372 sq ft",
    description:
      "An elegantly appointed boardroom designed for executive meetings, strategy sessions, and high-level discussions in a refined and focused environment.",
    images: ["https://aldovia.in/assets/pages/hall/galaxy/day/image6.webp"],
  },
  {
    id: "ocean-convention-center",
    name: "Ocean Convention Center",
    tagline: "Grand Convention Destination",
    capacity: 3000,
    area: "25,000 sq ft",
    description:
      "A purpose-built pillar-less convention venue crafted for large gatherings, industry expos, and high-impact conferences with seamless service and scale. Equipped with state-of-the-art audiovisual systems, flexible seating configurations, and dedicated function space. The hall connects to premium dining areas and hospitality zones, ensuring all attendees experience comfort alongside functionality.",
    images: [
      "/assets/venues/ocean-convention-center/hero.jpg",
      "/assets/venues/ocean-convention-center/g1.jpg",
      "/assets/venues/ocean-convention-center/g2.jpg",
    ],
  },
];

export type Testimonial = { rating: number; text: string; author: string };

export const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    text: "We stayed at this resort during our December visit and had a great time. Located close to the airport, we never needed to drive down to the city. The amenities, food and service were top notch. Rooms were spacious and modern. Kids were entertained throughout. Buffet breakfast and lunch at Ambrosia offered great variety. Definitely returning.",
    author: "Dyson D'Souza",
  },
  {
    rating: 5,
    text: "Excellent family-friendly hotel with high-quality service. Conveniently located near the airport. Facilities include multiple pools, kids play area, and sports. Food is excellent. Rooms are spacious and well maintained. Staff is courteous and attentive. Highly recommended.",
    author: "Daydream33262065686",
  },
  {
    rating: 5,
    text: "We had our office annual outing and the experience was phenomenal. The property is vast with many amenities and a serene green environment. Service was excellent and location is perfect. Highly recommend.",
    author: "Pradeep Prakashan",
  },
  {
    rating: 5,
    text: "Wonderful experience at the resort. Property is clean, beautiful, and well maintained. Staff is polite and helpful. Rooms are comfortable, food is delicious, and overall atmosphere is relaxing. Perfect getaway.",
    author: "Pawan Dhoni",
  },
  {
    rating: 5,
    text: "Visited for the Dermacon conference. Rooms are spacious, buffet was great, and campus is huge. Special thanks to Ashish Sharma for excellent concierge service. Felt like a true 5-star hospitality experience.",
    author: "Avina Jain",
  },
  {
    rating: 5,
    text: "One of the best hotels I have stayed in. My first choice in Bangalore. Food is top notch, close to airport, great space for walks and sports. Friendly and accommodating staff.",
    author: "Sarvakhyan S",
  },
  {
    rating: 5,
    text: "Pleasant business stay. Rooms were clean and spacious, bed was comfortable, and environment was quiet and relaxing.",
    author: "Dream36630139864",
  },
  {
    rating: 5,
    text: "Visited during Christmas with family and enjoyed the stay. Service, decorations, and food were top notch. Rooms were comfortable. Location is peaceful and ideal for long stays.",
    author: "V R",
  },
  {
    rating: 4,
    text: "Beautiful resort with calm ambiance, greenery, and open spaces. Rooms are spacious and comfortable. Food is good and staff is courteous. Great for family outings and weekend stays.",
    author: "Pradeep Shetty",
  },
];

export type Award = { year: string; title: string; description: string };

export const AWARDS: Award[] = [
  { year: "2025", title: "India's Greatest Brand", description: "Recognized by Asia One for brand excellence and leadership." },
  { year: "2024", title: "Best Convention and Exhibition Center", description: "Awarded at the India Hospitality Awards for excellence in convention facilities." },
  { year: "2018", title: "Ultimate Service Award in Hospitality", description: "Honored by the Indian Ministry of Tourism for exceptional hospitality service." },
  { year: "2018", title: "Best Resort for MICE", description: "Honored at the Asia Hotel Industry Awards for excellence in MICE hosting." },
  { year: "2017", title: "Best Luxury Wedding and MICE Resort", description: "Recognized by South India Travels for premium wedding and MICE experiences." },
  { year: "2017", title: "Best Wedding Destination in India", description: "Recognized at the Asia Lifestyle Tourism Awards for destination weddings." },
  { year: "2016-2017", title: "Best Resort in Bangalore", description: "Supported by Incredible India and Ministry of Tourism for resort excellence." },
  { year: "2014-2015", title: "Certificate of Excellence", description: "Awarded by TripAdvisor for consistently outstanding guest reviews." },
  { year: "2014", title: "International Arch of Europe Award", description: "Presented at the International BID Quality Convention, Frankfurt." },
  { year: "2013", title: "European Award for Best Practices", description: "Presented by the European Society for Quality Research for operational excellence." },
  { year: "2007", title: "Best New Convention Center - South India", description: "Featured in Travel Tour MICE Guide for outstanding new convention infrastructure." },
];

export const WEDDING_FEATURES = [
  {
    title: "Stunning Venues",
    description: "Choose from expansive indoor ballrooms and open-air lawns, each designed for unforgettable wedding moments.",
    image: "https://aldovia.in/assets/herobackgrounds/wedding/day/image1.webp",
  },
  {
    title: "Customizable Themes",
    description: "Our event experts help you shape every detail, from decor palette to ceremony flow, around your vision.",
    image: "https://aldovia.in/assets/herobackgrounds/wedding/day/image2.webp",
  },
  {
    title: "Luxurious Accommodations",
    description: "Comfortable premium suites and rooms for families, close friends, and your full wedding party.",
    image: "https://aldovia.in/assets/rooms/2-bedroom-suite/day/2-bedroom1.webp",
  },
  {
    title: "Gourmet Dining",
    description: "Exquisite menus and impeccable service for your rehearsal dinner, grand wedding reception, and farewell breakfast.",
    image: "https://aldovia.in/assets/pages/dining/ambrosia.webp",
  },
  {
    title: "Complete Event Planning",
    description: "Whether a wedding, corporate event, birthday celebration, or private party, our premium planning services guarantee exceptional quality and a stress-free experience.",
    image: "https://aldovia.in/assets/herobackgrounds/wedding/day/image3.webp",
  },
];

export const HOME_HERO_IMAGES = [
  "https://aldovia.in/assets/herobackgrounds/wedding/day/image1.webp",
  "https://aldovia.in/assets/herobackgrounds/dining/day/banner1.webp",
  "https://aldovia.in/assets/pages/hall/galaxy/day/image1.webp",
  "https://aldovia.in/assets/herobackgrounds/convention/day/image1.webp",
];

export const ABOUT_STATS = [
  { value: "2", suffix: "", label: "Decades of Excellence" },
  { value: "250", suffix: "+", label: "Team Members" },
  { value: "98", suffix: "%", label: "Guest Satisfaction" },
];

export const ABOUT_STORY = [
  "Set across seventy acres of landscaped grounds, ten minutes from Kempegowda International Airport and forty minutes from the heart of Bangalore, Aldovia Resort & Convention began its life as Clarks Exotica, a name that served the property well for years. But properties, like the people who build them, evolve. Aldovia is not a rebrand in the cosmetic sense. It is a recalibration. Every space, every service, every experience is reconsidered through a single lens: grace. Not as decoration. As a standard.",
  "The Ocean Convention Center still seats three to four thousand. The grounds still stretch to the horizon. The kitchens still serve meals three times a day. What has changed is the intention behind all of it.",
  "Today, Aldovia is where Bangalore comes when it matters. Grand weddings that fill the grounds and take your breath with them — the kind that simply cannot happen anywhere else in this city. Conferences and conventions that bring six thousand delegates together under one roof. Family weekends that start at the pool, pass through the sports courts and the cycling trails, and end with a meal nobody wants to finish.",
  "Eleven event venues ranging from intimate boardrooms to a courtyard under open sky. Three restaurants, each with their own identity. A spa that draws on Ayurvedic tradition without ignoring modern practice. A signature pool that makes ten minutes from the airport feel like ten hours from everything.",
];

export const FOUNDER = {
  name: "Dr. Ronald Colaco",
  title: "Founder",
  image: "https://aldovia.in/assets/pages/aboutus/Ronald_Colaco.jpg",
  bio: [
    "Dr. Ronald Colaco, the Founder of Aldovia, is a visionary leader whose journey is defined by purpose, compassion and an unwavering pursuit of excellence. His leadership goes beyond building a brand; it is about creating a legacy rooted in grace, integrity and meaningful impact.",
    "A pioneer in integrated township development and hospitality, Dr. Colaco has been the driving force behind the development of landmark townships in Bangalore, including Hollywood Town, Swiss Town, Oval Reef, Serene Gardens, and Parkland View. He was the promoter of Clarks Exotica Convention Resort & Spa (now Aldovia) since 2007, shaping it into one of Bangalore's most recognized hospitality destinations.",
  ],
};
