"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { T, Currency, Num, Plural, Branch } from "gt-next";
import { menuItems, DietaryTag } from "@/data/menus";
import { trucks, CuisineType, cuisineLabels } from "@/data/trucks";
import Badge from "@/components/ui/Badge";
import FavoriteButton from "@/components/favorites/FavoriteButton";

const dietaryOptions: { key: DietaryTag; label: string }[] = [
  { key: "vegetarian", label: "Vegetarian" },
  { key: "vegan", label: "Vegan" },
  { key: "gluten-free", label: "Gluten-Free" },
];

const dietaryColors: Record<DietaryTag, string> = {
  vegetarian: "green",
  vegan: "teal",
  "gluten-free": "purple",
};

const cuisines: CuisineType[] = [
  "mexican", "korean", "bbq", "vegan", "seafood", "desserts",
  "mediterranean", "indian", "american", "japanese", "italian", "caribbean",
];

type SortOption = "name" | "price-asc" | "price-desc" | "truck";

export default function MenusPage() {
  const [search, setSearch] = useState("");
  const [dietaryFilters, setDietaryFilters] = useState<DietaryTag[]>([]);
  const [cuisineFilter, setCuisineFilter] = useState<CuisineType | "all">("all");
  const [sort, setSort] = useState<SortOption>("name");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 25]);

  const truckMap = useMemo(() => {
    const map: Record<string, { name: string; cuisine: CuisineType }> = {};
    trucks.forEach((t) => (map[t.slug] = { name: t.name, cuisine: t.cuisine }));
    return map;
  }, []);

  const filtered = useMemo(() => {
    let items = menuItems.filter((item) => {
      const truck = truckMap[item.truckSlug];
      if (!truck) return false;
      if (cuisineFilter !== "all" && truck.cuisine !== cuisineFilter) return false;
      if (dietaryFilters.length > 0 && !dietaryFilters.every((d) => item.dietary.includes(d))) return false;
      if (item.price < priceRange[0] || item.price > priceRange[1]) return false;
      if (search && !item.name.toLowerCase().includes(search.toLowerCase()) && !item.description.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });

    items.sort((a, b) => {
      switch (sort) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "truck": return (truckMap[a.truckSlug]?.name || "").localeCompare(truckMap[b.truckSlug]?.name || "");
        default: return a.name.localeCompare(b.name);
      }
    });

    return items;
  }, [search, dietaryFilters, cuisineFilter, sort, priceRange, truckMap]);

  const toggleDietary = (d: DietaryTag) => {
    setDietaryFilters((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <T>
        <h1 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-center mb-2">
          Menu Browser
        </h1>
        <p className="text-center text-[var(--color-muted)] mb-8">
          Browse all menu items across every truck
        </p>
      </T>

      {/* Search */}
      <div className="mb-6">
        <T>
          <input
            type="text"
            placeholder="Search menu items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
        </T>
      </div>

      {/* Cuisine filter */}
      <div className="flex flex-wrap items-center gap-2 mb-4 justify-center">
        <button
          onClick={() => setCuisineFilter("all")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            cuisineFilter === "all" ? "bg-[var(--color-primary)] text-white" : "bg-stone-100 text-[var(--color-muted)] hover:bg-stone-200"
          }`}
        >
          <T>All</T>
        </button>
        {cuisines.map((c) => (
          <button
            key={c}
            onClick={() => setCuisineFilter(c)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              cuisineFilter === c ? "bg-[var(--color-primary)] text-white" : "bg-stone-100 text-[var(--color-muted)] hover:bg-stone-200"
            }`}
          >
            <T>{cuisineLabels[c]}</T>
          </button>
        ))}
      </div>

      {/* Dietary & Sort */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          {dietaryOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => toggleDietary(opt.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors border ${
                dietaryFilters.includes(opt.key)
                  ? "bg-teal-500 text-white border-teal-500"
                  : "bg-white text-[var(--color-muted)] border-[var(--color-border)] hover:bg-stone-50"
              }`}
            >
              <T>{opt.label}</T>
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="px-3 py-1.5 rounded-xl border border-[var(--color-border)] text-sm bg-white"
        >
          <option value="name">A-Z</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="truck">By Truck</option>
        </select>
      </div>

      {/* Price range */}
      <div className="flex items-center gap-4 mb-8 justify-center">
        <T>
          <span className="text-sm text-[var(--color-muted)]">Price: </span>
        </T>
        <span className="text-sm font-medium"><Currency currency="USD">{priceRange[0]}</Currency></span>
        <input
          type="range"
          min="0"
          max="25"
          step="1"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="w-40 accent-[var(--color-primary)]"
        />
        <span className="text-sm font-medium"><Currency currency="USD">{priceRange[1]}</Currency></span>
      </div>

      {/* Result count */}
      <div className="mb-6 text-sm text-[var(--color-muted)]">
        <T>
          <Plural
            n={filtered.length}
            singular={<><Num>{filtered.length}</Num> item found</>}
            plural={<><Num>{filtered.length}</Num> items found</>}
          />
        </T>
      </div>

      {/* Items */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[var(--color-border)] p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <T><span className="font-medium">{item.name}</span></T>
                    {item.popular && <Badge color="orange"><T>Popular</T></Badge>}
                  </div>
                  <T>
                    <p className="text-sm text-[var(--color-muted)] mt-1">{item.description}</p>
                  </T>
                  <Link
                    href={`/trucks/${item.truckSlug}`}
                    className="text-xs text-[var(--color-primary)] hover:underline mt-2 inline-block"
                  >
                    {truckMap[item.truckSlug]?.name}
                  </Link>
                  <div className="flex gap-1.5 mt-2">
                    {item.dietary.map((d) => (
                      <Badge key={d} color={dietaryColors[d]}><T>{d === "gluten-free" ? "Gluten-Free" : d.charAt(0).toUpperCase() + d.slice(1)}</T></Badge>
                    ))}
                    {item.spicyLevel !== undefined && item.spicyLevel > 0 && (
                      <T>
                        <Badge color="red">
                          <Branch
                            branch={`level-${item.spicyLevel}`}
                            level-1={<>Medium</>}
                            level-2={<>Spicy</>}
                            level-3={<>Extra Spicy</>}
                          />
                        </Badge>
                      </T>
                    )}
                  </div>
                </div>
                <div className="ml-3 flex flex-col items-end gap-2">
                  <span className="font-semibold text-[var(--color-primary)]">
                    <Currency currency="USD">{item.price}</Currency>
                  </span>
                  <FavoriteButton type="items" id={item.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <T>
          <div className="text-center py-16">
            <p className="text-lg text-[var(--color-muted)]">No menu items found</p>
            <p className="text-sm text-[var(--color-muted)] mt-1">Try adjusting your filters</p>
          </div>
        </T>
      )}
    </div>
  );
}
