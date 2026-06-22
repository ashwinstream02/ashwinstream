import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Legal Notice — Ashwin Stream" },
      { name: "description", content: "Legal notice and corporate information for Ashwin Stream Entertainment Collective." },
      { property: "og:title", content: "Legal Notice — Ashwin Stream" },
      { property: "og:description", content: "Legal and corporate information for Ashwin Stream." },
      { property: "og:url", content: "/legal" },
    ],
    links: [{ rel: "canonical", href: "/legal" }],
  }),
  component: () => (
    <LegalPage
      title="Legal Notice"
      updated="June 1, 2026"
      intro="This notice contains the legal and corporate information required for the operation of this website."
      sections={[
        { h: "Publisher", p: <>Ashwin Stream Entertainment Collective Ltd. is the publisher of this website. Registered office at 27 Crescent Lane, Suite 4B. Company registration available on request.</> },
        { h: "Hosting", p: <>This website is hosted on a globally distributed edge platform that automatically caches static assets and routes dynamic requests to the nearest available region.</> },
        { h: "Intellectual Property", p: <>All content presented on this site — including text, layouts, imagery, illustrations and source code — is the original work of Ashwin Stream Entertainment Collective unless otherwise stated. Reproduction without prior written consent is prohibited.</> },
        { h: "Trademarks", p: <>"Ashwin Stream" and the Ashwin Stream wordmark are trademarks of Ashwin Stream Entertainment Collective. No third-party trademarks, logos or brand names are used, referenced or implied on this website.</> },
        { h: "Liability", p: <>Information on this site is provided in good faith. Ashwin Stream makes no warranty of any kind regarding completeness, accuracy or fitness for a particular purpose, and disclaims liability to the maximum extent permitted by law.</> },
        { h: "Applicable Law", p: <>This notice and all use of the site are governed by the laws of the jurisdiction in which Ashwin Stream is incorporated. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.</> },
        { h: "Contact", p: <>For any legal request please contact <strong>legal@ashwinstream.studio</strong>.</> },
      ]}
    />
  ),
});
