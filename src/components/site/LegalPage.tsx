import type { ReactNode } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Array<{ h: string; p: ReactNode }>;
}) {
  return (
    <Layout>
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.2_0.1_280/.4),transparent_70%)]" />
        <div className="container-x relative pt-40 pb-16 md:pt-48">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Legal</p>
            <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">{title}</h1>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
            <p className="mt-6 max-w-2xl text-muted-foreground">{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-10 md:grid-cols-[220px_1fr]">
          <aside className="hidden md:block">
            <nav className="sticky top-28 rounded-2xl glass p-4">
              <p className="px-2 text-xs uppercase tracking-widest text-muted-foreground">On this page</p>
              <ul className="mt-3 grid gap-1">
                {sections.map((s, i) => (
                  <li key={s.h}>
                    <a href={`#s${i}`} className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground">
                      {s.h}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <article className="grid gap-8">
            {sections.map((s, i) => (
              <Reveal key={s.h} delay={i*40}>
                <section id={`s${i}`} className="rounded-3xl glass p-6 md:p-8">
                  <h2 className="font-display text-2xl font-semibold">{s.h}</h2>
                  <div className="prose prose-invert mt-3 max-w-none text-sm leading-relaxed text-muted-foreground">
                    {s.p}
                  </div>
                </section>
              </Reveal>
            ))}
          </article>
        </div>
      </section>
    </Layout>
  );
}
