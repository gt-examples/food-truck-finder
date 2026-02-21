export type CuisineType =
  | "mexican"
  | "korean"
  | "bbq"
  | "vegan"
  | "seafood"
  | "desserts"
  | "mediterranean"
  | "indian"
  | "american"
  | "japanese"
  | "italian"
  | "caribbean";

export interface Truck {
  slug: string;
  name: string;
  cuisine: CuisineType;
  description: string;
  rating: number;
  reviewCount: number;
  ratingBreakdown: Record<number, number>;
  tags: string[];
}

export const trucks: Truck[] = [
  {
    slug: "kimchi-king",
    name: "Kimchi King",
    cuisine: "korean",
    description:
      "Authentic Korean street food with a modern twist. Family-owned for three generations, bringing the bold flavors of Seoul to the streets.",
    rating: 4.7,
    reviewCount: 238,
    ratingBreakdown: { 5: 142, 4: 61, 3: 22, 2: 8, 1: 5 },
    tags: ["spicy", "family-owned"],
  },
  {
    slug: "taco-libre",
    name: "Taco Libre",
    cuisine: "mexican",
    description:
      "Hand-pressed tortillas and slow-cooked meats inspired by the markets of Oaxaca. Every taco tells a story.",
    rating: 4.5,
    reviewCount: 312,
    ratingBreakdown: { 5: 165, 4: 89, 3: 37, 2: 14, 1: 7 },
    tags: ["authentic", "late-night"],
  },
  {
    slug: "smoke-signal-bbq",
    name: "Smoke Signal BBQ",
    cuisine: "bbq",
    description:
      "Low and slow Texas-style barbecue smoked over post oak for 14 hours. The line is worth the wait.",
    rating: 4.8,
    reviewCount: 189,
    ratingBreakdown: { 5: 132, 4: 38, 3: 12, 2: 5, 1: 2 },
    tags: ["award-winning", "smoky"],
  },
  {
    slug: "the-green-machine",
    name: "The Green Machine",
    cuisine: "vegan",
    description:
      "Plant-powered comfort food that even meat lovers crave. Creative, colorful, and packed with flavor.",
    rating: 4.3,
    reviewCount: 156,
    ratingBreakdown: { 5: 72, 4: 48, 3: 24, 2: 8, 1: 4 },
    tags: ["plant-based", "eco-friendly"],
  },
  {
    slug: "catch-of-the-day",
    name: "Catch of the Day",
    cuisine: "seafood",
    description:
      "Fresh-off-the-boat seafood prepared simply and perfectly. From fish tacos to lobster rolls, taste the ocean.",
    rating: 4.6,
    reviewCount: 201,
    ratingBreakdown: { 5: 112, 4: 56, 3: 22, 2: 7, 1: 4 },
    tags: ["fresh", "sustainable"],
  },
  {
    slug: "sugar-rush",
    name: "Sugar Rush",
    cuisine: "desserts",
    description:
      "Handcrafted desserts and sweet treats made fresh daily. Churros, ice cream, waffles, and pure happiness.",
    rating: 4.4,
    reviewCount: 278,
    ratingBreakdown: { 5: 139, 4: 78, 3: 39, 2: 14, 1: 8 },
    tags: ["sweet", "kid-friendly"],
  },
  {
    slug: "naan-stop",
    name: "Naan Stop",
    cuisine: "indian",
    description:
      "Bold Indian flavors wrapped in fresh-baked naan. From butter chicken to chana masala, every bite is a celebration of spice.",
    rating: 4.6,
    reviewCount: 167,
    ratingBreakdown: { 5: 95, 4: 42, 3: 19, 2: 7, 1: 4 },
    tags: ["spicy", "aromatic"],
  },
  {
    slug: "gyro-heroes",
    name: "Gyro Heroes",
    cuisine: "mediterranean",
    description:
      "Mediterranean classics done right. Hand-carved gyros, creamy hummus, and warm pita fresh off the grill.",
    rating: 4.5,
    reviewCount: 145,
    ratingBreakdown: { 5: 78, 4: 40, 3: 18, 2: 6, 1: 3 },
    tags: ["fresh", "healthy"],
  },
  {
    slug: "burger-blitz",
    name: "Burger Blitz",
    cuisine: "american",
    description:
      "Smash burgers with a crispy edge and juicy center. Premium beef, toasted buns, and toppings that go beyond the basics.",
    rating: 4.2,
    reviewCount: 334,
    ratingBreakdown: { 5: 147, 4: 100, 3: 54, 2: 22, 1: 11 },
    tags: ["classic", "hearty"],
  },
  {
    slug: "ramen-rider",
    name: "Ramen Rider",
    cuisine: "japanese",
    description:
      "Rich, soul-warming ramen bowls crafted with 18-hour bone broth. A taste of Tokyo on four wheels.",
    rating: 4.7,
    reviewCount: 192,
    ratingBreakdown: { 5: 118, 4: 46, 3: 18, 2: 6, 1: 4 },
    tags: ["umami", "warming"],
  },
  {
    slug: "pasta-la-vista",
    name: "Pasta La Vista",
    cuisine: "italian",
    description:
      "Fresh pasta made from scratch daily. From truffle mac and cheese to classic carbonara, Italian comfort at its finest.",
    rating: 4.4,
    reviewCount: 178,
    ratingBreakdown: { 5: 89, 4: 52, 3: 24, 2: 9, 1: 4 },
    tags: ["handmade", "comforting"],
  },
  {
    slug: "island-grill",
    name: "Island Grill",
    cuisine: "caribbean",
    description:
      "Caribbean-inspired grilled meats and tropical sides. Jerk chicken, plantains, and the warmth of the islands in every plate.",
    rating: 4.6,
    reviewCount: 143,
    ratingBreakdown: { 5: 82, 4: 38, 3: 15, 2: 5, 1: 3 },
    tags: ["tropical", "grilled"],
  },
];

export const cuisineLabels: Record<CuisineType, string> = {
  mexican: "Mexican",
  korean: "Korean",
  bbq: "BBQ",
  vegan: "Vegan",
  seafood: "Seafood",
  desserts: "Desserts",
  mediterranean: "Mediterranean",
  indian: "Indian",
  american: "American",
  japanese: "Japanese",
  italian: "Italian",
  caribbean: "Caribbean",
};
