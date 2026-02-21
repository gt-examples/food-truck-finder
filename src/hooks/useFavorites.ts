"use client";

import { useState, useEffect, useCallback } from "react";

type FavoriteType = "trucks" | "items";

function getStorageKey(type: FavoriteType) {
  return `ftf-favorites-${type}`;
}

function loadFavorites(type: FavoriteType): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(getStorageKey(type));
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useFavorites(type: FavoriteType) {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(loadFavorites(type));
  }, [type]);

  const toggle = useCallback(
    (id: string) => {
      setFavorites((prev) => {
        const next = prev.includes(id)
          ? prev.filter((f) => f !== id)
          : [...prev, id];
        localStorage.setItem(getStorageKey(type), JSON.stringify(next));
        return next;
      });
    },
    [type]
  );

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  const clear = useCallback(() => {
    setFavorites([]);
    localStorage.removeItem(getStorageKey(type));
  }, [type]);

  return { favorites, toggle, isFavorite, clear };
}
