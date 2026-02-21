export type MenuCategory = "mains" | "sides" | "drinks" | "desserts" | "specials";
export type DietaryTag = "vegetarian" | "vegan" | "gluten-free";

export interface MenuItem {
  id: string;
  truckSlug: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  dietary: DietaryTag[];
  spicyLevel?: number;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Kimchi King
  { id: "kk-bibimbap", truckSlug: "kimchi-king", name: "Classic Bibimbap", description: "Rice bowl with seasoned vegetables, gochujang, and a fried egg", price: 12.5, category: "mains", dietary: [], spicyLevel: 1, popular: true },
  { id: "kk-bulgogi", truckSlug: "kimchi-king", name: "Bulgogi Beef Bowl", description: "Marinated grilled beef with rice and pickled radish", price: 14.0, category: "mains", dietary: [], spicyLevel: 0 },
  { id: "kk-tteokbokki", truckSlug: "kimchi-king", name: "Tteokbokki", description: "Spicy rice cakes in gochujang sauce", price: 8.0, category: "sides", dietary: ["vegan"], spicyLevel: 2 },
  { id: "kk-kimchi-fries", truckSlug: "kimchi-king", name: "Kimchi Fries", description: "Crispy fries topped with kimchi, cheese, and spicy mayo", price: 9.0, category: "sides", dietary: ["vegetarian"], spicyLevel: 1 },
  { id: "kk-japchae", truckSlug: "kimchi-king", name: "Japchae", description: "Sweet potato glass noodles with vegetables", price: 10.0, category: "mains", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },
  { id: "kk-mango-soju", truckSlug: "kimchi-king", name: "Mango Soju Slush", description: "Frozen mango slush with a hint of citrus", price: 5.0, category: "drinks", dietary: ["vegan"], spicyLevel: 0 },

  // Taco Libre
  { id: "tl-pastor", truckSlug: "taco-libre", name: "Al Pastor Tacos", description: "Spit-roasted pork with pineapple, onion, and cilantro", price: 4.5, category: "mains", dietary: ["gluten-free"], spicyLevel: 1, popular: true },
  { id: "tl-carnitas", truckSlug: "taco-libre", name: "Carnitas Tacos", description: "Slow-braised pork shoulder with salsa verde", price: 4.5, category: "mains", dietary: ["gluten-free"], spicyLevel: 0 },
  { id: "tl-veggie", truckSlug: "taco-libre", name: "Veggie Tacos", description: "Grilled peppers, mushrooms, and black beans with avocado crema", price: 4.0, category: "mains", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },
  { id: "tl-elote", truckSlug: "taco-libre", name: "Elote", description: "Grilled street corn with mayo, cotija, and chili powder", price: 5.0, category: "sides", dietary: ["vegetarian", "gluten-free"], spicyLevel: 1 },
  { id: "tl-churros", truckSlug: "taco-libre", name: "Churros", description: "Cinnamon sugar churros with chocolate dipping sauce", price: 6.0, category: "desserts", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "tl-horchata", truckSlug: "taco-libre", name: "Horchata", description: "Creamy cinnamon rice drink", price: 4.0, category: "drinks", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },
  { id: "tl-burrito", truckSlug: "taco-libre", name: "Super Burrito", description: "Massive flour tortilla stuffed with rice, beans, meat, and all the fixings", price: 11.0, category: "mains", dietary: [], spicyLevel: 1 },

  // Smoke Signal BBQ
  { id: "ss-brisket", truckSlug: "smoke-signal-bbq", name: "Brisket Platter", description: "14-hour smoked brisket with two sides", price: 16.0, category: "mains", dietary: ["gluten-free"], spicyLevel: 0, popular: true },
  { id: "ss-ribs", truckSlug: "smoke-signal-bbq", name: "Half Rack Ribs", description: "Fall-off-the-bone pork ribs with house BBQ glaze", price: 18.0, category: "mains", dietary: ["gluten-free"], spicyLevel: 0 },
  { id: "ss-pulled-pork", truckSlug: "smoke-signal-bbq", name: "Pulled Pork Sandwich", description: "Hickory-smoked pulled pork on a brioche bun with slaw", price: 12.0, category: "mains", dietary: [], spicyLevel: 0 },
  { id: "ss-mac", truckSlug: "smoke-signal-bbq", name: "Smoked Mac & Cheese", description: "Three-cheese mac finished in the smoker", price: 6.0, category: "sides", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "ss-cornbread", truckSlug: "smoke-signal-bbq", name: "Jalapeño Cornbread", description: "Sweet cornbread with jalapeño and honey butter", price: 4.0, category: "sides", dietary: ["vegetarian"], spicyLevel: 1 },
  { id: "ss-beans", truckSlug: "smoke-signal-bbq", name: "Baked Beans", description: "Slow-cooked beans with smoked brisket ends", price: 5.0, category: "sides", dietary: ["gluten-free"], spicyLevel: 0 },
  { id: "ss-lemonade", truckSlug: "smoke-signal-bbq", name: "Sweet Tea Lemonade", description: "Half sweet tea, half lemonade, all refreshing", price: 4.0, category: "drinks", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },

  // The Green Machine
  { id: "gm-buddha", truckSlug: "the-green-machine", name: "Buddha Bowl", description: "Quinoa, roasted sweet potato, avocado, kale, and tahini dressing", price: 13.0, category: "mains", dietary: ["vegan", "gluten-free"], spicyLevel: 0, popular: true },
  { id: "gm-burger", truckSlug: "the-green-machine", name: "Beyond Smash Burger", description: "Plant-based patty with vegan cheese, pickles, and special sauce", price: 12.0, category: "mains", dietary: ["vegan"], spicyLevel: 0 },
  { id: "gm-tacos", truckSlug: "the-green-machine", name: "Jackfruit Tacos", description: "Pulled jackfruit with mango slaw and chipotle crema", price: 10.0, category: "mains", dietary: ["vegan", "gluten-free"], spicyLevel: 1 },
  { id: "gm-nuggets", truckSlug: "the-green-machine", name: "Cauliflower Nuggets", description: "Crispy battered cauliflower with ranch dip", price: 7.0, category: "sides", dietary: ["vegan"], spicyLevel: 0 },
  { id: "gm-smoothie", truckSlug: "the-green-machine", name: "Green Power Smoothie", description: "Spinach, banana, mango, and almond milk", price: 6.0, category: "drinks", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },
  { id: "gm-brownie", truckSlug: "the-green-machine", name: "Avocado Brownie", description: "Fudgy chocolate brownie made with avocado", price: 5.0, category: "desserts", dietary: ["vegan"], spicyLevel: 0 },

  // Catch of the Day
  { id: "cd-fish-chips", truckSlug: "catch-of-the-day", name: "Fish & Chips", description: "Beer-battered cod with hand-cut fries and tartar sauce", price: 11.0, category: "mains", dietary: [], spicyLevel: 0, popular: true },
  { id: "cd-lobster-roll", truckSlug: "catch-of-the-day", name: "Lobster Roll", description: "Buttery lobster on a toasted split-top bun", price: 19.0, category: "mains", dietary: [], spicyLevel: 0 },
  { id: "cd-shrimp-po", truckSlug: "catch-of-the-day", name: "Shrimp Po Boy", description: "Crispy fried shrimp with remoulade on French bread", price: 12.0, category: "mains", dietary: [], spicyLevel: 0 },
  { id: "cd-poke", truckSlug: "catch-of-the-day", name: "Ahi Poke Bowl", description: "Fresh ahi tuna with rice, edamame, and ponzu", price: 14.0, category: "mains", dietary: ["gluten-free"], spicyLevel: 0 },
  { id: "cd-clam-chowder", truckSlug: "catch-of-the-day", name: "Clam Chowder", description: "New England style in a sourdough bread bowl", price: 9.0, category: "sides", dietary: [], spicyLevel: 0 },
  { id: "cd-coleslaw", truckSlug: "catch-of-the-day", name: "Citrus Coleslaw", description: "Light and tangy with lime and cilantro", price: 4.0, category: "sides", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },

  // Sugar Rush
  { id: "sr-churro-sundae", truckSlug: "sugar-rush", name: "Churro Sundae", description: "Warm churros topped with vanilla ice cream and caramel", price: 8.5, category: "desserts", dietary: ["vegetarian"], spicyLevel: 0, popular: true },
  { id: "sr-waffle", truckSlug: "sugar-rush", name: "Belgian Waffle Stack", description: "Fluffy waffles with whipped cream, berries, and maple syrup", price: 9.0, category: "desserts", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "sr-shake", truckSlug: "sugar-rush", name: "Monster Milkshake", description: "Over-the-top milkshake loaded with cookies, candy, and whipped cream", price: 10.0, category: "drinks", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "sr-crepe", truckSlug: "sugar-rush", name: "Nutella Crepe", description: "Thin French crepe filled with Nutella and fresh strawberries", price: 7.0, category: "desserts", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "sr-donut", truckSlug: "sugar-rush", name: "Mini Donut Dozen", description: "Twelve freshly fried mini donuts with cinnamon sugar", price: 6.0, category: "desserts", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "sr-hot-choc", truckSlug: "sugar-rush", name: "Hot Chocolate Bomb", description: "Rich dark chocolate melted tableside with marshmallows", price: 5.5, category: "drinks", dietary: ["vegetarian", "gluten-free"], spicyLevel: 0 },

  // Naan Stop
  { id: "ns-butter-chicken", truckSlug: "naan-stop", name: "Butter Chicken Wrap", description: "Creamy tomato butter chicken in fresh garlic naan", price: 10.0, category: "mains", dietary: [], spicyLevel: 1, popular: true },
  { id: "ns-tikka", truckSlug: "naan-stop", name: "Chicken Tikka Plate", description: "Tandoori chicken tikka with basmati rice and raita", price: 12.0, category: "mains", dietary: ["gluten-free"], spicyLevel: 2 },
  { id: "ns-chana", truckSlug: "naan-stop", name: "Chana Masala Bowl", description: "Spiced chickpea curry with rice and pickled onion", price: 9.0, category: "mains", dietary: ["vegan", "gluten-free"], spicyLevel: 2 },
  { id: "ns-samosa", truckSlug: "naan-stop", name: "Samosa Duo", description: "Crispy pastries filled with spiced potato and peas", price: 5.0, category: "sides", dietary: ["vegan"], spicyLevel: 1 },
  { id: "ns-mango-lassi", truckSlug: "naan-stop", name: "Mango Lassi", description: "Sweet yogurt drink blended with ripe mango", price: 4.5, category: "drinks", dietary: ["vegetarian", "gluten-free"], spicyLevel: 0 },
  { id: "ns-gulab", truckSlug: "naan-stop", name: "Gulab Jamun", description: "Soft milk dumplings soaked in rose-cardamom syrup", price: 5.0, category: "desserts", dietary: ["vegetarian"], spicyLevel: 0 },

  // Gyro Heroes
  { id: "gh-lamb-gyro", truckSlug: "gyro-heroes", name: "Lamb Gyro", description: "Hand-carved lamb with tzatziki, tomato, and onion in warm pita", price: 11.5, category: "mains", dietary: [], spicyLevel: 0, popular: true },
  { id: "gh-chicken-shawarma", truckSlug: "gyro-heroes", name: "Chicken Shawarma", description: "Marinated chicken with garlic sauce and pickled turnip", price: 10.5, category: "mains", dietary: [], spicyLevel: 0 },
  { id: "gh-falafel", truckSlug: "gyro-heroes", name: "Falafel Wrap", description: "Crispy chickpea falafel with hummus and fresh vegetables", price: 9.0, category: "mains", dietary: ["vegan"], spicyLevel: 0 },
  { id: "gh-hummus", truckSlug: "gyro-heroes", name: "Hummus Plate", description: "Creamy hummus with warm pita, olives, and olive oil", price: 6.0, category: "sides", dietary: ["vegan"], spicyLevel: 0 },
  { id: "gh-baklava", truckSlug: "gyro-heroes", name: "Baklava", description: "Flaky phyllo pastry with pistachio and honey syrup", price: 4.5, category: "desserts", dietary: ["vegetarian"], spicyLevel: 0 },

  // Burger Blitz
  { id: "bb-smash", truckSlug: "burger-blitz", name: "Classic Smash Burger", description: "Double-smashed patties with American cheese, pickles, and secret sauce", price: 9.0, category: "mains", dietary: [], spicyLevel: 0, popular: true },
  { id: "bb-bacon", truckSlug: "burger-blitz", name: "Bacon BBQ Burger", description: "Smash patty with crispy bacon, cheddar, and smoky BBQ sauce", price: 11.0, category: "mains", dietary: [], spicyLevel: 0 },
  { id: "bb-mushroom", truckSlug: "burger-blitz", name: "Mushroom Swiss Burger", description: "Sauteed mushrooms and melted Swiss on a toasted brioche bun", price: 10.0, category: "mains", dietary: [], spicyLevel: 0 },
  { id: "bb-fries", truckSlug: "burger-blitz", name: "Loaded Cheese Fries", description: "Crispy fries smothered in cheese sauce and jalapeños", price: 7.0, category: "sides", dietary: ["vegetarian"], spicyLevel: 1 },
  { id: "bb-onion-rings", truckSlug: "burger-blitz", name: "Onion Rings", description: "Beer-battered thick-cut onion rings", price: 5.0, category: "sides", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "bb-shake", truckSlug: "burger-blitz", name: "Vanilla Malt Shake", description: "Old-fashioned vanilla malt milkshake", price: 6.0, category: "drinks", dietary: ["vegetarian"], spicyLevel: 0 },

  // Ramen Rider
  { id: "rr-tonkotsu", truckSlug: "ramen-rider", name: "Tonkotsu Ramen", description: "Rich pork bone broth with chashu, soft egg, and nori", price: 14.0, category: "mains", dietary: [], spicyLevel: 0, popular: true },
  { id: "rr-miso", truckSlug: "ramen-rider", name: "Spicy Miso Ramen", description: "Miso broth with ground pork, corn, and chili oil", price: 13.0, category: "mains", dietary: [], spicyLevel: 2 },
  { id: "rr-veggie-ramen", truckSlug: "ramen-rider", name: "Vegetable Shoyu Ramen", description: "Light soy broth with seasonal vegetables and tofu", price: 12.0, category: "mains", dietary: ["vegan"], spicyLevel: 0 },
  { id: "rr-gyoza", truckSlug: "ramen-rider", name: "Pan-Fried Gyoza", description: "Six pork and vegetable dumplings with ponzu dip", price: 7.0, category: "sides", dietary: [], spicyLevel: 0 },
  { id: "rr-edamame", truckSlug: "ramen-rider", name: "Spicy Garlic Edamame", description: "Steamed edamame tossed in garlic chili oil", price: 5.0, category: "sides", dietary: ["vegan", "gluten-free"], spicyLevel: 1 },
  { id: "rr-matcha", truckSlug: "ramen-rider", name: "Iced Matcha Latte", description: "Ceremonial grade matcha with oat milk", price: 5.5, category: "drinks", dietary: ["vegan"], spicyLevel: 0 },

  // Pasta La Vista
  { id: "pl-truffle-mac", truckSlug: "pasta-la-vista", name: "Truffle Mac & Cheese", description: "Four-cheese blend with black truffle oil and breadcrumbs", price: 12.0, category: "mains", dietary: ["vegetarian"], spicyLevel: 0, popular: true },
  { id: "pl-carbonara", truckSlug: "pasta-la-vista", name: "Classic Carbonara", description: "Spaghetti with pancetta, egg, pecorino, and black pepper", price: 13.0, category: "mains", dietary: [], spicyLevel: 0 },
  { id: "pl-arrabbiata", truckSlug: "pasta-la-vista", name: "Penne Arrabbiata", description: "Penne in spicy tomato sauce with garlic and chili flakes", price: 10.0, category: "mains", dietary: ["vegan"], spicyLevel: 2 },
  { id: "pl-garlic-bread", truckSlug: "pasta-la-vista", name: "Garlic Bread", description: "Toasted ciabatta with garlic butter and herbs", price: 5.0, category: "sides", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "pl-tiramisu", truckSlug: "pasta-la-vista", name: "Tiramisu Cup", description: "Espresso-soaked ladyfingers with mascarpone cream", price: 6.0, category: "desserts", dietary: ["vegetarian"], spicyLevel: 0 },
  { id: "pl-limonata", truckSlug: "pasta-la-vista", name: "Sparkling Limonata", description: "Italian lemon soda with fresh mint", price: 4.0, category: "drinks", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },

  // Island Grill
  { id: "ig-jerk-chicken", truckSlug: "island-grill", name: "Jerk Chicken Plate", description: "Smoky jerk-spiced chicken with rice and beans and fried plantains", price: 13.5, category: "mains", dietary: ["gluten-free"], spicyLevel: 2, popular: true },
  { id: "ig-oxtail", truckSlug: "island-grill", name: "Braised Oxtail", description: "Slow-braised oxtail in rich gravy with butter beans", price: 16.0, category: "mains", dietary: ["gluten-free"], spicyLevel: 1 },
  { id: "ig-fish-escovitch", truckSlug: "island-grill", name: "Escovitch Fish", description: "Fried snapper topped with spicy pickled vegetables", price: 14.0, category: "mains", dietary: ["gluten-free"], spicyLevel: 2 },
  { id: "ig-plantains", truckSlug: "island-grill", name: "Sweet Plantains", description: "Caramelized ripe plantains, golden and sweet", price: 4.0, category: "sides", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },
  { id: "ig-festival", truckSlug: "island-grill", name: "Festival Dumplings", description: "Sweet fried cornmeal dumplings", price: 4.0, category: "sides", dietary: ["vegan"], spicyLevel: 0 },
  { id: "ig-rum-punch", truckSlug: "island-grill", name: "Tropical Punch", description: "Mango, pineapple, and passionfruit juice blend", price: 5.0, category: "drinks", dietary: ["vegan", "gluten-free"], spicyLevel: 0 },
];
