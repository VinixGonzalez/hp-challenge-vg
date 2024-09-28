"use client";

import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useCharacters } from "@/hooks/useCharacters";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgSpinner } from "react-icons/cg";

const CharacterDetailsPage = () => {
  const { characters, error, loading } = useCharacters();

  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <h2>Try Refresh the page!</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex gap-8 h-full items-center justify-center">
        <p>Loading...</p>
        <CgSpinner size={32} className="animate-spin" />
      </div>
    );
  }

  return (
    <main className="bg-bkg flex flex-col items-center justify-start p-4 sm:px-8 flex-1">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col gap-4 mb-12">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Characters" }]}
          />
          <h1 className="font-hp text-5xl text-center">Characters</h1>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {characters
              .filter((char) => char.image)
              .map((char) => (
                <li
                  key={char.id}
                  className="bg-white rounded shadow-lg transform transition duration-200 hover:scale-105"
                >
                  <Link
                    href={`/characters/${char.id}`}
                    className="flex flex-col items-center justify-center p-4 transition"
                  >
                    {char.image && (
                      <Image
                        src={char.image}
                        alt={char.name}
                        width={150}
                        height={200}
                        className="rounded mb-2"
                      />
                    )}
                    <h2 className="text-lg font-semibold">{char.name}</h2>
                    {char.house && (
                      <p className="text-sm text-gray-600">
                        House: {char.house}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default CharacterDetailsPage;
