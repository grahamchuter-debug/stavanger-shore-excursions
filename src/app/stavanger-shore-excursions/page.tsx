import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Stavanger Shore Excursions for Cruise Passengers",
  description:
    "Compare Stavanger shore excursions for cruise ships: Lysefjord cruises, walking tours, and return-to-ship timing advice for Vågen harbour and central Stavanger.",
  path: "/stavanger-shore-excursions",
  ogImage: siteImages.lysefjordCruise,
  ogImageAlt: imageAlts.lysefjordCruise,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "City or Lysefjord?", href: "/stavanger-city-or-lysefjord" },
  { label: "Stavanger port guide", href: "/stavanger-port-guide" },
  { label: "One day in Stavanger", href: "/one-day-in-stavanger" },
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "Is Stavanger worth visiting?", href: "/is-stavanger-worth-visiting" },
] as const;

const faqs = [
  {
    question: "Should cruise passengers arrange Stavanger excursions in advance?",
    answer:
      "On busy summer days when several ships share the harbour, popular Lysefjord sailings and walking tours can sell out with operators. Arranging ahead helps lock a departure slot and plan your return buffer.",
  },
  {
    question: "How long do the main Stavanger shore excursions take?",
    answer:
      "Lysefjord cruises typically run around three to three-and-a-half hours from central Stavanger. Walking tours offer 1-hour highlights or a 2-hour extended city route ending near the cruise port.",
  },
  {
    question: "Can I explore Stavanger independently as a cruise passenger?",
    answer:
      "Yes. Gamle Stavanger, Vågen harbour, and many museums are walkable from cruise berths. Independent guests should still build a 30–45 minute buffer before all aboard on peak turnaround days.",
  },
  {
    question: "Do Stavanger tours guarantee return to the cruise ship?",
    answer:
      "Ship-sponsored excursions usually include a ship guarantee. Independent tickets do not. You are responsible for meeting your vessel's all-aboard time. Always confirm timing on your cruise app before arranging tours.",
  },
] as const;

export default function StavangerShoreExcursionsPage() {
  return (
    <ContentPage
      title="Stavanger Shore Excursions"
      lead="Lysefjord sailings and city walking tours for cruise ship guests, with planning focused on realistic hours ashore and return-to-ship buffers."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Compare Stavanger tours for your port day"
      ctaText="Use the guides below to match excursions to your ship's timetable, then choose the option that fits your hours ashore."
      ctaHref="/stavanger-shore-excursions"
      ctaButtonLabel="Explore excursion details"
    >
      <section>
        <h2>Why Stavanger is ideal for cruise shore excursions</h2>
        <p>
          Stavanger combines a compact, walkable city centre with quick access to
          Lysefjord, one of Norway&apos;s most dramatic waterways. Cruise
          passengers step off near Vågen harbour and can reach fjord cruise
          piers, Old Town lanes, and tourist information within minutes, which
          means less transfer time and more time for the experiences that matter.
        </p>
        <p>
          Before choosing, read our{" "}
          <Link href="/stavanger-port-guide">Stavanger port guide</Link> for
          walking distances from your berth and check the{" "}
          <Link href="/ship-schedule">ship schedule hub</Link> for published arrival and departure times.
        </p>
      </section>

      <CruisePortDayPlanner />

      <section>
        <h2>Lysefjord cruise: headline scenic sailing</h2>
        <p>
          The Lysefjord cruise is the signature Stavanger shore excursion for
          cruise passengers who want fjord drama without a full-day inland
          transfer. Sightseeing boats sail from the central harbour area into
          steep-walled scenery, waterfalls, and open-water views toward the
          Pulpit Rock plateau.
        </p>
        <ul>
          <li>Classic Stavanger fjord experience for first-time visitors</li>
          <li>Departs close to central Stavanger and the harbour area</li>
          <li>Typical duration: around three to three-and-a-half hours</li>
          <li>Allow 45 minutes before all aboard after disembarkation</li>
        </ul>
        <p>
          <Link href="/excursions/lysefjord-cruise">View Lysefjord cruise details</Link>
        </p>
      </section>

      <section>
        <h2>Stavanger walking tour: explore the city on foot</h2>
        <p>
          Prefer the city over the fjord? A locally guided walking tour covers
          Gamle Stavanger, Stavanger Cathedral, Valbergtårnet, Øvre Holmegate
          colour street, and harbour viewpoints, with 1-hour highlights or a
          2-hour extended route for longer port calls.
        </p>
        <p>
          <Link href="/excursions/stavanger-walking-tour">
            View walking tour routes and stops
          </Link>
        </p>
      </section>

      <section>
        <h2>City or Lysefjord?</h2>
        <p>
          The first decision is usually whether to stay in Stavanger or head into
          Lysefjord. Seeing Pulpit Rock from the water is not the same as hiking
          Preikestolen. Read the{" "}
          <Link href="/stavanger-city-or-lysefjord">city or Lysefjord guide</Link>{" "}
          before locking a plan.
        </p>
      </section>

      <section>
        <h2>How to choose the right excursion for your port time</h2>
        <p>
          Match the tour to the hours your cruise line guarantees ashore, not
          just the published arrival time. Late arrivals and early departures
          happen, especially on North Sea crossings.
        </p>
        <ul>
          <li>
            <strong>4–5 hours in port:</strong> 1-hour walking tour highlights or
            harbour self-exploration
          </li>
          <li>
            <strong>6–7 hours:</strong> Lysefjord cruise or 2-hour extended walk
          </li>
          <li>
            <strong>8+ hours:</strong> combine Lysefjord cruise with walking tour
            or extended harbour lunch
          </li>
        </ul>
        <p>
          Every itinerary should include margin to return to ship on time. Read{" "}
          <Link href="/is-stavanger-worth-visiting">
            is Stavanger worth visiting?
          </Link>{" "}
          for an honest overview of what fits your cruise day.
        </p>
      </section>

      <section>
        <h2>Timing tips for cruise passengers</h2>
        <p>
          Ship-sponsored excursions cost more but usually include a guarantee
          that the operator will get you back before departure. Independent
          bookings save money yet require you to watch the clock yourself. Build
          at least 45 minutes of buffer before all aboard.
        </p>
        <p>
          On peak days, arrange Lysefjord sailings and walking tours early with operators. Keep
          your cruise card, photo ID, and a phone with your ship&apos;s daily
          programme handy so you can adjust if the captain changes port times.
        </p>
      </section>
    </ContentPage>
  );
}
