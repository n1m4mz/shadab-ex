/**
 * Exchange Rate Card Component
 * Displays individual exchange rate information
 */

"use client";

import { ExchangeRate } from "@/lib/types/exchange-rates";
import { Card, CardContent } from "@/components/ui/card";
import { SlideUp } from "@/components/motion/slide-up";
import { CurrencyFlag } from "@/lib/utils/currency-flags";

interface ExchangeRateCardProps {
  rate: ExchangeRate;
  index: number;
}

export function ExchangeRateCard({ rate, index }: ExchangeRateCardProps) {
  return (
    <SlideUp delay={index * 0.05}>
      <Card variant="elevated" className="group relative h-full overflow-hidden border border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-300/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800/50 dark:bg-gray-900/80 dark:hover:border-blue-700/50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-purple-50/0 transition-all duration-300 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:from-blue-950/0 dark:via-transparent dark:to-purple-950/0 dark:group-hover:from-blue-950/30 dark:group-hover:to-purple-950/30" />
        <CardContent className="relative flex flex-col items-center justify-center text-center">
          <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
            <CurrencyFlag currencyCode={rate.currencyCode} size="w80" className="shadow-md" />
          </div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {rate.currency}
          </div>
          <div className="mb-3 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 bg-clip-text text-4xl font-bold text-transparent dark:from-blue-400 dark:via-blue-500 dark:to-purple-400">
            {rate.formattedRate}
          </div>
          <div className="mt-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-1.5 text-xs font-semibold text-gray-700 dark:from-gray-800 dark:to-gray-900 dark:text-gray-300">
            {rate.currencyCode}
          </div>
        </CardContent>
      </Card>
    </SlideUp>
  );
}
