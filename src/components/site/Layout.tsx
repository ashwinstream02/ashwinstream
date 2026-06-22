import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Phone } from "lucide-react";

export const TFN = "(833) 225-0885";
export const TFN_HREF = "tel:+18332250885";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />

      {/* Sticky call button */}
      <a
        href={TFN_HREF}
        aria-label={`Call us at ${TFN}`}
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 overflow-hidden rounded-full bg-grad-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground ring-glow shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-8px_oklch(0.70_0.22_270/.9)] md:bottom-8 md:right-8"
      >
        {/* Shimmer */}
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(1_0_0/.22),transparent_60%)]" />
        <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
          <Phone className="relative h-4 w-4" />
        </span>
        <span className="relative hidden sm:inline">{TFN}</span>
      </a>
    </div>
  );
}
