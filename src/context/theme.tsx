"use client";

import { createContext, useState, ReactNode, useEffect } from "react";
import { HouseType, ThemeContextProps } from "./types";

export const ThemeContext = createContext<ThemeContextProps>({
  house: "gryffindor",
  setHouse: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [house, setHouse] = useState<HouseType>("gryffindor");

  useEffect(() => {
    const savedHouse = localStorage.getItem("preferredHouse") as HouseType;
    if (savedHouse) {
      updateHouse(savedHouse);
    } else {
      updateHouse("gryffindor");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", house);
  }, [house]);

  const updateHouse = (newHouse: HouseType) => {
    setHouse(newHouse);
    localStorage.setItem("preferredHouse", newHouse);
  };

  return (
    <ThemeContext.Provider value={{ house, setHouse: updateHouse }}>
      {children}
    </ThemeContext.Provider>
  );
};
