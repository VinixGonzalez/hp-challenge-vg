import { NextResponse } from "next/server";
import { Character } from "@/types/character";

export async function GET() {
  try {
    const res = await fetch(
      "https://hp-api.onrender.com/api/characters/students"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch students");
    }

    const students: Character[] = await res.json();

    return NextResponse.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}
