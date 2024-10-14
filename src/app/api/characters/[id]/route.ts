// app/api/characters/[id]/route.ts

import { Character } from "@/types/character";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`, {
      next: {
        revalidate: 3600, // 1 hour cache
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Error while trying to get character" },
        { status: res.status }
      );
    }

    const characterArray = await res.json();

    const character: Character = characterArray;

    const response = NextResponse.json(character);
    response.headers.set("Cache-Control", "public, max-age=3600");

    return response;
  } catch (error) {
    console.error(`Error /api/characters/${id}:`, error);
    return NextResponse.json(
      { error: "Error while getting character" },
      { status: 500 }
    );
  }
}
