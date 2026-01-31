export const BRAND_COLORS = {
  red: "#d70025",
  orange: "#FFB347",
  blue: "#7EC8E3",
  cream: "#FFF9F0",
  pink: "#FFE5EC",
  charcoal: "#2D2D2D",
} as const;

export interface Game {
  id: string;
  title: string;
  description: string;
  tagline?: string;
  status: "available" | "coming-soon";
  accentColor: string;
  image: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const GAMES: Game[] = [
  {
    id: "chloe-puzzle",
    title: "Chloe Puzzle World",
    description:
      "Guide Chloe through mind-bending puzzles in this adorable pixel art brain-teaser. Simple to learn, delightfully tricky to master!",
    status: "available",
    accentColor: "#7EC8E3",
    image: "/chloe.jpeg",
    appStoreUrl: "https://apps.apple.com/us/app/chloe-puzzle-game-pro/id1665917003",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rmstudios.chloe&pcampaignid=web_share",
  },
  {
    id: "panda-tycoon",
    title: "Panda Idle Tycoon",
    description:
      "Build your dream food empire with the world's cutest panda chef! Serve bubble tea, burgers, and smiles in this cozy idle tycoon.",
    status: "available",
    accentColor: "#FFB347",
    image: "/panda.jpeg",
    appStoreUrl: "https://apps.apple.com/us/app/panda-food-business/id6471916343",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rojeh.bear&pcampaignid=web_share",
  },
  {
    id: "cocos-fashion",
    title: "Coco's Fashion",
    description:
      "Dress up, design, and dazzle! Help Coco build the trendiest boutique in town. Plant flowers, hire quirky staff, and become a fashion icon!",
    tagline: "Style has never been this adorable.",
    status: "coming-soon",
    accentColor: "#FFB6C1",
    image: "/coco.jpeg",
  },
  {
    id: "charlies-nightmare",
    title: "Charlie's Nightmare",
    description:
      "When bedtime becomes an adventure! Help Charlie navigate his wild dreams filled with goofy monsters and unexpected surprises.",
    tagline: "Sweet dreams are made of... chaos?",
    status: "coming-soon",
    accentColor: "#9B59B6",
    image: "/charlie.jpeg",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "/gallery-character.jpeg",
    alt: "Game character concept art",
    caption: "Character Design",
  },
  {
    src: "/gallery-environment.jpeg",
    alt: "Pixel art environment",
    caption: "Environment Art",
  },
  {
    src: "/gallery-ui.jpeg",
    alt: "Game UI mockup",
    caption: "UI Design",
  },
  {
    src: "/gallery-world.jpeg",
    alt: "Fantasy world concept",
    caption: "World Building",
  },
  {
    src: "/gallery-animation.jpeg",
    alt: "Character animation frames",
    caption: "Animation",
  },
  {
    src: "/gallery-sketches.jpeg",
    alt: "Behind the scenes sketch",
    caption: "Sketches",
  },
    {
    src: "/gallery-new.jpeg",
    alt: "Behind the scenes sketch",
    caption: "Sketches",
  },
];

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/rojehgames",
  instagram: "https://instagram/rojehgames",
  discord: "https://discord.com/invite/s8rMxrHDta",
  youtube: "https://www.youtube.com/@rojehgames",
};

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#games", label: "Games" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];
