import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Stavanger Cruise Port Guide",
  description:
    "Stavanger cruise port guide for passengers: pier location, walking distances to Old Town, facilities, tender info, and tips to return before all aboard.",
  path: "/stavanger-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "City or Lysefjord?", href: "/stavanger-city-or-lysefjord" },
  { label: "Shore excursions", href: "/stavanger-shore-excursions" },
  { label: "One day in Stavanger", href: "/one-day-in-stavanger" },
  { label: "Ship schedule", href: "/ship-schedule" },
  { label: "Is Stavanger worth visiting?", href: "/is-stavanger-worth-visiting" },
] as const;

const faqs = [
  {
    question: "How far is the Stavanger cruise port from Gamle Stavanger?",
    answer:
      "Most cruise berths are 10–20 minutes on foot from Gamle Stavanger and Vågen harbour. Signage leads from the waterfront to tourist information and excursion meeting points.",
  },
  {
    question: "Do cruise ships tender in Stavanger or dock at the pier?",
    answer:
      "Most vessels dock at Stavanger's main cruise and harbour facilities. Tender operations are uncommon but possible. Check your cruise app on the morning of arrival for the final method.",
  },
  {
    question: "Are there restrooms and Wi-Fi near the Stavanger cruise port?",
    answer:
      "Yes. Restrooms, cafés, and visitor services sit around Vågen, the harbour front, and Stavanger Tourist Information. Free Wi-Fi is available in much of the city centre, though speeds vary on busy turnaround days.",
  },
  {
    question: "How early should cruise passengers return to the ship in Stavanger?",
    answer:
      "Plan to be back at the gangway at least 30–45 minutes before all aboard. Queues at popular cafés, Lysefjord cruise returns, and security screening can eat into that buffer on peak summer days.",
  },
] as const;

export default function StavangerPortGuidePage() {
  return (
    <ContentPage
      title="Stavanger Port Guide for Cruise Passengers"
      lead="Everything you need to navigate Stavanger cruise port. pier location, walking routes, facilities, and how to reach shore excursions without losing precious port time."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Where cruise ships dock in Stavanger</h2>
        <p>
          Stavanger is a major Norwegian cruise hub with deep-water berths near
          the city centre. Large ships typically dock at facilities close to
          Vågen harbour, with Gamle Stavanger, restaurants, and Lysefjord
          cruise departures within walking distance of most gangways.
        </p>
        <p>
          Confirm your exact berth on the ship&apos;s app the night before arrival.
          Our{" "}
          <Link href="/ship-schedule">ship schedule hub</Link> will publish
          monthly timetables when available to help you plan busy port days.
        </p>
      </section>

      <section>
        <h2>Walking from the pier to key locations</h2>
        <ul>
          <li>
            <strong>Gamle Stavanger / Old Town:</strong> often 10–15 minutes on
            foot from main berths
          </li>
          <li>
            <strong>Lysefjord cruise boarding:</strong> central harbour area near
            Vågen
          </li>
          <li>
            <strong>Stavanger Tourist Information:</strong> close to the harbour
            and cruise dock area
          </li>
          <li>
            <strong>Øvre Holmegate (colour street):</strong> short walk through
            central Stavanger
          </li>
        </ul>
        <p>
          Central Stavanger is compact. ideal for cruise passengers who want
          easy access to walking tours without long coach transfers.
        </p>
      </section>

      <section>
        <h2>Port facilities cruise passengers use most</h2>
        <p>
          You will find tourist information, ticket desks for fjord cruises,
          restaurants, bakeries, and museums including the Norwegian Petroleum
          Museum at Fiskepiren. Card payments are widely accepted; contactless
          speeds up purchases when several ships arrive the same day.
        </p>
        <ul>
          <li>Harbour-front cafés and seafood restaurants</li>
          <li>Lysefjord cruise check-in near central quays</li>
          <li>ATMs and banking services in the city centre</li>
          <li>Public restrooms near Vågen and visitor areas</li>
        </ul>
      </section>

      <section>
        <h2>Tender vs dock: what to expect</h2>
        <p>
          Docking is the norm in Stavanger, which means you walk straight ashore
          without waiting for tender boats. If your captain anchors in the
          harbour instead, follow crew instructions for tender boarding and allow
          extra time both directions. tender queues can delay your return to
          ship on time if you cut it too close.
        </p>
      </section>

      <section>
        <h2>Meeting shore excursions at the port</h2>
        <p>
          Ship-sponsored tours usually gather at signed meeting points near the
          gangway. Independent operators often instruct guests to meet at Vågen
          harbour, tourist information, or a numbered quay. Read your voucher
          carefully the night before and screenshot directions in case mobile
          signal is slow.
        </p>
        <p>
          Ready to pick a tour? Browse our{" "}
          <Link href="/stavanger-shore-excursions">Stavanger shore excursions</Link>{" "}
          for cruise-friendly Lysefjord cruises and walking tours.
        </p>
      </section>

      <section>
        <h2>Busy port days and return-to-ship planning</h2>
        <p>
          When two or more large ships visit Stavanger on the same day, expect
          longer queues at popular restaurants, busier Old Town lanes, and slower
          walking through the harbour area. Start ashore early if your cruise line
          allows it, and keep the final hour free near the pier.
        </p>
        <p>
          Build your itinerary with our{" "}
          <Link href="/one-day-in-stavanger">one day in Stavanger</Link> planner,
          always leaving margin to return to ship on time before the gangway
          closes.
        </p>
      </section>

      <section>
        <p>
          Also visiting Flam during your cruise? Read our{" "}
          <a
            href="https://flamshoreexcursions.com"
            className="font-medium text-[var(--norway-blue)] underline-offset-2 hover:underline"
          >
            Flam Shore Excursions
          </a>{" "}
          guide for excursion ideas, port information and cruise planning advice.
        </p>
      </section>
    </ContentPage>
  );
}
