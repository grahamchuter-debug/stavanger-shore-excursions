import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Stavanger Worth Visiting for Cruise Passengers?",
  description:
    "Honest guide for cruise guests: is Stavanger worth visiting? Lysefjord scenery, Old Town charm, port time needed, and when to stay on board.",
  path: "/is-stavanger-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "City or Lysefjord?", href: "/stavanger-city-or-lysefjord" },
  { label: "Shore excursions", href: "/stavanger-shore-excursions" },
  { label: "Stavanger port guide", href: "/stavanger-port-guide" },
  { label: "One day in Stavanger", href: "/one-day-in-stavanger" },
  { label: "Best time to visit", href: "/best-time-to-visit-stavanger" },
] as const;

const faqs = [
  {
    question: "Is Stavanger worth it for a short cruise port call?",
    answer:
      "Yes if you have at least four hours ashore. A walking tour or harbour stroll delivers authentic Norway city culture quickly. With six or more hours, add the Lysefjord cruise for the full Stavanger experience.",
  },
  {
    question: "What makes Stavanger special compared with other Norwegian ports?",
    answer:
      "Stavanger pairs a historic wooden Old Town with immediate access to Lysefjord. you get both city and signature fjord scenery without long coach transfers from the pier.",
  },
  {
    question: "When is Stavanger not worth leaving the ship?",
    answer:
      "If your port time is under three hours, weather is severe, or you have mobility limits without a suitable tour, staying aboard may be safer. Very tight schedules rarely fit a Lysefjord cruise comfortably.",
  },
  {
    question: "Is Stavanger crowded when cruise ships visit?",
    answer:
      "Summer can be busy when multiple large ships call the same day. Go ashore early, pre-book excursions, and use our port guide to avoid peak queues near Vågen and Gamle Stavanger.",
  },
] as const;

export default function IsStavangerWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Stavanger Worth Visiting?"
      lead="An honest look at whether Stavanger deserves your hours ashore. Lysefjord drama, walkable Old Town culture, and what cruise passengers gain on different port lengths."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Short answer: yes for most cruise itineraries</h2>
        <p>
          Stavanger is one of the strongest mainstream cruise ports in southwest
          Norway. You get a real city. restaurants, museums, street life. plus
          quick access to Lysefjord scenery that rivals anywhere on the Norwegian
          coast. For most guests, going ashore is worthwhile.
        </p>
      </section>

      <section>
        <h2>What you gain by going ashore</h2>
        <ul>
          <li>Lysefjord cruises with cliff, waterfall, and Pulpit Rock area views</li>
          <li>Gamle Stavanger. one of Europe&apos;s best-preserved wooden towns</li>
          <li>Compact walking routes ideal for independent and guided exploration</li>
          <li>Harbour dining and Norwegian culture without long transfers</li>
        </ul>
      </section>

      <section>
        <h2>Port time: what you need for a satisfying visit</h2>
        <p>
          <strong>Under 4 hours:</strong> stick to a highlights walk or harbour
          loop. <strong>4–6 hours:</strong> walking tour or a carefully timed
          shorter activity. <strong>6+ hours:</strong> Lysefjord cruise becomes
          realistic. <strong>8+ hours:</strong> combine fjord and city comfortably.
        </p>
        <p>
          Use our{" "}
          <Link href="/stavanger-shore-excursions">shore excursions page</Link>{" "}
          and cruise port day planner to match activities to your timetable.
        </p>
      </section>

      <section>
        <h2>When Stavanger may disappoint</h2>
        <p>
          Extremely short calls, heavy rain without indoor plans, or expecting
          Pulpit Rock itself from the pier will frustrate some guests. The plateau
          hike is a separate full-day adventure inland; the Lysefjord cruise
          shows the landscape from the water instead.
        </p>
      </section>

      <section>
        <h2>Verdict for cruise passengers</h2>
        <p>
          If your ship grants a normal half-day or longer in port, Stavanger is
          worth visiting. Choose the Lysefjord cruise for fjord first-timers, choose
          the walking tour for city lovers, and always plan to return to ship on
          time with a 30–45 minute buffer.
        </p>
      </section>
    </ContentPage>
  );
}
