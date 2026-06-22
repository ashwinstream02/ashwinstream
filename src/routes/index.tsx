import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { StickyBg } from "@/components/site/Sticky";
import heroImg from "@/assets/hero.jpg";
import theaterImg from "@/assets/theater.jpg";
import devicesImg from "@/assets/3.webp";
import familyImg from "@/assets/family.jpg";
import sportsImg from "@/assets/sports.jpg";
import musicImg from "@/assets/music.jpg";
import kidsImg from "@/assets/kids.jpg";
import remoteImg from "@/assets/remote.jpg";
import smartImg from "@/assets/smarthome.jpg";
import fiberImg from "@/assets/fiber.jpg";
import streamingGridImg from "@/assets/1.jpg";
import tvShowImg from "@/assets/2.webp";
// docs.jpg is a mountain landscape — use a cinematic documentary-style image instead
const docsImg = "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1920&q=80";
import {
  Play, Tv, Wifi, Sparkles, Zap, Shield, Globe2, Smartphone, Headphones,
  ArrowRight, Star, Phone,
} from "lucide-react";
import { TFN, TFN_HREF } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashwin Stream — A Cinematic Streaming Universe" },
      { name: "description", content: "Discover Ashwin Stream — premium streaming, smart entertainment and effortless connectivity for the modern home." },
      { property: "og:title", content: "Ashwin Stream — A Cinematic Streaming Universe" },
      { property: "og:description", content: "Discover Ashwin Stream — premium streaming, smart entertainment and effortless connectivity for the modern home." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const showcase = [
  { title: "Midnight Atlas", tag: "Cinematic Series", img: theaterImg },
  { title: "The Open Field", tag: "Live Sports", img: sportsImg },
  { title: "Skyline Sessions", tag: "Music Live", img: musicImg },
  { title: "Quiet Frequencies", tag: "Documentary", img: docsImg },
  { title: "Tiny Universe", tag: "Family", img: kidsImg },
  { title: "Live Tonight", tag: "Live TV", img: tvShowImg },
];

function Home() {
  return (
    <Layout>
      {/* HERO — Aurora Stage */}
      <section className="relative overflow-hidden bg-background" style={{ minHeight: "100svh" }}>

        {/* Aurora orbs */}
        <div className="pointer-events-none absolute -left-[20vw] -top-[10vh] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(circle,oklch(0.55_0.28_285/.55),transparent_65%)] blur-[120px]" />
        <div className="pointer-events-none absolute -right-[15vw] top-[15vh] h-[55vh] w-[55vw] rounded-full bg-[radial-gradient(circle,oklch(0.50_0.25_240/.45),transparent_65%)] blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.42_0.22_260/.35),transparent_65%)] blur-[90px]" />

        {/* Oversized watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-display font-bold uppercase leading-none text-white/[0.025]"
          style={{ fontSize: "clamp(8rem, 22vw, 22rem)", letterSpacing: "-0.04em" }}
        >
          ASHWIN STREAM
        </div>

        {/* Noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-col items-center justify-center px-5 pt-40 pb-10 text-center" style={{ minHeight: "calc(100svh - 200px)" }}>

          {/* Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric" />
              </span>
              48,000 titles · 4K HDR · Live now
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={80}>
            <h1 className="mx-auto mt-8 max-w-5xl font-display font-bold leading-[0.96] tracking-tight">
              <span className="block text-[clamp(3rem,8vw,6.5rem)] text-foreground">The universe of</span>
              <span className="block text-[clamp(3rem,8vw,6.5rem)] text-gradient">stories lives here.</span>
            </h1>
          </Reveal>

          {/* Sub */}
          <Reveal delay={170}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              One platform. Every screen. Ashwin Stream fuses cinematic on-demand content
              with smart home connectivity that just works.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={250}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {/* Primary — call TFN */}
              <a
                href={TFN_HREF}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-grad-primary px-8 py-4 text-sm font-semibold text-primary-foreground ring-glow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_-10px_oklch(0.70_0.22_270/.9)]"
              >
                <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(1_0_0/.25),transparent_60%)]" />
                <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
                  <Phone className="relative h-4 w-4" />
                </span>
                <span className="relative">{TFN}</span>
              </a>

              {/* Secondary — explore */}
              <Link
                to="/features"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-4 text-sm font-semibold backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10"
              >
                Explore plans <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          {/* Trust row */}
          <Reveal delay={340}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
              {[
                { Icon: Shield, text: "No credit card needed" },
                { Icon: Star, text: "4.9★ — 2M+ households" },
                { Icon: Zap, text: "Cancel anytime" },
              ].map(({ Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 text-electric" />
                  {text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Featured strip ── */}
        <div className="relative z-10 pb-6">
          {/* Section label */}
          <Reveal>
            <div className="container-x mb-5 flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Featured tonight</p>
              <Link to="/entertainment" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </Reveal>

          {/* Scrolling cards */}
          <div className="overflow-hidden">
            <div
              className="flex gap-4 px-5"
              style={{ width: "max-content", animation: "marquee 55s linear infinite" }}
            >
              {[...showcase, ...showcase].map((s, i) => (
                <div
                  key={i}
                  className="group relative h-[200px] w-[150px] shrink-0 cursor-pointer overflow-hidden rounded-2xl sm:h-[220px] sm:w-[165px]"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  {/* Hover play */}
                  <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-grad-primary ring-glow">
                      <Play className="ml-0.5 h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-electric">{s.tag}</p>
                    <p className="mt-0.5 font-display text-sm font-semibold leading-tight">{s.title}</p>
                    <div className="mt-1.5 flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Star className="h-2.5 w-2.5 fill-current text-electric" /> 4.{(i % 9) + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats bar */}
          <Reveal delay={200}>
            <div className="container-x mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { n: 48000, s: "+", l: "Titles on demand" },
                { n: 190, s: "+", l: "Countries served" },
                { n: 4, s: "K HDR", l: "Max resolution" },
                { n: 99, s: "%", l: "Streaming uptime" },
              ].map((x) => (
                <div key={x.l} className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-white/[0.14] hover:bg-white/[0.06]">
                  <p className="font-display text-2xl font-bold text-gradient md:text-3xl">
                    <Counter to={x.n} suffix={x.s} />
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{x.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STICKY CINEMA SECTION */}
      <StickyBg image={streamingGridImg} alt="Home theater experience">
        <div className="container-x grid gap-24 py-32 md:py-48">
          {[
            { kicker: "Cinema at home", h: "A theater you live in.", p: "Ashwin Stream wraps every room in cinematic atmosphere — Dolby-grade audio, 4K HDR visuals, and ambient lighting that reacts to what you watch." },
            { kicker: "For every device", h: "One library. Every screen.", p: "Pick up where you left off across TVs, phones, tablets and laptops. Your watchlist follows you, never the other way around." },
          ].map((b, i) => (
            <Reveal key={b.h}>
              <div className={`max-w-2xl ${i % 2 ? "md:ml-auto md:text-right" : ""}`}>
                <p className="text-xs uppercase tracking-[0.25em] text-electric">{b.kicker}</p>
                <h3 className="mt-3 font-display text-4xl font-bold md:text-6xl">{b.h}</h3>
                <p className="mt-4 text-muted-foreground md:text-lg">{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </StickyBg>

      {/* SHOWCASE CAROUSEL */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-electric">Featured this week</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Trending in your <span className="text-gradient">orbit</span>.</h2>
          </Reveal>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="flex gap-5 px-6 pb-4" style={{ width: "max-content", animation: "marquee 50s linear infinite" }}>
            {[...showcase, ...showcase].map((s, i) => (
              <div key={i} className="relative h-80 w-64 shrink-0 overflow-hidden rounded-2xl glass hover-lift">
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-electric">{s.tag}</p>
                  <p className="mt-1 font-display text-lg font-semibold">{s.title}</p>
                  <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3 fill-current text-electric" /> 4.{(i%9)+1} · 4K HDR
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT: MULTI-DEVICE */}
      <section className="section-y">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src={devicesImg} alt="Watch on every device" width={1600} height={1000} loading="lazy" className="rounded-3xl ring-glow" />
              <div className="absolute -bottom-6 -right-4 hidden glass-strong rounded-2xl p-4 md:block">
                <p className="text-xs text-muted-foreground">Devices active</p>
                <p className="font-display text-2xl font-bold"><Counter to={6} /> screens</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.25em] text-electric">Everywhere you are</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Carry your <span className="text-gradient">living room</span> in your pocket.</h2>
            <p className="mt-5 text-muted-foreground">Switch from the train to the sofa without missing a frame. Ashwin Stream syncs progress, captions and audio tracks across every device in real time.</p>
            <ul className="mt-6 grid gap-3">
              {([
                { Icon: Smartphone, t: "Mobile downloads for offline viewing" },
                { Icon: Tv, t: "Native TV apps with voice search" },
                { Icon: Headphones, t: "Lossless audio & spatial mixes" },
                { Icon: Globe2, t: "Available in 38 languages" },
              ]).map(({ Icon, t }) => (
                <li key={t} className="flex items-center gap-3 rounded-xl glass p-3">
                  <Icon className="h-5 w-5 text-electric" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* STICKY: FAMILY */}
      <StickyBg image={familyImg} alt="A family enjoying entertainment" minH="min-h-[120vh]">
        <div className="container-x py-40">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-electric">Family first</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">An entertainment space <span className="text-gradient">everyone calls home.</span></h2>
              <p className="mt-5 text-muted-foreground md:text-lg">Personal profiles, kid-safe zones, and shared watchlists that bring the household together — without compromise.</p>
            </div>
          </Reveal>
        </div>
      </StickyBg>

      {/* 20% CONNECTIVITY BLOCK */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <div className="grid items-center gap-10 rounded-[2rem] glass-strong p-8 md:grid-cols-[1fr_1.2fr] md:p-12">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={fiberImg} alt="Fiber connectivity" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-electric">Connectivity that powers it all</p>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Streaming is only as <span className="text-gradient">brilliant</span> as the pipe behind it.</h2>
                <p className="mt-4 text-muted-foreground">From ultra-stable home internet to whisper-quiet cable TV alternatives, Ashwin Stream pairs entertainment with infrastructure that simply works.</p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {([
                    { Icon: Wifi, t: "Mesh Wi-Fi" },
                    { Icon: Zap, t: "Multi-gig fiber" },
                    { Icon: Shield, t: "Secure by design" },
                  ]).map(({ Icon, t }) => (
                    <div key={t} className="rounded-xl glass p-3 text-center">
                      <Icon className="mx-auto h-5 w-5 text-electric" />
                      <p className="mt-2 text-xs">{t}</p>
                    </div>
                  ))}
                </div>
                <Link to="/connectivity" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-grad-primary px-5 py-3 text-sm font-semibold text-primary-foreground ring-glow">
                  Explore connectivity <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PLANS */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl font-bold md:text-5xl">A <span className="text-gradient">plan</span> for every household.</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">Premium entertainment, no compromises. Cancel any time.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { name: "Essential", badge: null, desc: "Perfect for individuals", features: ["HD streaming on 1 screen", "5 device library", "Mobile downloads", "Ad-light experience"] },
              { name: "Cinematic", badge: "Most popular", desc: "Ideal for couples & small families", features: ["4K HDR on 4 screens", "Spatial audio", "Kids offline profile", "Live sports add-on"], featured: true },
              { name: "Ultimate", badge: null, desc: "For the whole household", features: ["8K HDR · 6 screens", "Smart home bundle", "Multi-gig internet", "Priority support"] },
            ].map((p) => (
              <Reveal key={p.name}>
                <div className={`relative flex h-full flex-col rounded-3xl p-7 ${p.featured ? "bg-grad-primary ring-glow" : "glass"}`}>
                  {p.badge && (
                    <span className="absolute right-5 top-5 rounded-full bg-background/25 px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground">
                      {p.badge}
                    </span>
                  )}
                  <p className={`text-xs uppercase tracking-[0.25em] ${p.featured ? "text-primary-foreground/80" : "text-electric"}`}>{p.name}</p>
                  <p className={`mt-2 text-sm ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.desc}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map(f => (
                      <li key={f} className={`flex items-center gap-2.5 ${p.featured ? "text-primary-foreground" : "text-muted-foreground"}`}>
                        <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs ${p.featured ? "bg-background/25" : "bg-white/10"}`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={TFN_HREF} className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${p.featured ? "bg-background text-foreground" : "bg-grad-primary text-primary-foreground"}`}>
                    <Phone className="h-3.5 w-3.5" /> {TFN}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Loved by <span className="text-gradient">millions</span> of households.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { q: "Ashwin Stream finally made our smart TV feel smart. The interface is breathtaking.", n: "Amara K.", r: "Designer" },
              { q: "Switched our internet and TV plan in one go — never looking back.", n: "Daniel R.", r: "Architect" },
              { q: "The kids profiles are the best I've ever used. Truly thoughtful.", n: "Priya S.", r: "Parent" },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="h-full rounded-3xl glass p-7 hover-lift">
                  <div className="flex gap-1 text-electric">{Array.from({length:5}).map((_,j)=><Star key={j} className="h-4 w-4 fill-current" />)}</div>
                  <blockquote className="mt-4 text-base">"{t.q}"</blockquote>
                  <figcaption className="mt-6 text-sm">
                    <p className="font-semibold">{t.n}</p>
                    <p className="text-muted-foreground">{t.r}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SMART HOME BANNER */}
      <section className="relative overflow-hidden">
        <img src={smartImg} alt="Smart home dashboard" width={1600} height={1000} loading="lazy" className="h-[60vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 grid place-items-center md:place-items-start">
          <div className="container-x">
            <Reveal>
              <div className="max-w-xl py-10 text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.25em] text-electric">Smart home, smarter nights</p>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Your living room, <span className="text-gradient">conducted.</span></h2>
                <p className="mt-4 text-muted-foreground">Dim lights, hush notifications, queue the perfect soundtrack — all from one ambient interface.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-grad-primary p-10 text-center md:p-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(1_0_0/.2),transparent_60%)]" />
              <div className="relative">
                <h2 className="font-display text-4xl font-bold text-primary-foreground md:text-6xl">Start your first night on Ashwin Stream.</h2>
                <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">Seven days on us. No card. No commitments. Just the next story, waiting.</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a href={TFN_HREF} className="inline-flex items-center gap-2 rounded-2xl bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:scale-105 transition-transform">
                    <Phone className="h-4 w-4" /> {TFN}
                  </a>
                  <Link to="/features" className="rounded-2xl border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10">See what's inside</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
