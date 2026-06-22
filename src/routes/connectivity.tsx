import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { StickyBg } from "@/components/site/Sticky";
import { Counter } from "@/components/site/Counter";
import fiberImg from "@/assets/fiber.jpg";
import routerImg from "@/assets/router.jpg";
import smartImg from "@/assets/smarthome.jpg";
import theaterImg from "@/assets/theater.jpg";
import { Wifi, Zap, Shield, Tv, Home, Router, Activity, Cable } from "lucide-react";

export const Route = createFileRoute("/connectivity")({
  head: () => ({
    meta: [
      { title: "Connectivity Solutions — Ashwin Stream" },
      { name: "description", content: "Ultra-stable home internet, mesh Wi-Fi, cable television support and smart home integration." },
      { property: "og:title", content: "Connectivity Solutions — Ashwin Stream" },
      { property: "og:description", content: "Internet, mesh Wi-Fi, cable TV and smart home — engineered together." },
      { property: "og:url", content: "/connectivity" },
    ],
    links: [{ rel: "canonical", href: "/connectivity" }],
  }),
  component: ConnectivityPage,
});

function ConnectivityPage() {
  return (
    <Layout>
      <PageHero
        kicker="Connectivity"
        title={<>The invisible <span className="text-gradient">backbone</span> behind every great night in.</>}
        description="From multi-gig fiber to whole-home mesh, cable television support and smart living — connectivity engineered to disappear."
        image={fiberImg}
      />

      <section className="section-y">
        <div className="container-x grid gap-5 md:grid-cols-4">
          {[
            { icon: Zap, t: "Multi-gig Internet", d: "Symmetrical speeds up to 5 Gbps with sub-ms latency." },
            { icon: Wifi, t: "Mesh Wi-Fi 7", d: "Self-healing mesh nodes for every corner of the home." },
            { icon: Tv, t: "Cable TV Support", d: "Smooth, high-def channels alongside on-demand streaming." },
            { icon: Home, t: "Smart Home", d: "One ambient hub for lights, sound and climate." },
          ].map((s,i)=>(
            <Reveal key={s.t} delay={i*60}>
              <div className="h-full rounded-3xl glass p-6 hover-lift">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-grad-primary ring-glow">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StickyBg image={fiberImg} alt="Fiber optic backbone">
        <div className="container-x grid gap-32 py-32 md:py-40">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-electric">Fiber-first</p>
              <h2 className="mt-3 font-display text-5xl font-bold md:text-7xl">Light-speed, <span className="text-gradient">literally</span>.</h2>
              <p className="mt-5 text-muted-foreground md:text-lg">A fully-fiber path from your living room to the wider internet. No bottlenecks, no buffering, no excuses.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="ml-auto max-w-2xl text-right">
              <p className="text-xs uppercase tracking-[0.25em] text-electric">Whole-home coverage</p>
              <h2 className="mt-3 font-display text-5xl font-bold md:text-7xl">Every <span className="text-gradient">corner</span>, covered.</h2>
              <p className="mt-5 text-muted-foreground md:text-lg">Mesh nodes that quietly hand off devices as you move, keeping calls, games and streams uninterrupted.</p>
            </div>
          </Reveal>
        </div>
      </StickyBg>

      <section className="section-y">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img src={routerImg} alt="Premium router" width={1600} height={1000} loading="lazy" className="rounded-3xl ring-glow" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-4xl font-bold md:text-5xl">A gateway, designed like <span className="text-gradient">furniture</span>.</h2>
            <p className="mt-5 text-muted-foreground">Tri-band Wi-Fi 7, hardened firmware, weekly auto-updates and ambient status lighting — engineered to be seen as much as it is used.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[["5","Gbps"],["8","Streams"],["99.99","% Uptime"]].map(([n,l])=>(
                <div key={l} className="rounded-xl glass p-4 text-center">
                  <p className="font-display text-2xl font-bold">{n}</p>
                  <p className="text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Cable television, <span className="text-gradient">reimagined</span>.</h2>
            <p className="mt-5 text-muted-foreground">Live channels living happily next to your streaming library — one remote, one search bar, one beautiful guide.</p>
            <ul className="mt-7 grid gap-3">
              {([
                { Icon: Cable, t: "Hybrid live + on-demand guide" },
                { Icon: Activity, t: "Real-time picture optimization" },
                { Icon: Shield, t: "Parental presets per profile" },
                { Icon: Router, t: "Works over Wi-Fi, no extra wiring" },
              ]).map(({ Icon, t }) => (
                <li key={t} className="flex items-center gap-3 rounded-xl glass p-3">
                  <Icon className="h-5 w-5 text-electric" /> <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl">
              <img src={theaterImg} alt="Cable TV experience" width={1600} height={1000} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] glass-strong p-8 md:p-12">
              <img src={smartImg} alt="" width={1600} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
              <div className="relative grid gap-8 md:grid-cols-4">
                {[
                  { n: 5, s: "Gbps", l: "Top speed" },
                  { n: 99, s: "%", l: "Reliability" },
                  { n: 200, s: "+", l: "Channels" },
                  { n: 30, s: "min", l: "Self-install" },
                ].map(x=>(
                  <div key={x.l}>
                    <p className="font-display text-4xl font-bold md:text-5xl"><Counter to={x.n} suffix={x.s} /></p>
                    <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{x.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
