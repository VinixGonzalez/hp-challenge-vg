import { create } from "zustand";
import { persistNSync } from "persist-and-sync";

type FavoriteState = {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoriteStore = create<FavoriteState>()(
  persistNSync(
    (set, get) => ({
      favorites: [],
      addFavorite: (id: string) => {
        set((state) => ({
          favorites: [...state.favorites, id],
        }));
      },
      removeFavorite: (id: string) => {
        set((state) => ({
          favorites: state.favorites.filter((favId) => favId !== id),
        }));
      },
      isFavorite: (id: string) => get().favorites.includes(id),
    }),
    { name: "favorite-characters" }
  )
);
