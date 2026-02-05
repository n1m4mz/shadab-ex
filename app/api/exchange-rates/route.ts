/**
 * Exchange Rates API Route
 * Fetches and returns parsed exchange rates from Telegram channel
 */

import { NextResponse } from "next/server";
import { parseTelegramMessage, fetchTelegramChannelMessage } from "@/services/telegram.service";

export const dynamic = "force-dynamic";
export const revalidate = 0; // No caching - always fetch fresh data

export async function GET(request: Request) {
  // Get cache-busting parameter from URL
  const { searchParams } = new URL(request.url);
  const cacheBuster = searchParams.get("t");
  
  // Set headers to prevent caching
  const headers = new Headers();
  headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  headers.set("Pragma", "no-cache");
  headers.set("Expires", "0");
  headers.set("Surrogate-Control", "no-store");
  try {
    // Fetch message from Telegram channel
    const messageText = await fetchTelegramChannelMessage();

    if (!messageText) {
      return NextResponse.json(
        { error: "Failed to fetch exchange rates from Telegram" },
        { status: 503, headers }
      );
    }

    // Parse the message
    const parsedData = parseTelegramMessage(messageText);

    if (!parsedData) {
      return NextResponse.json(
        { error: "Failed to parse exchange rates data" },
        { 
          status: 500,
          headers,
        }
      );
    }

    return NextResponse.json(parsedData, { headers });
  } catch (error) {
    console.error("Error in exchange-rates API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { 
        status: 500,
        headers,
      }
    );
  }
}
