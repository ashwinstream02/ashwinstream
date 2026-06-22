import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  kicker,
  title,
  description,
  image,
  children,
}: {
  kicker: string;
  title: ReactNode;
  description: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <img
        src={image}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.05_0.02_270/.85),oklch(0.05_0.02_270))]" />
      <div className="container-x relative pt-44 pb-24 md:pt-52 md:pb-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-electric">{kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-[1.05] md:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
        </Reveal>
        {children && <Reveal delay={220}>{children}</Reveal>}
      </div>
    </section>
  );
}
