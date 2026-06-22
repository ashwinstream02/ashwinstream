import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ChevronDown } from "lucide-react";
import docsImg from "@/assets/docs.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Ashwin Stream" },
      { name: "description", content: "Answers to the most common questions about Ashwin Stream streaming, devices, plans and connectivity." },
      { property: "og:title", content: "FAQ — Ashwin Stream" },
      { property: "og:description", content: "Answers about streaming, devices, plans and connectivity." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  ["What devices does Ashwin Stream support?", "Ashwin Stream runs on virtually every modern device — smart TVs, set-top boxes, phones, tablets, laptops and gaming consoles. A native app is available for major operating systems."],
  ["Can I watch in 4K HDR?", "Yes. Cinematic and Ultimate plans include 4K HDR with spatial audio where supported by your hardware."],
  ["How many screens can I stream on at once?", "It depends on your plan. Essential supports 1 screen, Cinematic supports 4 and Ultimate supports 6 simultaneous streams."],
  ["Do I need special internet for streaming?", "Any stable broadband works for HD. For 4K HDR, we recommend at least 50 Mbps. Ashwin Stream Connectivity plans include multi-gig speeds."],
  ["Can I cancel anytime?", "Yes — there are no long-term contracts on any plan. Cancel directly from your account at any time."],
  ["Is there a free trial?", "Seven days, no card required. You can explore the full library and decide afterwards."],
  ["Does Ashwin Stream include cable television?", "Our Ultimate plan includes hybrid cable TV access alongside the on-demand library, all through one elegant guide."],
  ["How is my data handled?", "Accounts and viewing history are encrypted at rest. We never sell personal data — see our Privacy Policy for the full breakdown."],
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <PageHero
        kicker="FAQ"
        title={<>Questions, <span className="text-gradient">answered.</span></>}
        description="Most common questions about Ashwin Stream streaming, devices, plans, and connectivity — in plain language."
        image={docsImg}
      />

      <section className="section-y">
        <div className="container-x mx-auto max-w-3xl">
          <div className="grid gap-3">
            {faqs.map(([q,a], i) => {
              const isOpen = open === i;
              return (
                <Reveal key={q} delay={i*40}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full rounded-2xl glass p-5 text-left transition-all hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-base font-semibold md:text-lg">{q}</h3>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-electric transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </div>
                    <div className={`grid overflow-hidden transition-all duration-500 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <p className="min-h-0 text-sm text-muted-foreground">{a}</p>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
