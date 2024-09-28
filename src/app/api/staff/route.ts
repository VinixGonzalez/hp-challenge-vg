import { NextResponse } from "next/server";
import { Character } from "@/types/character";

export async function GET() {
  try {
    const res = await fetch("https://hp-api.onrender.com/api/characters/staff");

    if (!res.ok) {
      throw new Error("Failed to fetch staff members");
    }

    const staff: Character[] = await res.json();

    return NextResponse.json(staff);
  } catch (error) {
    console.error("Error fetching staff:", error);
    return NextResponse.json(
      { error: "Failed to fetch staff members" },
      { status: 500 }
    );
  }
}
