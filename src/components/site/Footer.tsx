import { Link } from "@tanstack/react-router";
import { Sparkles, Instagram, Twitter, Youtube, Facebook, Phone } from "lucide-react";
import { TFN, TFN_HREF } from "./Layout";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[oklch(0.06_0.02_270)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-[radial-gradient(ellipse_60%_100%_at_50%_100%,oklch(0.65_0.25_295/.35),transparent_70%)]"
      />
      <div className="container-x relative grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-grad-primary ring-glow">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold">Ashwin Stream<span className="text-electric">.</span></span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A next-generation entertainment ecosystem — cinematic streaming, smart living,
            and effortless connectivity for the modern home.
          </p>
          <a
            href={TFN_HREF}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-grad-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground ring-glow transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" /> {TFN}
          </a>
          <div className="mt-4 flex gap-3">
            {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-xl glass hover:ring-glow transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FCol title="Explore" links={[["/entertainment","Entertainment"],["/features","Features"],["/connectivity","Connectivity"],["/about","About"]]} />
        <FCol title="Support" links={[["/contact","Contact"],["/faq","FAQ"],["/legal","Legal"],["/privacy","Privacy"]]} />
        <FCol title="Company" links={[["/terms","Terms"],["/privacy","Privacy Policy"],["/legal","Legal Notice"],["/about","Our Story"]]} />
      </div>
      <div className="container-x flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Ashwin Stream Entertainment Collective. All rights reserved.</p>
        <p>Crafted for the next era of immersive viewing.</p>
      </div>
    </footer>
  );
}

function FCol({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
        {links.map(([to, label]) => (
          <li key={to + label}>
            <Link to={to} className="hover:text-foreground transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
