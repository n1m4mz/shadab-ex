/**
 * Currency Icons Utility
 * Maps currency codes to country flag emojis
 */

export function getCurrencyIcon(currencyCode: string): string {
  const flagMap: Record<string, string> = {
    // Major
    USD: "🇺🇸", // United States
    EUR: "🇪🇺", // European Union
    GBP: "🇬🇧", // United Kingdom
    JPY: "🇯🇵", // Japan
    CNY: "🇨🇳", // China
    CHF: "🇨🇭", // Switzerland
    SEK: "🇸🇪", // Sweden
    NOK: "🇳🇴", // Norway
    DKK: "🇩🇰", // Denmark

    // Middle East
    IRR: "🇮🇷", // Iran
    AED: "🇦🇪", // United Arab Emirates
    SAR: "🇸🇦", // Saudi Arabia
    QAR: "🇶🇦", // Qatar
    KWD: "🇰🇼", // Kuwait
    OMR: "🇴🇲", // Oman
    BHD: "🇧🇭", // Bahrain
    ILS: "🇮🇱", // Israel
    TRY: "🇹🇷", // Turkey

    // South & Central Asia
    AFN: "🇦🇫", // Afghanistan
    PKR: "🇵🇰", // Pakistan
    INR: "🇮🇳", // India
    BDT: "🇧🇩", // Bangladesh
    LKR: "🇱🇰", // Sri Lanka
    NPR: "🇳🇵", // Nepal

    // East & Southeast Asia
    KRW: "🇰🇷", // South Korea
    HKD: "🇭🇰", // Hong Kong
    SGD: "🇸🇬", // Singapore
    THB: "🇹🇭", // Thailand
    MYR: "🇲🇾", // Malaysia
    IDR: "🇮🇩", // Indonesia
    PHP: "🇵🇭", // Philippines
    VND: "🇻🇳", // Vietnam

    // Americas
    CAD: "🇨🇦", // Canada
    MXN: "🇲🇽", // Mexico
    BRL: "🇧🇷", // Brazil
    ARS: "🇦🇷", // Argentina
    CLP: "🇨🇱", // Chile
    COP: "🇨🇴", // Colombia
    PEN: "🇵🇪", // Peru

    // Europe (non-EUR)
    PLN: "🇵🇱", // Poland
    CZK: "🇨🇿", // Czech Republic
    HUF: "🇭🇺", // Hungary
    RON: "🇷🇴", // Romania
    BGN: "🇧🇬", // Bulgaria
    HRK: "🇭🇷", // Croatia
    RSD: "🇷🇸", // Serbia
    RUB: "🇷🇺", // Russia
    UAH: "🇺🇦", // Ukraine

    // Africa
    ZAR: "🇿🇦", // South Africa
    EGP: "🇪🇬", // Egypt
    NGN: "🇳🇬", // Nigeria
    KES: "🇰🇪", // Kenya
    GHS: "🇬🇭", // Ghana
    MAD: "🇲🇦", // Morocco
    TND: "🇹🇳", // Tunisia

    // Oceania
    AUD: "🇦🇺", // Australia
    NZD: "🇳🇿", // New Zealand
  };

  return flagMap[currencyCode.toUpperCase()] || "💱";
}


export function CurrencyIcon({ currencyCode }: { currencyCode: string }) {
  const icon = getCurrencyIcon(currencyCode);
  return <span className="text-5xl">{icon}</span>;
}
