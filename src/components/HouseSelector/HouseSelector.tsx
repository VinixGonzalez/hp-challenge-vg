"use client";

import { ThemeContext } from "@/context/theme";
import { useContext } from "react";

const houses = ["gryffindor", "slytherin", "hufflepuff", "ravenclaw"] as const;

export const HouseSelector: React.FC = () => {
  const { setHouse, house } = useContext(ThemeContext);

  const mappedHouseStyles = {
    gryffindor: "bg-gryffindor text-white hover:bg-red-900",
    slytherin: "bg-slytherin text-white hover:bg-green-900",
    hufflepuff: "bg-hufflepuff text-black hover:bg-yellow-900 hover:text-white",
    ravenclaw: "bg-ravenclaw text-white hover:bg-gray-800",
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-8">
      {houses.map((h) => (
        <button
          key={h}
          onClick={() => setHouse(h)}
          className={`font-semibold w-48 px-4 py-2 flex items-center justify-center gap-2 rounded-lg ${
            mappedHouseStyles[h]
          } ${h === house && "glow"}`}
        >
          {h === house ? <span>✨</span> : <span>🔮</span>}
          {h.toUpperCase()}
          {h === house ? <span>✨</span> : <span>🔮</span>}
        </button>
      ))}
    </div>
  );
};
