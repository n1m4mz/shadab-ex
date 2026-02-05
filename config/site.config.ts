/**
 * Site Configuration
 * All business information and settings are centralized here for easy management
 */

export const siteConfig = {
  // Business Information
  business: {
    name: "صرافی شاداب",
    nameEn: "Shadab Exchange",
    location: "هامبورگ، آلمان",
    locationEn: "Hamburg, Germany",
    flag: "🇩🇪",
    tagline: "صرافی شاداب، پلی اعتماد میان شما و جهان",
    taglineEn: "Shadab Exchange, a bridge of trust between you and the world",
  },

  // Contact Information
  contact: {
    whatsapp: "+93 79 911 0081",
    whatsappLink: "https://wa.me/93799110081",
    telegram: "", // Will be set when Telegram channel is created
  },

  // Services
  services: [
    "تبدیل ارز",
    "ارسال حواله",
    "خدمات سریع و مطمئن",
  ],

  // Telegram Channel Configuration
  telegram: {
    channelUsername: "", // Will be set by user
    updateInterval: 5 * 60 * 1000, // 5 minutes in milliseconds
    apiEndpoint: "/api/telegram", // API route for fetching messages
  },

  // UI Configuration
  ui: {
    primaryColor: "#2563eb", // Blue
    accentColor: "#10b981", // Green
    theme: {
      light: {
        background: "#ffffff",
        foreground: "#171717",
        card: "#f9fafb",
        border: "#e5e7eb",
      },
      dark: {
        background: "#0a0a0a",
        foreground: "#ededed",
        card: "#1a1a1a",
        border: "#2a2a2a",
      },
    },
  },

  // SEO Configuration
  seo: {
    title: "صرافی شاداب - تبدیل ارز و ارسال حواله در هامبورگ",
    description: "صرافی شاداب در هامبورگ آلمان. تبدیل ارز و ارسال حواله سریع و مطمئن. نرخ‌های روزانه ارز.",
    keywords: ["صرافی", "تبدیل ارز", "حواله", "هامبورگ", "آلمان"],
  },
} as const;

export type SiteConfig = typeof siteConfig;
