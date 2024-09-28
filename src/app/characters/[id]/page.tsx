"use client";

import { useCharacter } from "@/hooks/useCharacter";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import clsx from "clsx";
import { toast } from "react-toastify";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { CgSpinner } from "react-icons/cg";

const CharacterDetailPage = () => {
  const params = useParams();
  const id = params.id as string;
  const { character, loading, error } = useCharacter(id);

  const [isFavorite, setIsFavorite] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      if (favorites.includes(id)) {
        setIsFavorite(true);
      }
    }
  }, [id]);

  const handleFavorite = () => {
    if (typeof window !== "undefined") {
      let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      if (favorites.includes(id)) {
        favorites = favorites.filter((favId: string) => favId !== id);
        setIsFavorite(false);
        setAnimate(false);
        toast.success("Removed from favorites!");
      } else {
        favorites.push(id);
        setIsFavorite(true);
        setAnimate(true);
        toast.success("Added to favorites!");
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  if (loading)
    return (
      <div className="flex gap-8 h-full items-center justify-center">
        <p>Loading...</p>
        <CgSpinner size={32} className="animate-spin" />
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  if (!character) return <div>Character not found.</div>;

  return (
    <main className="bg-bkg flex flex-col items-center justify-start p-4 sm:px-8 flex-1">
      <div className="p-8 mx-auto max-w-3xl flex flex-col items-center justify-start sm:justify-center rounded-lg gap-12 bg-white mt-8 bg-bkg">
        <div className="justify-start self-start">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Characters", href: "/characters" },
              { label: `Detail: ${character.name}` },
            ]}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-4xl font-bold font-hp text-bkg">
            {character.name}
          </h1>
          <button
            onClick={handleFavorite}
            className={clsx(
              "focus:outline-none",
              animate && "animate-heartbeat"
            )}
            aria-label={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
          >
            {isFavorite ? (
              <MdFavorite title="unfavorite" className="text-bkg" size={36} />
            ) : (
              <MdFavoriteBorder
                title="favorite"
                className="text-bkg"
                size={36}
              />
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            {character.image && (
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={400}
                className="rounded shadow-lg"
              />
            )}
          </div>
          <div className="md:w-2/3 md:pl-8 mt-4 capitalize">
            <p>
              <strong>Info</strong>
            </p>
            <p>
              <strong>House:</strong> {character.house || "Unknown"}
            </p>
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>Actor:</strong> {character.actor || "Unknown"}
            </p>
            <p>
              <strong>Date of Birth:</strong>{" "}
              {character.dateOfBirth || "Unknown"}
            </p>
            <p>
              <strong>Ancestry:</strong> {character.ancestry || "Unknown"}
            </p>
            <p>
              <strong>Patronus:</strong> {character.patronus || "Unknown"}
            </p>

            <br />
            {character.wand.wood && (
              <p>
                <strong>Wand</strong>
                <br />
                <strong>Wood:</strong> {character.wand.wood}
                <br />
              </p>
            )}
            {character.wand.core && (
              <>
                <strong>Core:</strong> {character.wand.core}
                <br />
              </>
            )}
            {character.wand.length && (
              <>
                <strong>Length:</strong> {character.wand.length} inches
                <br />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharacterDetailPage;
