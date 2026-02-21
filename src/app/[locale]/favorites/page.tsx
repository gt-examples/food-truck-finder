"use client";

import { useState } from "react";
import { T, Currency, Plural, Num } from "gt-next";
import { trucks } from "@/data/trucks";
import { menuItems } from "@/data/menus";
import { useFavorites } from "@/hooks/useFavorites";
import TruckCard from "@/components/trucks/TruckCard";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function FavoritesPage() {
  const [tab, setTab] = useState<"trucks" | "items">("trucks");
  const truckFavs = useFavorites("trucks");
  const itemFavs = useFavorites("items");

  const favTrucks = trucks.filter((t) => truckFavs.isFavorite(t.slug));
  const favItems = menuItems.filter((i) => itemFavs.isFavorite(i.id));

  const truckMap: Record<string, string> = {};
  trucks.forEach((t) => (truckMap[t.slug] = t.name));

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <T>
        <h1 className="font-[family-name:var(--font-nunito)] text-3xl md:text-4xl font-extrabold text-center mb-2">
          Favorites
        </h1>
        <p className="text-center text-[var(--color-muted)] mb-8">
          Your saved trucks and menu items
        </p>
      </T>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl border border-[var(--color-border)] overflow-hidden">
          <button
            onClick={() => setTab("trucks")}
            className={`px-6 py-2 text-sm font-medium transition-colors ${
              tab === "trucks" ? "bg-[var(--color-primary)] text-white" : "bg-white text-[var(--color-muted)]"
            }`}
          >
            <T>Trucks</T> ({favTrucks.length})
          </button>
          <button
            onClick={() => setTab("items")}
            className={`px-6 py-2 text-sm font-medium transition-colors ${
              tab === "items" ? "bg-[var(--color-primary)] text-white" : "bg-white text-[var(--color-muted)]"
            }`}
          >
            <T>Menu Items</T> ({favItems.length})
          </button>
        </div>
      </div>

      {tab === "trucks" ? (
        favTrucks.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-[var(--color-muted)]">
                <T>
                  <Plural
                    n={favTrucks.length}
                    singular={<><Num>{favTrucks.length}</Num> saved truck</>}
                    plural={<><Num>{favTrucks.length}</Num> saved trucks</>}
                  />
                </T>
              </div>
              <button
                onClick={() => {
                  if (confirm("Clear all favorite trucks?")) truckFavs.clear();
                }}
                className="text-xs text-red-500 hover:underline"
              >
                <T>Clear all</T>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favTrucks.map((truck) => (
                <TruckCard key={truck.slug} truck={truck} />
              ))}
            </div>
          </>
        ) : (
          <T>
            <div className="text-center py-16">
              <p className="text-5xl mb-4 opacity-30">&#9825;</p>
              <p className="text-lg text-[var(--color-muted)]">
                You haven&apos;t saved any trucks yet
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-1">
                Browse trucks and tap the heart to save your favorites
              </p>
            </div>
          </T>
        )
      ) : favItems.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-[var(--color-muted)]">
              <T>
                <Plural
                  n={favItems.length}
                  singular={<><Num>{favItems.length}</Num> saved item</>}
                  plural={<><Num>{favItems.length}</Num> saved items</>}
                />
              </T>
            </div>
            <button
              onClick={() => {
                if (confirm("Clear all favorite items?")) itemFavs.clear();
              }}
              className="text-xs text-red-500 hover:underline"
            >
              <T>Clear all</T>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[var(--color-border)] p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <T><span className="font-medium">{item.name}</span></T>
                    <Link
                      href={`/trucks/${item.truckSlug}`}
                      className="text-xs text-[var(--color-primary)] hover:underline block mt-1"
                    >
                      {truckMap[item.truckSlug]}
                    </Link>
                    <div className="flex gap-1.5 mt-2">
                      {item.dietary.map((d) => (
                        <Badge key={d} color="teal"><T>{d}</T></Badge>
                      ))}
                    </div>
                  </div>
                  <span className="font-semibold text-[var(--color-primary)]">
                    <Currency currency="USD">{item.price}</Currency>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <T>
          <div className="text-center py-16">
            <p className="text-5xl mb-4 opacity-30">&#9825;</p>
            <p className="text-lg text-[var(--color-muted)]">
              You haven&apos;t saved any menu items yet
            </p>
            <p className="text-sm text-[var(--color-muted)] mt-1">
              Browse menus and tap the heart to save your favorites
            </p>
          </div>
        </T>
      )}
    </div>
  );
}
