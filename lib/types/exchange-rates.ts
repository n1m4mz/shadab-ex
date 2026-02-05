/**
 * Exchange Rates Types
 * Type definitions for currency exchange rates data
 */

export interface ExchangeRate {
  id: string;
  currency: string;
  currencyCode: string;
  flag: string;
  rate: number;
  formattedRate: string;
}

export interface ExchangeRatesData {
  date: {
    persian: string;
    gregorian: string;
  };
  rates: ExchangeRate[];
  lastUpdated: string;
  message?: string;
}

export interface TelegramMessage {
  text: string;
  date: number;
}
