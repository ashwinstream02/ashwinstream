import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { StickyBg } from "@/components/site/Sticky";
import familyImg from "@/assets/family.jpg";
import theaterImg from "@/assets/theater.jpg";
import devicesImg from "@/assets/devices.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ashwin Stream" },
      { name: "description", content: "Ashwin Stream is an entertainment collective designing cinematic streaming and effortless connectivity for the modern home." },
      { property: "og:title", content: "About — Ashwin Stream" },
      { property: "og:description", content: "An entertainment collective designing cinematic streaming and effortless connectivity." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        kicker="About Ashwin Stream"
        title={<>We build the <span className="text-gradient">quiet magic</span> behind great nights in.</>}
        description="Ashwin Stream is a small, intentional team of storytellers, engineers and designers obsessed with the moment the lights dim and the credits roll."
        image={familyImg}
      />

      <section className="section-y">
        <div className="container-x grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-electric">Our story</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A platform that began as a <span className="text-gradient">love letter</span> to cinema.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>Ashwin Stream was founded around a simple idea: streaming had become functional, but rarely felt premium anymore. We wanted to design a home for stories that felt as considered as the stories themselves.</p>
              <p>What started as a discovery app for independent films grew into a full entertainment ecosystem — cinema, sports, music, learning, family content — and the connectivity that makes it all run beautifully.</p>
              <p>Today, our collective spans designers, engineers, programmers and field installers — quietly building the layer between you and what you love.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4">
              {[["2017","Founded as a small studio"],["2019","First original series released"],["2021","Whole-home connectivity launched"],["2024","Smart home suite released"]].map(([y,t])=>(
                <div key={y} className="rounded-2xl glass p-5">
                  <p className="font-display text-3xl font-bold text-electric">{y}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <StickyBg image={theaterImg} alt="Theater space" minH="min-h-[110vh]">
        <div className="container-x py-32">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-electric">Our principles</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">Designed for <span className="text-gradient">quiet evenings</span>, built for many.</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["Story first","Every product decision begins with the question: will this serve the story?"],
              ["Calm by default","No flashing banners, no manipulative loops — just an interface that respects your evening."],
              ["Built to last","Software that improves quietly, hardware that ages beautifully."],
            ].map(([t,p])=>(
              <Reveal key={t}><div className="rounded-3xl glass-strong p-6">
                <h3 className="font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </StickyBg>

      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Across every <span className="text-gradient">device</span>, every household.</h2>
          </Reveal>
          <img src={devicesImg} alt="Across devices" width={1600} height={1000} loading="lazy" className="mt-10 w-full rounded-3xl ring-glow" />
        </div>
      </section>
    </Layout>
  );
}
