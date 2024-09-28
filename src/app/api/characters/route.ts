// app/api/characters/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    const characters = await res.json();

    return NextResponse.json(characters);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error while trying to get characters" },
      { status: 500 }
    );
  }
}
