import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Stavanger for Cruise Passengers",
  description:
    "When to visit Stavanger on a cruise: peak season, weather, Lysefjord cruise availability, crowds at Gamle Stavanger, and return-to-ship planning by month.",
  path: "/best-time-to-visit-stavanger",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
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
    question: "What is the best month for Stavanger cruise shore excursions?",
    answer:
      "May through September offers the most reliable Lysefjord cruise sailings, long daylight, and walkable weather for Old Town tours. June and July are busiest. Book excursions early.",
  },
  {
    question: "Is Stavanger crowded in summer?",
    answer:
      "Yes on peak cruise days when multiple ships call. Disembark early, pre-book Lysefjord tickets, and consider morning walking tours before harbour restaurants fill up.",
  },
  {
    question: "Can I visit Stavanger on a winter cruise?",
    answer:
      "Winter calls are possible with fewer crowds and dramatic light, but daylight is short and some sailings may run reduced schedules. Pack warm layers and confirm excursion times in advance.",
  },
  {
    question: "Does weather affect Lysefjord cruises from Stavanger?",
    answer:
      "Operators may adjust routes in high winds or poor visibility. Keep flexible plans and monitor announcements. have a city walking backup if sailing is delayed.",
  },
] as const;

export default function BestTimeToVisitStavangerPage() {
  return (
    <ContentPage
      title="Best Time to Visit Stavanger"
      lead="Season-by-season advice for cruise passengers choosing when to book Lysefjord cruises, walking tours, and harbour time in Stavanger."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Peak cruise season: May to September</h2>
        <p>
          Most Stavanger cruise calls arrive between late spring and early autumn.
          Longer daylight, active Lysefjord operators, and comfortable walking
          weather make this the best window for shore excursions. June through
          August sees the highest ship volumes. plan ahead.
        </p>
      </section>

      <section>
        <h2>June and July: best scenery, busiest ports</h2>
        <p>
          Mid-summer delivers the classic Norway experience cruise guests expect:
          green fjord walls, busy harbours, and full excursion timetables. Arrange
          Lysefjord cruises and walking tours in advance, and use our{" "}
          <Link href="/ship-schedule">ship schedule hub</Link> to spot overlapping
          ship days.
        </p>
      </section>

      <section>
        <h2>May and September: balance of light and crowds</h2>
        <p>
          Shoulder months often mean slightly fewer passengers ashore while
          operators still run regular sailings. September can bring crisp air and
          golden light for photography around Gamle Stavanger and the harbour.
        </p>
      </section>

      <section>
        <h2>Winter and off-season calls</h2>
        <p>
          Winter cruises offer atmospheric streets and shorter queues, but cold
          weather and limited daylight change the pace. Walking tours remain viable
          with proper clothing; always confirm whether Lysefjord sailings operate on
          your exact date.
        </p>
      </section>

      <section>
        <h2>Planning tips whatever month you visit</h2>
        <ul>
          <li>Pre-book headline excursions on peak summer itineraries</li>
          <li>Pack a waterproof layer. coastal weather shifts quickly</li>
          <li>Build 30–45 minutes buffer before all aboard every season</li>
          <li>
            Read the{" "}
            <Link href="/stavanger-port-guide">port guide</Link> for pier walking
            times
          </li>
        </ul>
      </section>
    </ContentPage>
  );
}
