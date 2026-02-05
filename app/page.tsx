/**
 * Home Page
 * Main landing page with exchange rates
 */

import { ExchangeRatesSection } from "@/features/exchange-rates/components/exchange-rates-section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection } from "@/components/sections/faq-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom_right,var(--tw-gradient-stops))] from-white via-white to-gray-50 dark:from-black dark:via-black dark:to-gray-950" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent)]" />
      <Header />
      <main className="flex-1">
        <ExchangeRatesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
