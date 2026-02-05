/**
 * Exchange Rates Loading Component
 * Loading skeleton for exchange rates
 */

import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export function ExchangeRatesLoading() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {/* Date Card Skeleton */}
          <div className="mx-auto max-w-2xl">
            <Card variant="outlined" className="border-gray-200/50 bg-white/50 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/50">
              <div className="p-6 text-center">
                <Skeleton className="mb-2 h-4 w-24 mx-auto" />
                <Skeleton className="mb-2 h-7 w-48 mx-auto" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            </Card>
          </div>

          {/* Rates Grid Skeleton */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <Card key={i} variant="elevated" className="h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/80">
                <CardContent className="p-8 text-center">
                  <Skeleton className="mb-4 h-16 w-16 mx-auto rounded-full" />
                  <Skeleton className="mb-2 h-3 w-20 mx-auto" />
                  <Skeleton className="mb-3 h-10 w-32 mx-auto" />
                  <Skeleton className="h-6 w-24 mx-auto rounded-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
