"use client";
/**
 * Currency Flags Utility
 * Maps currency codes to country codes and provides flag image URLs
 */

// Map currency codes to ISO 3166-1 alpha-2 country codes
const currencyToCountryMap: Record<string, string> = {
  // Major
  USD: "us", // United States
  EUR: "eu", // European Union (generic)
  GBP: "gb", // United Kingdom
  JPY: "jp", // Japan
  CNY: "cn", // China
  CHF: "ch", // Switzerland
  SEK: "se", // Sweden
  NOK: "no", // Norway
  DKK: "dk", // Denmark

  // Middle East
  IRR: "ir", // Iran
  AED: "ae", // United Arab Emirates
  SAR: "sa", // Saudi Arabia
  QAR: "qa", // Qatar
  KWD: "kw", // Kuwait
  OMR: "om", // Oman
  BHD: "bh", // Bahrain
  ILS: "il", // Israel
  TRY: "tr", // Turkey

  // South & Central Asia
  AFN: "af", // Afghanistan
  PKR: "pk", // Pakistan
  INR: "in", // India
  BDT: "bd", // Bangladesh
  LKR: "lk", // Sri Lanka
  NPR: "np", // Nepal

  // East & Southeast Asia
  KRW: "kr", // South Korea
  HKD: "hk", // Hong Kong
  SGD: "sg", // Singapore
  THB: "th", // Thailand
  MYR: "my", // Malaysia
  IDR: "id", // Indonesia
  PHP: "ph", // Philippines
  VND: "vn", // Vietnam

  // Americas
  CAD: "ca", // Canada
  MXN: "mx", // Mexico
  BRL: "br", // Brazil
  ARS: "ar", // Argentina
  CLP: "cl", // Chile
  COP: "co", // Colombia
  PEN: "pe", // Peru

  // Europe (non-EUR)
  PLN: "pl", // Poland
  CZK: "cz", // Czech Republic
  HUF: "hu", // Hungary
  RON: "ro", // Romania
  BGN: "bg", // Bulgaria
  HRK: "hr", // Croatia
  RSD: "rs", // Serbia
  RUB: "ru", // Russia
  UAH: "ua", // Ukraine

  // Africa
  ZAR: "za", // South Africa
  EGP: "eg", // Egypt
  NGN: "ng", // Nigeria
  KES: "ke", // Kenya
  GHS: "gh", // Ghana
  MAD: "ma", // Morocco
  TND: "tn", // Tunisia

  // Oceania
  AUD: "au", // Australia
  NZD: "nz", // New Zealand
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
