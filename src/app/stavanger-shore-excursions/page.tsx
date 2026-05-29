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
  { label: "Stavanger port guide", href: "/stavanger-port-guide" },
  { label: "One day in Stavanger", href: "/one-day-in-stavanger" },
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "Is Stavanger worth visiting?", href: "/is-stavanger-worth-visiting" },
] as const;

const faqs = [
  {
    question: "Should cruise passengers book Stavanger excursions in advance?",
    answer:
      "Yes on busy summer days when several ships share the harbour. Pre-booking Lysefjord cruises and walking tours secures your departure slot and helps you return to ship on time without last-minute queue stress.",
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
      "Ship-sponsored excursions usually include a ship guarantee. Independent tickets do not — you are responsible for meeting your vessel's all-aboard time. Always confirm timing on your cruise app before booking.",
  },
] as const;

export default function StavangerShoreExcursionsPage() {
  return (
    <ContentPage
      title="Stavanger Shore Excursions"
      lead="Hand-picked Lysefjord cruises and city walking tours for cruise ship guests, planned with enough buffer time to return to your ship on schedule."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
      ctaTitle="Compare Stavanger tours for your port day"
      ctaText="Use the guides below to match excursions to your ship's timetable, then choose the option that fits your hours ashore."
      ctaHref="/stavanger-shore-excursions"
      ctaButtonLabel="View tour details"
    >
      <section>
        <h2>Why Stavanger is ideal for cruise shore excursions</h2>
        <p>
          Stavanger combines a compact, walkable city centre with quick access to
          Lysefjord — one of Norway&apos;s most dramatic waterways. Cruise
          passengers step off near Vågen harbour and can reach fjord cruise
          piers, Old Town lanes, and tourist information within minutes, which
          means less transfer time and more time for the experiences that matter.
        </p>
        <p>
          Before booking, read our{" "}
          <Link href="/stavanger-port-guide">Stavanger port guide</Link> for
          walking distances from your berth and check the{" "}
          <Link href="/ship-schedule">ship schedule hub</Link> when monthly
          timetables are published.
        </p>
      </section>

      <CruisePortDayPlanner />

      <section>
        <h2>Lysefjord Cruise — headline scenic tour</h2>
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
        <h2>Stavanger Walking Tour — explore the city on foot</h2>
        <p>
          Prefer the city over the fjord? A locally guided walking tour covers
          Gamle Stavanger, Stavanger Cathedral, Valbergtårnet, Øvre Holmegate
          colour street, and harbour viewpoints — with 1-hour highlights or a
          2-hour extended route for longer port calls.
        </p>
        <p>
          <Link href="/excursions/stavanger-walking-tour">
            View walking tour routes and stops
          </Link>
        </p>
      </section>

      <section>
        <h2>How to choose the right excursion for your port time</h2>
        <p>
          Match the tour to the hours your cruise line guarantees ashore — not
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
        <h2>Booking tips for cruise passengers</h2>
        <p>
          Ship-sponsored excursions cost more but usually include a guarantee
          that the operator will get you back before departure. Independent
          bookings save money yet require you to watch the clock yourself — build
          at least 45 minutes of buffer before all aboard.
        </p>
        <p>
          On peak days, book Lysefjord sailings and walking tours early. Keep
          your cruise card, photo ID, and a phone with your ship&apos;s daily
          programme handy so you can adjust if the captain changes port times.
        </p>
      </section>
    </ContentPage>
  );
}
