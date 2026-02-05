/**
 * Telegram Service
 * Handles fetching and parsing messages from Telegram channel
 */

import { ExchangeRatesData, ExchangeRate } from "@/lib/types/exchange-rates";
import { siteConfig } from "@/config/site.config";

/**
 * Parse Telegram message text and extract exchange rates
 * 
 * Simple format for Telegram message (one line per currency):
 * 
 * date: 1403/11/16
 * gregorian: 2025/02/05
 * 
 * USD: 45000
 * EUR: 48000 | Euro | 🇪🇺
 * GBP: 55000 | British Pound | 🇬🇧
 * TRY: 1500 | Turkish Lira | 🇹🇷
 * IRR: 450 | Iranian Rial | 🇮🇷
 * AFN: 600 | Afghan Afghani | 🇦🇫
 * CAD: 33000 | Canadian Dollar | 🇨🇦
 * AUD: 30000 | Australian Dollar | 🇦🇺
 * 
 * Format: CURRENCY_CODE: RATE | NAME | FLAG
 * - CURRENCY_CODE: Required (3 letters, e.g., USD)
 * - RATE: Required (number)
 * - NAME: Optional (will use currency code if not provided)
 * - FLAG: Optional (will use 💱 if not provided)
 */
export function parseTelegramMessage(messageText: string): ExchangeRatesData | null {
  try {
    const lines = messageText.split("\n").map((line) => line.trim()).filter(Boolean);

    // Extract date information
    let persianDate = "";
    let gregorianDate = "";

    // Extract exchange rates
    const rates: ExchangeRate[] = [];
    
    for (const line of lines) {
      // Skip empty lines
      if (!line) continue;

      // Check for date lines
      if (line.toLowerCase().startsWith("date:")) {
        persianDate = line.split(":").slice(1).join(":").trim();
        continue;
      }
      if (line.toLowerCase().startsWith("gregorian:")) {
        gregorianDate = line.split(":").slice(1).join(":").trim();
        continue;
      }

      // Parse currency line: CURRENCY_CODE: RATE | NAME | FLAG
      // Format: CODE: RATE or CODE: RATE | NAME | FLAG
      const parts = line.split("|").map(p => p.trim());
      const mainPart = parts[0];

      // Match pattern: CURRENCY_CODE: RATE
      const match = mainPart.match(/^([A-Z]{3})\s*:\s*([\d,\.\s]+)$/i);
      
      if (match) {
        const [, currencyCode, rateStr] = match;
        
        // Clean rate string: remove commas and spaces
        const cleanRateStr = rateStr.replace(/[, ]/g, "");
        const rate = parseFloat(cleanRateStr);

        if (!isNaN(rate) && rate > 0) {
          // Extract optional name and flag
          const name = parts[1] || currencyCode;
          const flag = parts[2] || "💱";

          rates.push({
            id: `rate-${rates.length + 1}`,
            currency: name,
            currencyCode: currencyCode.toUpperCase(),
            flag: flag.trim(),
            rate,
            formattedRate: formatRate(rate),
          });
        }
      }
    }

    if (rates.length === 0) {
      return null;
    }

    return {
      date: {
        persian: persianDate || new Date().toLocaleDateString("fa-IR"),
        gregorian: gregorianDate || new Date().toLocaleDateString("en-US"),
      },
      rates,
      lastUpdated: new Date().toISOString(),
      message: messageText,
    };
  } catch (error) {
    console.error("Error parsing Telegram message:", error);
    return null;
  }
}

/**
 * Format rate number with proper thousand separators
 */
function formatRate(rate: number): string {
  if (rate >= 1000) {
    return rate.toLocaleString("en-US", { maximumFractionDigits: 0 });
  }
  return rate.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 });
}

/**
 * Fetch latest message from Telegram channel using Bot API
 */
export async function fetchTelegramChannelMessage(): Promise<string | null> {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const channelId = process.env.TELEGRAM_CHANNEL_ID;

    // Option 1: Telegram Bot API
    if (botToken && channelId) {
      // Remove @ if present
      const cleanChannelId = channelId.replace("@", "");
      
      try {
        // Get updates to find the latest message
        const updatesUrl = `https://api.telegram.org/bot${botToken}/getUpdates`;
        const updatesResponse = await fetch(updatesUrl, {
          cache: "no-store", // Disable caching to always get fresh data
        });

        if (!updatesResponse.ok) {
          console.error("Telegram API error:", updatesResponse.statusText);
          return null;
        }

        const updatesData = await updatesResponse.json();
        
        if (!updatesData.ok || !updatesData.result || updatesData.result.length === 0) {
          return null;
        }

        // Find the latest message from the channel
        const messages = updatesData.result
          .map((update: any) => update.channel_post || update.message)
          .filter(Boolean)
          .filter((msg: any) => {
            if (msg.chat) {
              const chatUsername = msg.chat.username || msg.chat.id.toString();
              return chatUsername === cleanChannelId || chatUsername === channelId;
            }
            return false;
          });

        if (messages.length === 0) {
          return null;
        }

        // Get the latest message
        const latestMessage = messages[messages.length - 1];
        return latestMessage.text || latestMessage.caption || null;
      } catch (error) {
        console.error("Error fetching from Telegram Bot API:", error);
        return null;
      }
    }

    // Option 2: RSS Feed (if available)
    const rssUrl = process.env.TELEGRAM_RSS_URL;
    if (rssUrl) {
      try {
        const rssResponse = await fetch(rssUrl, {
          cache: "no-store", // Disable caching
        });
        if (rssResponse.ok) {
          const rssText = await rssResponse.text();
          // Parse RSS and extract latest message
          // This is a simplified version - you might need a proper RSS parser
          const itemMatch = rssText.match(/<item>[\s\S]*?<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>[\s\S]*?<\/item>/);
          if (itemMatch && itemMatch[1]) {
            return itemMatch[1].trim();
          }
        }
      } catch (error) {
        console.error("Error fetching from RSS feed:", error);
      }
    }

    // Option 3: Custom API endpoint
    const apiUrl = process.env.TELEGRAM_API_URL;
    if (apiUrl) {
      try {
        const apiResponse = await fetch(apiUrl, {
          cache: "no-store", // Disable caching
        });
        if (apiResponse.ok) {
          const data = await apiResponse.json();
          return data.message || data.text || null;
        }
      } catch (error) {
        console.error("Error fetching from custom API:", error);
      }
    }

    return null;
  } catch (error) {
    console.error("Error fetching Telegram message:", error);
    return null;
  }
}
