"use client";
/**
 * Currency Flags Utility
 * Maps currency codes to country codes and provides flag image URLs
 */

// Map currency codes to ISO 3166-1 alpha-2 country codes
const currencyToCountryMap: Record<string, string> = {
  USD: "us", // United States
  EUR: "eu", // European Union
  GBP: "gb", // United Kingdom
  TRY: "tr", // Turkey
  IRR: "ir", // Iran
  AFN: "af", // Afghanistan
  CAD: "ca", // Canada
  AUD: "au", // Australia
};

/**
 * Get country code from currency code
 */
export function getCountryCode(currencyCode: string): string {
  return currencyToCountryMap[currencyCode.toUpperCase()] || "xx";
}

/**
 * Get flag image URL from currency code
 * Uses flagcdn.com CDN for reliable flag images
 */
export function getFlagImageUrl(currencyCode: string, size: "w20" | "w40" | "w80" | "w160" = "w80"): string {
  const countryCode = getCountryCode(currencyCode);
  return `https://flagcdn.com/${size}/${countryCode}.png`;
}

/**
 * Currency Flag Component
 * Displays country flag as an image instead of emoji
 */


import { useState } from "react";

export function CurrencyFlag({ 
  currencyCode, 
  size = "w80",
  className = "" 
}: { 
  currencyCode: string; 
  size?: "w20" | "w40" | "w80" | "w160";
  className?: string;
}) {
  const flagUrl = getFlagImageUrl(currencyCode, size);
  const [imageError, setImageError] = useState(false);
  
  // Map size to width classes
  const widthMap: Record<string, string> = {
    w20: "w-5 h-4",
    w40: "w-10 h-8",
    w80: "w-20 h-16",
    w160: "w-40 h-32",
  };

  if (imageError) {
    return (
      <div className={`${widthMap[size]} flex items-center justify-center rounded bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 ${className} shadow-md`}>
        <span className="text-2xl">💱</span>
      </div>
    );
  }

  return (
    <div className={`${widthMap[size]} relative overflow-hidden rounded shadow-md ${className}`}>
      <img
        src={flagUrl}
        alt={`${currencyCode} flag`}
        className="h-full w-full object-cover"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
