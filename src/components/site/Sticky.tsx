import type { ReactNode } from "react";

/**
 * Sticky background section: a tall section with a fixed/parallax-style
 * background image that stays in view while overlay content scrolls.
 */
export function StickyBg({
  image,
  alt,
  children,
  minH = "min-h-[140vh]",
}: {
  image: string;
  alt: string;
  children: ReactNode;
  minH?: string;
}) {
  return (
    <section className={`relative ${minH} overflow-hidden`}>
      <div className="absolute inset-0">
        <div
          className="sticky top-0 h-screen w-full"
          style={{
            backgroundImage: `linear-gradient(to bottom, oklch(0.07 0.02 270 / .55), oklch(0.07 0.02 270 / .85)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-label={alt}
          role="img"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
