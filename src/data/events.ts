export interface FoodTruckEvent {
  slug: string;
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  truckSlugs: string[];
  isPast: boolean;
}

export const events: FoodTruckEvent[] = [
  {
    slug: "spring-street-feast",
    name: "Spring Street Feast",
    description: "Kick off the season with the city's biggest food truck gathering. Over a dozen trucks, live music, and family activities in the heart of downtown.",
    date: "2026-03-14",
    startTime: "16:00",
    endTime: "22:00",
    location: "Downtown Plaza",
    truckSlugs: ["kimchi-king", "taco-libre", "smoke-signal-bbq", "the-green-machine", "sugar-rush", "naan-stop", "burger-blitz", "island-grill"],
    isPast: false,
  },
  {
    slug: "waterfront-bites",
    name: "Waterfront Bites",
    description: "An evening of seafood, sunset views, and ocean-inspired bites at the waterfront. Featuring the best coastal flavors in one place.",
    date: "2026-04-04",
    startTime: "17:00",
    endTime: "21:00",
    location: "Waterfront Park",
    truckSlugs: ["catch-of-the-day", "island-grill", "gyro-heroes", "ramen-rider"],
    isPast: false,
  },
  {
    slug: "vegan-food-fest",
    name: "Vegan Food Fest",
    description: "A celebration of plant-based cuisine. Discover creative vegan dishes from multiple trucks, plus cooking demos and sustainability talks.",
    date: "2026-04-18",
    startTime: "11:00",
    endTime: "18:00",
    location: "Central Park",
    truckSlugs: ["the-green-machine", "taco-libre", "naan-stop", "gyro-heroes", "ramen-rider"],
    isPast: false,
  },
  {
    slug: "global-flavors-night",
    name: "Global Flavors Night",
    description: "A world tour on wheels. Sample cuisines from Korea, India, the Caribbean, Japan, Italy, and beyond all in one evening.",
    date: "2026-05-09",
    startTime: "18:00",
    endTime: "23:00",
    location: "Riverside Market",
    truckSlugs: ["kimchi-king", "naan-stop", "island-grill", "ramen-rider", "pasta-la-vista", "gyro-heroes"],
    isPast: false,
  },
  {
    slug: "winter-warmup",
    name: "Winter Warm-Up",
    description: "Hot soups, rich stews, and warming drinks to beat the cold. A cozy gathering of comfort food trucks in the park.",
    date: "2026-01-17",
    startTime: "11:00",
    endTime: "17:00",
    location: "Central Park",
    truckSlugs: ["ramen-rider", "naan-stop", "smoke-signal-bbq", "pasta-la-vista"],
    isPast: true,
  },
  {
    slug: "new-year-nosh",
    name: "New Year Nosh",
    description: "Ring in the new year with the best street food in the city. A festive lineup of trucks and treats to start 2026 right.",
    date: "2026-01-03",
    startTime: "12:00",
    endTime: "20:00",
    location: "Downtown Plaza",
    truckSlugs: ["taco-libre", "burger-blitz", "sugar-rush", "kimchi-king", "catch-of-the-day"],
    isPast: true,
  },
  {
    slug: "bbq-showdown",
    name: "BBQ Showdown",
    description: "The ultimate barbecue battle. Multiple trucks compete for the title of best BBQ in the city, with live judging and audience voting.",
    date: "2026-06-20",
    startTime: "12:00",
    endTime: "20:00",
    location: "Riverside Market",
    truckSlugs: ["smoke-signal-bbq", "island-grill", "burger-blitz", "taco-libre"],
    isPast: false,
  },
];
