/**
 * Currency Icons Utility
 * Maps currency codes to country flag emojis
 */

export function getCurrencyIcon(currencyCode: string): string {
  const flagMap: Record<string, string> = {
    USD: "🇺🇸", // United States
    EUR: "🇪🇺", // European Union
    GBP: "🇬🇧", // United Kingdom
    TRY: "🇹🇷", // Turkey
    IRR: "🇮🇷", // Iran
    AFN: "🇦🇫", // Afghanistan
    CAD: "🇨🇦", // Canada
    AUD: "🇦🇺", // Australia
  };

  return flagMap[currencyCode] || "💱"; // Default currency icon
}

export function CurrencyIcon({ currencyCode }: { currencyCode: string }) {
  const icon = getCurrencyIcon(currencyCode);
  return <span className="text-5xl">{icon}</span>;
}
