"use client";

import Link from "next/link";
import { T, Num } from "gt-next";
import { Truck, cuisineLabels } from "@/data/trucks";
import StarRating from "@/components/ui/StarRating";
import Badge from "@/components/ui/Badge";
import { isTruckOpenNow } from "@/lib/utils";
import FavoriteButton from "@/components/favorites/FavoriteButton";

const cuisineColors: Record<string, string> = {
  mexican: "orange",
  korean: "red",
  bbq: "purple",
  vegan: "green",
  seafood: "blue",
  desserts: "pink",
  mediterranean: "teal",
  indian: "orange",
  american: "red",
  japanese: "purple",
  italian: "green",
  caribbean: "teal",
};

export default function TruckCard({ truck }: { truck: Truck }) {
  const isOpen = isTruckOpenNow(truck.slug);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 overflow-hidden border border-[var(--color-border)]">
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-50 flex items-center justify-center">
        <span className="text-6xl opacity-30 font-[family-name:var(--font-nunito)] font-extrabold text-[var(--color-primary)]">
          {truck.name.charAt(0)}
        </span>
        <div className="absolute top-3 left-3">
          <Badge color={cuisineColors[truck.cuisine] || "gray"}>
            <T>{cuisineLabels[truck.cuisine]}</T>
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          {isOpen ? (
            <Badge color="green"><T>Open Now</T></Badge>
          ) : (
            <Badge color="gray"><T>Closed</T></Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3">
          <FavoriteButton type="trucks" id={truck.slug} />
        </div>
      </div>
      <Link href={`/trucks/${truck.slug}`} className="block p-4">
        <T>
          <h3 className="font-[family-name:var(--font-nunito)] font-bold text-lg text-[var(--color-text)]">
            {truck.name}
          </h3>
        </T>
        <div className="flex items-center gap-2 mt-1">
          <StarRating rating={truck.rating} />
          <T>
            <span className="text-sm text-[var(--color-muted)]">
              <Num>{truck.rating}</Num> (<Num>{truck.reviewCount}</Num>)
            </span>
          </T>
        </div>
        <T>
          <p className="text-sm text-[var(--color-muted)] mt-2 line-clamp-2">
            {truck.description}
          </p>
        </T>
      </Link>
    </div>
  );
}
