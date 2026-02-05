/**
 * Testimonials Section Component
 * Customer testimonials and reviews
 */

"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "احمد محمدی",
    role: "کارآفرین",
    content: "خدمات عالی و سریع! نرخ‌های به‌روز و خدمات حرفه‌ای. حواله من در کمتر از 24 ساعت انجام شد.",
    rating: 5,
  },
  {
    name: "فاطمه احمدی",
    role: "دانشجو",
    content: "بهترین صرافی که تا حالا کار کردم. پشتیبانی عالی و نرخ‌های رقابتی. حتماً دوباره استفاده می‌کنم.",
    rating: 5,
  },
  {
    name: "علی رضایی",
    role: "تاجر",
    content: "برای کسب و کارم نیاز به تبدیل ارز دارم و این صرافی همیشه بهترین نرخ‌ها رو ارائه می‌ده. بسیار راضی هستم.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative border-t border-gray-200/50 bg-gradient-to-b from-gray-50/50 to-white py-16 dark:border-gray-800/50 dark:from-gray-950/50 dark:to-black sm:py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                نظرات مشتریان
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              تجربه مشتریان راضی از خدمات ما
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <Card variant="elevated" className="group h-full border border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-blue-300/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800/50 dark:bg-gray-900/80 dark:hover:border-blue-700/50">
                <CardContent>
                  <div className="mb-6 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <div className="mb-6">
                    <svg
                      className="mb-4 h-8 w-8 text-blue-500 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                    </svg>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-gray-200/50 pt-6 dark:border-gray-800/50">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
