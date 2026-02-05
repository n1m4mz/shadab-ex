/**
 * Exchange Rates Section Component
 * Main section component for displaying exchange rates
 */

"use client";

import { useExchangeRates } from "@/hooks/use-exchange-rates";
import { ExchangeRatesList } from "./exchange-rates-list";
import { ExchangeRatesLoading } from "./exchange-rates-loading";
import { WhatsAppIcon } from "@/lib/utils/whatsapp-icon";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site.config";

export function ExchangeRatesSection() {
  const { data, isLoading, isError, refresh } = useExchangeRates();

  if (isLoading) {
    return (
      <FadeIn>
        <ExchangeRatesLoading />
      </FadeIn>
    );
  }

  if (isError || !data) {
    return (
      <FadeIn>
        <section className="relative py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <Card variant="outlined" className="border-red-200 dark:border-red-800">
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-5xl">⚠️</div>
                <h3 className="mb-2 text-lg font-semibold text-red-600 dark:text-red-400">
                  خطا در بارگذاری نرخ‌های ارز
                </h3>
                <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                  لطفاً دوباره تلاش کنید
                </p>
                <button
                  onClick={() => refresh()}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40 dark:from-blue-600 dark:to-blue-700"
                >
                  <span>🔄</span>
                  <span>تلاش مجدد</span>
                </button>
              </CardContent>
            </Card>
          </div>
        </section>
      </FadeIn>
    );
  }

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="space-y-12">
            {/* Date Information */}
            <SlideUp>
              <div className="mx-auto max-w-2xl">
                <Card variant="outlined" className="border-gray-200/50 bg-white/50 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/50">
                  <CardContent className="text-center">
                    <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                      📅 تاریخ امروز
                    </div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {data.date.persian}
                    </div>
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                      {data.date.gregorian}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SlideUp>

            {/* Exchange Rates */}
            <div>
              <ExchangeRatesList rates={data.rates} />
            </div>

            {/* CTA Section */}
            <SlideUp delay={0.3}>
              <div className="mx-auto max-w-2xl">
                <Card variant="elevated" className="border-2 border-green-200/50 bg-gradient-to-br from-green-50 to-emerald-50/50 dark:border-green-800/50 dark:from-green-950/30 dark:to-emerald-950/30">
                  <CardContent className="text-center">
                    <div className="mb-4 text-5xl">💬</div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
                      برای تبدیل ارز و حواله با ما تماس بگیرید
                    </h3>
                    <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                      خدمات سریع و مطمئن با بهترین نرخ‌ها
                    </p> 
                    <a
                      href={siteConfig.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-[0.98]"
                      aria-label="شروع گفتگو در واتساپ"
                    >
                      <WhatsAppIcon size={24} className="flex-shrink-0" />
                      <span>شروع گفتگو در واتساپ</span>
                      <span className="transition-transform group-hover:translate-x-1" aria-hidden>←</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </SlideUp>

            {/* Last Updated */}
            {data.lastUpdated && (
              <div className="text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-100/50 px-4 py-2 text-xs text-gray-500 dark:bg-gray-800/50 dark:text-gray-500">
                  <span>🔄</span>
                  <span>آخرین بروزرسانی: {new Date(data.lastUpdated).toLocaleTimeString("fa-IR")}</span>
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
