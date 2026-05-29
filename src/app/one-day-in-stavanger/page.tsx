import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Stavanger for Cruise Passengers",
  description:
    "Sample one-day Stavanger itinerary for cruise guests with realistic timing for Lysefjord cruises, walking tours, and buffer to return to ship on time.",
  path: "/one-day-in-stavanger",
  ogImage: siteImages.gamleStavanger,
  ogImageAlt: imageAlts.gamleStavanger,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/stavanger-shore-excursions" },
  { label: "Stavanger port guide", href: "/stavanger-port-guide" },
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "Is Stavanger worth visiting?", href: "/is-stavanger-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What can cruise passengers do in Stavanger with only four hours ashore?",
    answer:
      "Focus on the 1-hour walking tour highlights or a self-guided loop through Gamle Stavanger and Vågen harbour. Skip Lysefjord cruises unless your operator confirms sailing times fit with a 45-minute return buffer.",
  },
  {
    question: "Can I combine a Lysefjord cruise and walking tour in one day?",
    answer:
      "Yes if your ship stays at least eight hours. Run the walking tour first thing, enjoy lunch near the harbour, then board an afternoon Lysefjord sailing — or reverse the order on early-arrival days.",
  },
  {
    question: "Should I book tickets before my cruise arrives in Stavanger?",
    answer:
      "Pre-booking is strongly recommended on peak summer days. Walk-up Lysefjord tickets exist but popular departures sell out when several ships share the port.",
  },
  {
    question: "How much buffer time should I leave before all aboard?",
    answer:
      "Aim to be at the gangway 30–45 minutes before the published all-aboard time. Harbour queues and late-running tours can compress that window quickly in Stavanger.",
  },
] as const;

export default function OneDayInStavangerPage() {
  return (
    <ContentPage
      title="One Day in Stavanger"
      lead="A practical cruise-day plan for Stavanger that combines Lysefjord scenery and Old Town charm with realistic timing so you can return to your ship on time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship&apos;s Stavanger schedule</h2>
        <p>
          Every good Stavanger day begins with your cruise line&apos;s arrival,
          departure, and all-aboard times. Subtract at least 45 minutes from your
          last possible departure to set a hard deadline for being back at the
          gangway. Check the{" "}
          <Link href="/ship-schedule">ship schedule hub</Link> and confirm times
          on your ship&apos;s app the morning you arrive.
        </p>
      </section>

      <section>
        <h2>Morning: disembark early and confirm excursions</h2>
        <p>
          Walk from the pier to Vågen harbour or your excursion meeting point as
          soon as you are cleared ashore. If you pre-booked a Lysefjord cruise or
          walking tour, confirm check-in times immediately. On peak days,
          popular sailings fill quickly when several ships are in port.
        </p>
      </section>

      <section>
        <h2>6–8 hours in port: Lysefjord cruise focus</h2>
        <p>
          With a solid half-day ashore, the Lysefjord cruise is the headline
          experience. Board from central Stavanger, enjoy cliff scenery and
          waterfall views, and plan to be back at the harbour with time to spare
          before all aboard.
        </p>
        <ul>
          <li>Ideal for first-time visitors wanting signature Norway fjord photos</li>
          <li>Pair with a quick harbour lunch if timing allows</li>
          <li>
            See our{" "}
            <Link href="/excursions/lysefjord-cruise">Lysefjord cruise guide</Link>{" "}
            for duration and meeting-point details
          </li>
        </ul>
      </section>

      <section>
        <h2>City-focused port day: walking tour loop</h2>
        <p>
          Prefer urban culture over fjords? Choose the 1-hour highlights walk or
          the 2-hour extended route through Gamle Stavanger, cathedral,
          Valbergtårnet, colour street, and waterfront viewpoints — all ending
          near the cruise port.
        </p>
        <p>
          <Link href="/excursions/stavanger-walking-tour">
            Compare walking tour durations and stops
          </Link>
        </p>
      </section>

      <section>
        <h2>Full day: combine fjord and city</h2>
        <p>
          On 10+ hour calls, run a morning Lysefjord cruise, lunch near Øvre
          Holmegate or Fiskepiren, then an afternoon walking tour or independent
          museum time. Keep the final hour free near the gangway for a stress-free
          return.
        </p>
      </section>

      <section>
        <h2>Return-to-ship checklist</h2>
        <ul>
          <li>Confirm all-aboard on your cruise app after any captain updates</li>
          <li>Head toward the pier 45 minutes before departure at the latest</li>
          <li>Carry your cruise card and any shore-excursion vouchers</li>
          <li>Allow extra time on busy days when multiple ships share Stavanger</li>
        </ul>
        <p>
          Use our{" "}
          <Link href="/stavanger-shore-excursions">shore excursions hub</Link> and{" "}
          <Link href="/stavanger-port-guide">port guide</Link> to fine-tune timing
          for your specific ship.
        </p>
      </section>
    </ContentPage>
  );
}
