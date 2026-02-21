"use client";

import { useState, useMemo } from "react";
import { T, Plural, Num } from "gt-next";
import { trucks, CuisineType, cuisineLabels } from "@/data/trucks";
import TruckCard from "@/components/trucks/TruckCard";
import { isTruckOpenNow } from "@/lib/utils";

const cuisines: CuisineType[] = [
  "mexican", "korean", "bbq", "vegan", "seafood", "desserts",
  "mediterranean", "indian", "american", "japanese", "italian", "caribbean",
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState<CuisineType | "all">("all");
  const [openOnly, setOpenOnly] = useState(false);

  const filtered = useMemo(() => {
    return trucks.filter((truck) => {
      if (cuisine !== "all" && truck.cuisine !== cuisine) return false;
      if (openOnly && !isTruckOpenNow(truck.slug)) return false;
      if (
        search &&
        !truck.name.toLowerCase().includes(search.toLowerCase()) &&
        !truck.cuisine.toLowerCase().includes(search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [search, cuisine, openOnly]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <T>
        <div className="text-center mb-10">
          <h1 className="font-[family-name:var(--font-nunito)] text-4xl md:text-5xl font-extrabold text-[var(--color-text)]">
            Find Your Next Favorite Food Truck
          </h1>
          <p className="text-lg text-[var(--color-muted)] mt-3 max-w-2xl mx-auto">
            Browse local trucks, explore menus, and never miss a meal on wheels
          </p>
        </div>
      </T>

      {/* Search */}
      <div className="mb-6">
        <T>
          <input
            type="text"
            placeholder="Search trucks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto block px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
          />
        </T>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-4 justify-center">
        <button
          onClick={() => setCuisine("all")}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            cuisine === "all"
              ? "bg-[var(--color-primary)] text-white"
              : "bg-stone-100 text-[var(--color-muted)] hover:bg-stone-200"
          }`}
        >
          <T>All</T>
        </button>
        {cuisines.map((c) => (
          <button
            key={c}
            onClick={() => setCuisine(c)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              cuisine === c
                ? "bg-[var(--color-primary)] text-white"
                : "bg-stone-100 text-[var(--color-muted)] hover:bg-stone-200"
            }`}
          >
            <T>{cuisineLabels[c]}</T>
          </button>
        ))}
      </div>

      {/* Open Now toggle */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <div
            onClick={() => setOpenOnly(!openOnly)}
            className={`relative w-10 h-5 rounded-full transition-colors ${
              openOnly ? "bg-[var(--color-primary)]" : "bg-stone-300"
            }`}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                openOnly ? "translate-x-5" : ""
              }`}
            />
          </div>
          <span className="text-sm font-medium text-[var(--color-text)]">
            <T>Open Now</T>
          </span>
        </label>
      </div>

      {/* Result count */}
      <div className="mb-6 text-sm text-[var(--color-muted)]">
        <T>
          <Plural
            n={filtered.length}
            singular={<><Num>{filtered.length}</Num> truck found</>}
            plural={<><Num>{filtered.length}</Num> trucks found</>}
          />
        </T>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((truck) => (
            <TruckCard key={truck.slug} truck={truck} />
          ))}
        </div>
      ) : (
        <T>
          <div className="text-center py-16">
            <p className="text-lg text-[var(--color-muted)]">
              No trucks found matching your filters
            </p>
            <p className="text-sm text-[var(--color-muted)] mt-1">
              Try adjusting your search or filters
            </p>
          </div>
        </T>
      )}
    </div>
  );
}
