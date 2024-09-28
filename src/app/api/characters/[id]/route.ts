// app/api/characters/[id]/route.ts

import { Character } from "@/types/character";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Error while trying to get character" },
        { status: res.status }
      );
    }

    const characterArray = await res.json();

    const character: Character = characterArray;

    return NextResponse.json(character);
  } catch (error) {
    console.error(`Error /api/characters/${id}:`, error);
    return NextResponse.json(
      { error: "Error while getting character" },
      { status: 500 }
    );
  }
}
