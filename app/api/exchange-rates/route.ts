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
      // Return mock data for development/testing
      // In production, this should return an error or cached data
      return NextResponse.json({
        date: {
          persian: "یکشنبه 12 دلو ۱۴۰۴",
          gregorian: "01 February 2026",
        },
        rates: [
          {
            id: "rate-1",
            currency: "افغانی",
            currencyCode: "AFN",
            flag: "🇦🇫",
            rate: 75.5,
            formattedRate: "75.50",
          },
          {
            id: "rate-2",
            currency: "دالر",
            currencyCode: "USD",
            flag: "🇺🇸",
            rate: 1.149,
            formattedRate: "1.1490",
          },
          {
            id: "rate-3",
            currency: "تومان",
            currencyCode: "IRR",
            flag: "🇮🇷",
            rate: 179000,
            formattedRate: "179,000",
          },
          {
            id: "rate-4",
            currency: "لیر ترکیه",
            currencyCode: "TRY",
            flag: "🇹🇷",
            rate: 50.8,
            formattedRate: "50.80",
          },
        ],
        lastUpdated: new Date().toISOString(),
      }, { headers });
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
