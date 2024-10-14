import { create } from "zustand";
import { persistNSync } from "persist-and-sync";
import { HouseType } from "@/context/types";

type ThemeState = {
  house: HouseType;
  setHouse: (house: HouseType) => void;
};

export const useThemeStore = create<ThemeState>()(
  persistNSync(
    (set) => ({
      house: "gryffindor",
      setHouse: (newHouse: HouseType) => {
        set({ house: newHouse });
        document.documentElement.setAttribute("data-theme", newHouse);
      },
    }),
    { name: "preferred-house" }
  )
);
