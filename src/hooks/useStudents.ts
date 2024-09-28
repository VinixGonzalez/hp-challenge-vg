import { useState, useEffect } from "react";
import { HarryPotterAPIService } from "@/services/harry-potter-api";
import { Character } from "@/types/character";

export function useStudents() {
  const [students, setStudents] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await HarryPotterAPIService.getAllStudents();
        setStudents(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load students.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return { students, loading, error };
}
