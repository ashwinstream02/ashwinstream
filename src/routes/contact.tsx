import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { TFN, TFN_HREF } from "@/components/site/Layout";
import smartImg from "@/assets/smarthome.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ashwin Stream" },
      { name: "description", content: "Talk to Ashwin Stream about streaming plans, home connectivity, partnerships or support." },
      { property: "og:title", content: "Contact — Ashwin Stream" },
      { property: "og:description", content: "Talk to Ashwin Stream about plans, connectivity, partnerships and support." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero
        kicker="Contact"
        title={<>Let's talk <span className="text-gradient">tonight</span>, not next week.</>}
        description="Whether you're choosing a plan or partnering with us — a real human will read your note and reply within one business day."
        image={smartImg}
      />

      <section className="section-y">
        <div className="container-x grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-5">
              {/* Phone — clickable TFN */}
              <a href={TFN_HREF} className="flex items-start gap-4 rounded-2xl bg-grad-primary p-5 ring-glow transition-transform hover:scale-[1.02]">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-background/25">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Call us now</p>
                  <p className="mt-1 font-display text-2xl font-bold text-primary-foreground">{TFN}</p>
                  <p className="mt-0.5 text-xs text-primary-foreground/60">Mon – Sat · 8 am – 10 pm</p>
                </div>
              </a>
              {[
                { icon: Mail, t: "Email", v: "hello@ashwinstream.studio", href: "mailto:hello@ashwinstream.studio" },
                { icon: MapPin, t: "Studio", v: "27 Crescent Lane, Suite 4B", href: "#" },
              ].map((c) => (
                <a key={c.t} href={c.href} className="flex items-start gap-4 rounded-2xl glass p-5 hover:bg-white/5 transition-colors">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-grad-primary ring-glow">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</p>
                    <p className="mt-1 font-display text-lg font-semibold">{c.v}</p>
                  </div>
                </a>
              ))}
              <div className="rounded-2xl glass p-5 text-sm text-muted-foreground">
                Support hours: 24/7 chat · Phone, Mon–Sat, 8am — 10pm local time.
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl glass-strong p-6 md:p-8"
            >
              <h2 className="font-display text-2xl font-semibold">Send a note</h2>
              <p className="mt-1 text-sm text-muted-foreground">We reply within one business day.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Topic" name="topic" placeholder="Plans, support, press…" />
                <Field label="Phone (optional)" name="phone" />
              </div>
              <label className="mt-4 block text-sm">
                <span className="text-muted-foreground">Message</span>
                <textarea required rows={5} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              </label>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-grad-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-glow">
                {sent ? "Thanks — we'll be in touch" : "Send message"} <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type="text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <label className="block text-sm">
      <span className="text-muted-foreground">{label}</span>
      <input required name={name} type={type} placeholder={placeholder}
        className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
    </label>
  );
}
