/**
 * Header Component
 * Site header with business information
 */

"use client";

import { siteConfig } from "@/config/site.config";
import { FadeIn } from "@/components/motion/fade-in";
import Image from "next/image";

export function Header() {
  return (
    <>
      <FadeIn>
        <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-xl dark:border-gray-800/50 dark:bg-black/80">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src="/logo.png"
                    alt={siteConfig.business.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {siteConfig.business.name}
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {siteConfig.business.location}
                  </p>
                </div>
              </div>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-green-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 dark:from-green-600 dark:to-green-700"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>📲</span>
                  <span className="hidden sm:inline">واتساپ</span>
                </span>
              </a>
            </div>
          </div>
        </header>
      </FadeIn>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
        <div className="container relative mx-auto px-4 py-8 sm:py-12">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-purple-400 dark:to-blue-400">
                  نرخ‌های ارز
                </span>
                <span className="text-gray-900 dark:text-gray-100"> به‌روز و دقیق</span>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                {siteConfig.business.tagline}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
