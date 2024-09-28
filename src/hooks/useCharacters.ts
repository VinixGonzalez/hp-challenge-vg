import { HarryPotterAPIService } from "@/services/harry-potter-api";
import { Character } from "@/types/character";
import { useState, useEffect } from "react";

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await HarryPotterAPIService.getAllCharacters();
        setCharacters(data);
      } catch (error) {
        console.log(error);
        setError("Error while trying to get all characters.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, loading, error };
}
