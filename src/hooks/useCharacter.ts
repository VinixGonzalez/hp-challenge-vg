import { useState, useEffect } from "react";
import { HarryPotterAPIService } from "@/services/harry-potter-api";
import { Character } from "@/types/character";

export function useCharacter(id: string) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCharacter = async () => {
      try {
        const data = await HarryPotterAPIService.getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error(error);
        setError("Error while trying to get character.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  return { character, loading, error };
}
