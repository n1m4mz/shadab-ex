/**
 * Features Section Component
 * Displays business features and services
 */

"use client";

import { siteConfig } from "@/config/site.config";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "💱",
    title: "تبدیل ارز",
    description: "تبدیل سریع و مطمئن ارزهای مختلف با بهترین نرخ‌ها",
  },
  {
    icon: "📤",
    title: "ارسال حواله",
    description: "ارسال حواله به سراسر جهان با سرعت و امنیت بالا",
  },
  {
    icon: "⚡",
    title: "خدمات سریع",
    description: "پردازش سریع تراکنش‌ها و پاسخگویی فوری به مشتریان",
  },
  {
    icon: "🔒",
    title: "امنیت بالا",
    description: "استفاده از استانداردهای امنیتی پیشرفته برای محافظت از اطلاعات",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative border-t border-gray-200/50 bg-gradient-to-b from-white to-gray-50/50 py-16 dark:border-gray-800/50 dark:from-black dark:to-gray-950/50 sm:py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                خدمات ما
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              راهکارهای جامع برای نیازهای مالی شما
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <Card variant="elevated" className="group relative h-full overflow-hidden border border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-300/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800/50 dark:bg-gray-900/80 dark:hover:border-blue-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-purple-50/0 transition-all duration-300 group-hover:from-blue-50/50 group-hover:to-purple-50/50 dark:from-blue-950/0 dark:via-transparent dark:to-purple-950/0 dark:group-hover:from-blue-950/30 dark:group-hover:to-purple-950/30" />
                <CardContent className="relative text-center">
                  <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
