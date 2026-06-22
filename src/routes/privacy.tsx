import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ashwin Stream" },
      { name: "description", content: "How Ashwin Stream collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Ashwin Stream" },
      { property: "og:description", content: "How Ashwin Stream collects, uses and protects your personal information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      updated="June 1, 2026"
      intro="We respect your privacy and design our products to collect the minimum information needed to deliver a great experience."
      sections={[
        { h: "Information we collect", p: <>We collect account details you provide (such as name and email), device information necessary to deliver streams, and product analytics to help us improve. We do not sell personal data to third parties.</> },
        { h: "How we use information", p: <>To operate your account, deliver and personalize the streaming experience, improve our services, prevent fraud, and meet legal obligations.</> },
        { h: "Cookies and similar technologies", p: <>We use a small number of cookies to keep you signed in, remember your preferences and measure aggregate usage. You can adjust cookie preferences in your browser at any time.</> },
        { h: "Data retention", p: <>We retain account data while your account is active, and for a limited period afterwards as required by law. You can request deletion at any time.</> },
        { h: "Security", p: <>Accounts and viewing history are encrypted at rest and in transit. We follow industry best practices and continuously test our infrastructure.</> },
        { h: "Your rights", p: <>Depending on your jurisdiction, you may have the right to access, correct, export or delete your personal data. To exercise these rights, contact <strong>privacy@ashwinstream.studio</strong>.</> },
        { h: "Children", p: <>Ashwin Stream is intended for general audiences. Family profiles can be configured by an adult account holder; we do not knowingly collect personal data from children outside that context.</> },
        { h: "Changes to this policy", p: <>We may update this policy from time to time. Material changes will be communicated through the product or by email.</> },
      ]}
    />
  ),
});
