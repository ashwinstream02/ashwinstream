import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { StickyBg } from "@/components/site/Sticky";
import smartImg from "@/assets/smarthome.jpg";
import devicesImg from "@/assets/devices.jpg";
import remoteImg from "@/assets/remote.jpg";
import musicImg from "@/assets/music.jpg";
import { Sparkles, Tv, Smartphone, Wifi, Shield, Zap, Bell, Download, Mic, Settings2, Users, Globe2 } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Ashwin Stream" },
      { name: "description", content: "Personal profiles, 4K HDR streaming, spatial audio, multi-device sync, smart recommendations and more." },
      { property: "og:title", content: "Features — Ashwin Stream" },
      { property: "og:description", content: "Personal profiles, 4K HDR, spatial audio, multi-device sync and more." },
      { property: "og:url", content: "/features" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: FeaturesPage,
});

const items = [
  { icon: Sparkles, t: "Smart recommendations", d: "An engine that learns your mood, not just your clicks." },
  { icon: Tv, t: "4K HDR everywhere", d: "Cinematic visuals on any compatible screen." },
  { icon: Smartphone, t: "Pocket-ready", d: "Download in seconds, watch anywhere offline." },
  { icon: Mic, t: "Voice control", d: "Natural-language search across the entire library." },
  { icon: Users, t: "Family profiles", d: "Personal feeds, separate watchlists, safe zones." },
  { icon: Download, t: "Smart downloads", d: "Auto-saves next episodes before you ask." },
  { icon: Bell, t: "Tonight, on Ashwin Stream", d: "Daily premieres curated for your tastes." },
  { icon: Shield, t: "Private by default", d: "End-to-end encryption for accounts and history." },
  { icon: Settings2, t: "Pro controls", d: "Subtitles, audio mixes and playback fine-tuned." },
  { icon: Globe2, t: "38 languages", d: "Localized interface, subtitles and dubs." },
  { icon: Zap, t: "Instant resume", d: "0.6s average pickup across devices." },
  { icon: Wifi, t: "Bandwidth-aware", d: "Adapts in real time to your connection." },
];

function FeaturesPage() {
  return (
    <Layout>
      <PageHero
        kicker="Features"
        title={<>Every detail, <span className="text-gradient">considered.</span></>}
        description="A premium streaming experience is the sum of hundreds of small decisions. Here are the ones we obsessed over."
        image={smartImg}
      />

      <section className="section-y">
        <div className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f,i)=>(
            <Reveal key={f.t} delay={i*40}>
              <div className="group h-full rounded-3xl glass p-6 hover-lift">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-grad-primary ring-glow transition-transform group-hover:scale-110">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StickyBg image={musicImg} alt="Live concert lighting">
        <div className="container-x grid gap-32 py-32 md:py-40">
          {[
            { k: "Cinematic audio", h: "Sound that moves with the story.", p: "Spatial mixes, head-tracked audio and lossless options for every device that supports them." },
            { k: "Adaptive picture", h: "Pixel-perfect, every second.", p: "Dynamic HDR tone-mapping ensures every frame respects the artist's intent." },
            { k: "Living interface", h: "An interface that breathes.", p: "Subtle motion, ambient color, and a dark canvas that lets your content do the talking." },
          ].map((b,i)=>(
            <Reveal key={b.h}>
              <div className={`max-w-2xl ${i%2?"md:ml-auto md:text-right":""}`}>
                <p className="text-xs uppercase tracking-[0.25em] text-electric">{b.k}</p>
                <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">{b.h}</h2>
                <p className="mt-4 text-muted-foreground md:text-lg">{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </StickyBg>

      <section className="section-y">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <img src={devicesImg} alt="Multi-device" width={1600} height={1000} loading="lazy" className="rounded-3xl ring-glow" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Built to <span className="text-gradient">disappear</span>.</h2>
            <p className="mt-5 text-muted-foreground">The best technology is the one you stop noticing. Ashwin Stream is designed to dissolve into your evening, leaving only the story you came for.</p>
            <img src={remoteImg} alt="Remote in hand" width={1600} height={1000} loading="lazy" className="mt-6 rounded-2xl" />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
