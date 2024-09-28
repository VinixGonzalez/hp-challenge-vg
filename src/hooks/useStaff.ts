import { useState, useEffect } from "react";
import { HarryPotterAPIService } from "@/services/harry-potter-api";
import { Character } from "@/types/character";

export function useStaff() {
  const [staff, setStaff] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const data = await HarryPotterAPIService.getAllStaff();
        setStaff(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load staff members.");
      } finally {
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  return { staff, loading, error };
}
