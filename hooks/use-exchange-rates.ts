/**
 * Exchange Rates Hook
 * Custom hook for fetching and managing exchange rates data
 */

import useSWR from "swr";
import { ExchangeRatesData } from "@/lib/types/exchange-rates";
import { siteConfig } from "@/config/site.config";

const fetcher = async (url: string): Promise<ExchangeRatesData | null> => {
  // Add timestamp to prevent caching
  const timestamp = Date.now();
  const urlWithTimestamp = `${url}?t=${timestamp}`;
  
  const response = await fetch(urlWithTimestamp, {
    cache: "no-store", // Disable caching
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }
  return response.json();
};

export function useExchangeRates() {
  const { data, error, isLoading, mutate } = useSWR<ExchangeRatesData | null>(
    "/api/exchange-rates",
    fetcher,
    {
      refreshInterval: siteConfig.telegram.updateInterval,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 0, // Disable deduplication
      revalidateIfStale: true,
      keepPreviousData: false, // Don't keep old data when refreshing
    }
  );

  return {
    data,
    isLoading,
    isError: error,
    refresh: () => mutate(undefined, { revalidate: true }),
  };
}
