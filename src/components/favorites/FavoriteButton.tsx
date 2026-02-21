"use client";

import { useFavorites } from "@/hooks/useFavorites";

export default function FavoriteButton({
  type,
  id,
}: {
  type: "trucks" | "items";
  id: string;
}) {
  const { isFavorite, toggle } = useFavorites(type);
  const active = isFavorite(id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
      className={`p-1.5 rounded-full transition-all ${
        active
          ? "text-red-500 bg-red-50"
          : "text-stone-400 bg-white/80 hover:text-red-400"
      }`}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
