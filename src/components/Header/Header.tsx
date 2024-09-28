import React from "react";
import { HouseSelector } from "@/components";

export const Header: React.FC = () => {
  return (
    <div className="bg-white shadow-2xl h-fit pt-16 pb-8 px-8">
      <div className="flex flex-col items-center justify-center gap-12">
        <h1 className="text-center font-hp text-5xl sm:text-8xl">
          Harry Potter
        </h1>
        <HouseSelector />
      </div>
    </div>
  );
};
