import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { StickyBg } from "@/components/site/Sticky";
import theaterImg from "@/assets/theater.jpg";
import sportsImg from "@/assets/sports.jpg";
import musicImg from "@/assets/music.jpg";
import docsImg from "@/assets/docs.jpg";
import kidsImg from "@/assets/kids.jpg";
import familyImg from "@/assets/family.jpg";
import remoteImg from "@/assets/remote.jpg";
import devicesImg from "@/assets/devices.jpg";
import { Film, Trophy, Music, GraduationCap, Sparkles, Heart, Play, Star } from "lucide-react";

export const Route = createFileRoute("/entertainment")({
  head: () => ({
    meta: [
      { title: "Entertainment — Ashwin Stream" },
      { name: "description", content: "Cinema, live sports, music, documentaries, lifestyle and family content — all in one cinematic streaming universe." },
      { property: "og:title", content: "Entertainment — Ashwin Stream" },
      { property: "og:description", content: "Cinema, live sports, music, documentaries, lifestyle and family content in one universe." },
      { property: "og:url", content: "/entertainment" },
    ],
    links: [{ rel: "canonical", href: "/entertainment" }],
  }),
  component: EntertainmentPage,
});

const verticals = [
  { icon: Film, title: "Cinematic Originals", desc: "Premium series and films produced exclusively for Ashwin Stream.", img: theaterImg },
  { icon: Trophy, title: "Live Sports", desc: "Court-side, pitch-side, ringside — all in true 4K.", img: sportsImg },
  { icon: Music, title: "Concerts & Music", desc: "Immersive live performances mixed in spatial audio.", img: musicImg },
  { icon: GraduationCap, title: "Documentary", desc: "Stories that take you further than the headlines.", img: docsImg },
  { icon: Sparkles, title: "Kids & Family", desc: "Safe profiles, joyful worlds, parent-approved.", img: kidsImg },
  { icon: Heart, title: "Lifestyle", desc: "Food, travel, design and the art of slow living.", img: familyImg },
];

function EntertainmentPage() {
  return (
    <Layout>
      <PageHero
        kicker="Entertainment"
        title={<>A library that feels <span className="text-gradient">infinite</span>.</>}
        description="From cinematic blockbusters and roaring stadiums to quiet documentaries and bedtime favorites — every mood has a home on Ashwin Stream."
        image={theaterImg}
      />

      <section className="section-y">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {verticals.map((v, i) => (
            <Reveal key={v.title} delay={i*60}>
              <article className="group relative h-80 overflow-hidden rounded-3xl glass hover-lift">
                <img src={v.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl glass-strong">
                    <v.icon className="h-4 w-4 text-electric" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">{v.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <StickyBg image={musicImg} alt="Concert stage" minH="min-h-[120vh]">
        <div className="container-x py-32">
          <Reveal>
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-electric">Live, tonight</p>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">Front-row seats, <span className="text-gradient">every night.</span></h2>
              <p className="mt-5 text-muted-foreground md:text-lg">Premieres, exclusive concerts and live events streamed in pristine quality across every device in your home.</p>
            </div>
          </Reveal>
        </div>
      </StickyBg>

      <section className="section-y">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Browse by <span className="text-gradient">mood</span>.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6">
            {["Cozy nights","Edge of seat","Belly laughs","Mind benders","Family time","Soundtracks","Big stories","Hidden gems","Tonight only","True stories","Slow burns","Adrenaline"].map((m,i)=>(
              <Reveal key={m} delay={i*30}>
                <button className="rounded-2xl glass p-4 text-sm hover:bg-white/10 hover-lift">{m}</button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <img src={remoteImg} alt="Watching at home" width={1600} height={1000} loading="lazy" className="rounded-3xl ring-glow" />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.25em] text-electric">On-demand, always</p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A remote that <span className="text-gradient">reads the room</span>.</h2>
            <p className="mt-5 text-muted-foreground">Voice search across the entire library, instant resume on any device, and curated rows that change with the time of day.</p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {[["48k+","Titles"],["190+","Markets"],["4K","Max quality"],["12","Languages of voice"]].map(([n,l])=>(
                <div key={l} className="rounded-xl glass p-4">
                  <p className="font-display text-2xl font-bold">{n}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={devicesImg} alt="" width={1600} height={1000} loading="lazy" className="h-[55vh] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 grid place-items-center">
          <Reveal>
            <div className="container-x text-center">
              <h2 className="font-display text-3xl font-bold md:text-5xl">Made for binge nights. <span className="text-gradient">Built for everyday.</span></h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Pick up where you left off — even when "where you left off" was on a different couch.</p>
              <div className="mt-6 inline-flex gap-3">
                <a href="/contact" className="rounded-xl bg-grad-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-glow">Start free</a>
                <a href="/features" className="rounded-xl glass px-6 py-3 text-sm">See features</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
