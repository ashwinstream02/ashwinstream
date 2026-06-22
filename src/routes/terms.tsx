import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Ashwin Stream" },
      { name: "description", content: "The terms and conditions that govern your use of Ashwin Stream services." },
      { property: "og:title", content: "Terms of Service — Ashwin Stream" },
      { property: "og:description", content: "The terms and conditions that govern your use of Ashwin Stream services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage
      title="Terms of Service"
      updated="June 1, 2026"
      intro="These terms govern your use of Ashwin Stream services. By creating an account or using our products you agree to them."
      sections={[
        { h: "Your account", p: <>You are responsible for safeguarding your account credentials and for any activity under your account. You must be of the legal age required in your jurisdiction to create an account.</> },
        { h: "Subscription and billing", p: <>Plans are billed monthly or annually based on your selection. Subscriptions renew automatically until cancelled. You may cancel at any time from your account settings.</> },
        { h: "Acceptable use", p: <>You agree to use Ashwin Stream services only for personal, non-commercial enjoyment, in accordance with applicable law. You may not attempt to bypass security, scrape or republish content from the service.</> },
        { h: "Content availability", p: <>Available content may vary by location and may be added or removed over time. We will use reasonable efforts to communicate significant catalog changes.</> },
        { h: "Connectivity services", p: <>Where applicable, internet and home-network services are subject to additional terms provided at sign-up, including service area, installation requirements and acceptable use.</> },
        { h: "Intellectual property", p: <>All software, designs and content provided through Ashwin Stream are owned by Ashwin Stream or its licensors. No rights are granted other than those necessary to use the service personally.</> },
        { h: "Termination", p: <>We may suspend or terminate accounts that violate these terms. You may close your account at any time from your settings.</> },
        { h: "Limitation of liability", p: <>To the maximum extent permitted by law, Ashwin Stream shall not be liable for any indirect, incidental or consequential damages arising from your use of the service.</> },
        { h: "Governing law", p: <>These terms are governed by the laws of the jurisdiction in which Ashwin Stream is incorporated. Disputes shall be subject to the exclusive jurisdiction of the competent courts there.</> },
        { h: "Contact", p: <>Questions about these terms can be sent to <strong>legal@ashwinstream.studio</strong>.</> },
      ]}
    />
  ),
});
