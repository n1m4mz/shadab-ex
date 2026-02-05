/**
 * Footer Component
 * Site footer with contact information and tagline
 */

"use client";

import { siteConfig } from "@/config/site.config";
import { FadeIn } from "@/components/motion/fade-in";

export function Footer() {
  return (
    <FadeIn>
      <footer className="relative border-t border-gray-200/50 bg-gradient-to-b from-white via-gray-50/50 to-white dark:border-gray-800/50 dark:from-black dark:via-gray-950/50 dark:to-black">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="text-center">
            <p className="mb-8 text-xl font-semibold text-gray-900 dark:text-gray-100 sm:text-2xl">
              {siteConfig.business.tagline}
            </p>
            <div className="mb-12 flex flex-wrap justify-center gap-3 text-sm">
              {siteConfig.services.map((service, index) => (
                <span
                  key={index}
                  className="group flex items-center gap-2 rounded-full border border-gray-200/50 bg-white/80 px-4 py-2 font-medium text-gray-700 backdrop-blur-sm transition-all hover:border-blue-300/50 hover:bg-blue-50/50 hover:shadow-md dark:border-gray-800/50 dark:bg-gray-900/80 dark:text-gray-300 dark:hover:border-blue-700/50 dark:hover:bg-blue-950/30"
                >
                  <span className="text-green-500 transition-transform group-hover:scale-110">✅</span>
                  {service}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="text-xs text-gray-500 dark:text-gray-500">
                © {new Date().getFullYear()} {siteConfig.business.nameEn}. تمامی حقوق محفوظ است.
              </div>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-green-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 dark:from-green-600 dark:to-green-700"
              >
                <span>📲</span>
                <span>تماس با ما</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}
