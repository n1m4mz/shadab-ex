/**
 * Exchange Rates List Component
 * Displays all exchange rates in a grid layout
 */

"use client";

import { ExchangeRate } from "@/lib/types/exchange-rates";
import { ExchangeRateCard } from "./exchange-rate-card";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";

interface ExchangeRatesListProps {
  rates: ExchangeRate[];
}

export function ExchangeRatesList({ rates }: ExchangeRatesListProps) {
  if (rates.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400">
        هیچ نرخی در دسترس نیست
      </div>
    );
  }

  return (
    <StaggerGroup>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rates.map((rate, index) => (
          <StaggerItem key={rate.id}>
            <ExchangeRateCard rate={rate} index={index} />
          </StaggerItem>
        ))}
      </div>
    </StaggerGroup>
  );
}
