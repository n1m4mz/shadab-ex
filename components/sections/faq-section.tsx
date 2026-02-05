/**
 * FAQ Section Component
 * Frequently Asked Questions section
 */

"use client";

import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { SlideUp } from "@/components/motion/slide-up";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "نرخ‌های ارز هر چند وقت یکبار به‌روز می‌شوند؟",
    answer: "نرخ‌های ارز به صورت روزانه و در زمان‌های مشخص به‌روزرسانی می‌شوند تا شما همیشه از آخرین نرخ‌ها مطلع باشید.",
  },
  {
    question: "آیا می‌توانم از طریق واتساپ سفارش بدهم؟",
    answer: "بله، شما می‌توانید از طریق واتساپ با ما تماس بگیرید و سفارش خود را ثبت کنید. ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهیم بود.",
  },
  {
    question: "خدمات شما شامل چه مواردی می‌شود؟",
    answer: "ما خدمات تبدیل ارز و ارسال حواله به سراسر جهان را با بهترین نرخ‌ها و بالاترین امنیت ارائه می‌دهیم.",
  },
  {
    question: "آیا خدمات شما امن است؟",
    answer: "بله، ما از استانداردهای امنیتی پیشرفته استفاده می‌کنیم و تمام تراکنش‌ها با بالاترین سطح امنیت انجام می‌شود.",
  },
  {
    question: "چطور می‌توانم از نرخ دقیق ارز مطلع شوم؟",
    answer: "شما می‌توانید از طریق همین صفحه نرخ‌های به‌روز ارز را مشاهده کنید و یا مستقیماً از طریق واتساپ با ما تماس بگیرید.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative border-t border-gray-200/50 bg-white py-16 dark:border-gray-800/50 dark:bg-black sm:py-24">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                سوالات متداول
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              پاسخ سوالات رایج شما
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <Card
                variant="outlined"
                className="border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all hover:border-blue-300/50 dark:border-gray-800/50 dark:bg-gray-900/80 dark:hover:border-blue-700/50"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-start"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
                        {faq.question}
                      </h3>
                      <span className="text-xl text-gray-500 transition-transform duration-200 dark:text-gray-400">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
