import { Character } from "@/types/character";

export const HarryPotterAPIService = {
  getAllCharacters: async () => {
    try {
      const response = await fetch("/api/characters");

      if (!response.ok) {
        throw new Error("Error while trying to get all characters");
      }

      const characters = await response.json();
      return characters;
    } catch (error) {
      console.error("Error while getting the characters:", error);
      throw error;
    }
  },

  getCharacterById: async (id: string) => {
    try {
      const response = await fetch(`/api/characters/${id}`);

      if (!response.ok) {
        throw new Error("Error while trying to get the character");
      }

      const character = await response.json();
      return character[0] as Character;
    } catch (error) {
      console.error("Erro while getting the character:", error);
      throw error;
    }
  },

  getAllStudents: async (): Promise<Character[]> => {
    try {
      const response = await fetch("/api/students");

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const students: Character[] = await response.json();
      return students;
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  },

  getAllStaff: async (): Promise<Character[]> => {
    try {
      const response = await fetch("/api/staff");

      if (!response.ok) {
        throw new Error("Failed to fetch staff members");
      }

      const staff: Character[] = await response.json();
      return staff;
    } catch (error) {
      console.error("Error fetching staff:", error);
      throw error;
    }
  },
};
