"use client";

import { createContext, ReactNode, useEffect } from "react";
import { ThemeContextProps } from "./types";
import { useThemeStore } from "@/store/useThemeStore";

export const ThemeContext = createContext<ThemeContextProps>({
  house: "gryffindor",
  setHouse: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { house, setHouse } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", house);
  }, [house]);

  return (
    <ThemeContext.Provider value={{ house, setHouse }}>
      {children}
    </ThemeContext.Provider>
  );
};
