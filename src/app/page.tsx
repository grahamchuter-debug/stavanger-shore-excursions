import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildFaqSchema, buildItemListSchema, buildWebPageSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";

const pageMeta = {
  title:
    "Stavanger Shore Excursions | Cruise Port Tours & Lysefjord Guides for Passengers",
  description:
    "Plan your Stavanger cruise port day with Lysefjord cruises, walking tours, port guides, and return-to-ship friendly shore excursion advice.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const trustBadges = [
  { label: "Return to ship on time", accent: true },
  { label: "Cruise passenger friendly", accent: false },
  { label: "Stavanger fjord specialists", accent: false },
] as const;

const popularTours = [
  {
    name: "Lysefjord Cruise",
    description:
      "Headline scenic fjord cruise from Stavanger harbour into dramatic Lysefjord landscapes.",
  },
  {
    name: "Stavanger Walking Tour",
    description:
      "Guided Old Town and city walk for cruise passengers — 1 or 2 hour options from Vågen harbour.",
  },
] as const;

const homeFaqs = [
  {
    question: "What is the best shore excursion in Stavanger for cruise passengers?",
    answer:
      "The Lysefjord cruise is the signature scenic choice for first-time visitors. If you prefer staying in the city, the Stavanger walking tour covers Old Town, cathedral, and colour street within return-to-ship friendly timings.",
  },
  {
    question: "How far is Stavanger cruise port from Lysefjord cruise departures?",
    answer:
      "Most Lysefjord sailings depart from the central harbour area near Vågen, often within a 10–20 minute walk from cruise berths. Confirm the meeting point on your voucher the night before.",
  },
  {
    question: "Can I do a walking tour and Lysefjord cruise on the same port day?",
    answer:
      "Yes when your ship stays at least six to eight hours. Run the walking tour first, then an afternoon fjord sailing — always keep 30–45 minutes buffer before all aboard.",
  },
  {
    question: "Should I book Stavanger shore excursions independently?",
    answer:
      "Independent bookings often cost less than ship tours, but you manage your own return-to-ship timing. Use our port day planner, confirm all-aboard on your cruise app, and build buffer before the gangway closes.",
  },
] as const;

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(popularTours),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main className="min-h-screen bg-white text-slate-900">
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          centered
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <h1 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:text-6xl lg:text-7xl">
            Stavanger Shore Excursions
          </h1>

          <p className="mx-auto mb-6 max-w-3xl text-base text-white/90 sm:mb-8 sm:text-xl md:text-2xl">
            Choose shore excursions that fit your port time — Lysefjord
            cruises and city walks with return-to-ship friendly planning.
          </p>

          <a href="#tours" className="btn-primary px-8 py-4 text-base sm:text-lg">
            View Excursions
          </a>

          <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className={`rounded-full px-3 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:px-4 sm:text-sm ${
                  badge.accent
                    ? "badge-accent-red"
                    : "border border-white/25 bg-white/10"
                }`}
              >
                {badge.label}
              </li>
            ))}
          </ul>
        </PageHero>

        <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Explore Stavanger Like a Cruise Insider
          </h2>

          <p className="text-base leading-8 text-slate-700 sm:text-lg">
            Welcome to Stavanger Shore Excursions — independent planning for
            cruise passengers calling at Norway&apos;s southwest coast. Compare
            Lysefjord scenic cruises, locally guided walking tours through Gamle
            Stavanger, and port-day tools built around your ship&apos;s timetable
            so you can return before all aboard.
          </p>
        </section>

        <section id="tours" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="mb-2 text-3xl font-bold sm:mb-3 sm:text-4xl">
            Popular Stavanger Tours
          </h2>
          <p className="mb-4 max-w-2xl text-slate-600">
            Cruise-friendly excursions that depart near central Stavanger and
            fit typical port-day schedules.
          </p>
          <p className="mb-8 max-w-2xl rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-red)] bg-white px-4 py-3 text-sm leading-6 text-slate-700">
            Every excursion featured is selected to fit comfortably within a
            typical Stavanger cruise port call.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <TourCard
              href="/excursions/lysefjord-cruise"
              image={siteImages.lysefjordCruise}
              imageAlt={imageAlts.lysefjordCruiseCard}
              title="Lysefjord Cruise Shore Excursion from Stavanger"
              description="Cruise from Stavanger into the dramatic Lysefjord, passing steep cliffs, waterfalls, island scenery and views toward the famous Pulpit Rock area on a cruise-friendly fjord experience."
              accent="blue"
            />
            <TourCard
              href="/excursions/stavanger-walking-tour"
              image={siteImages.gamleStavanger}
              imageAlt={imageAlts.walkingTourCard}
              title="Stavanger Walking Tour for Cruise Passengers"
              description="A locally guided Stavanger walking tour for guests who want to see the city on foot — 1-hour highlights or a 2-hour extended route without a long coach or fjord commitment."
              accent="red"
            />
          </div>
          </div>
        </section>

        <section id="why-independent" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Why book Stavanger shore excursions independently
            </h2>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Ship-sponsored tours include operator guarantees, but independent
              bookings often offer more choice, lower prices, and flexible
              timings when you understand your port schedule. Stavanger&apos;s
              harbour, Lysefjord departures, and Old Town walks are all reachable
              on foot from most cruise berths — so you spend less time in
              transfers and more time on the experience.
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-8 text-slate-700">
              <li>Compare Lysefjord sailings and walking tours side by side</li>
              <li>Match excursions to your actual hours ashore, not generic packages</li>
              <li>Build a 30–45 minute buffer before all aboard on every plan</li>
              <li>Use our port guide and day planner without cruise-line markups</li>
            </ul>
          </div>
        </section>

        <section id="planner" className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <CruisePortDayPlanner />
          </div>
        </section>

        <section id="faqs" className="border-t bg-surface-muted">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Stavanger cruise passenger FAQs
            </h2>
            <dl className="space-y-6">
              {homeFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-slate-200 border-l-[3px] border-l-[var(--norway-blue)] bg-white p-5 shadow-sm"
                >
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 leading-7 text-slate-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t bg-navy text-white">
          <div className="mx-auto max-w-3xl px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Plan your Stavanger port day with confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
              Browse shore excursions, read the port guide, and check the ship
              schedule hub — everything built for cruise passengers who need to
              return on time.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={siteConfig.shoreExcursionsPath} className="btn-primary sm:text-base">
                Book a Tour
              </Link>
              <Link href="/stavanger-port-guide" className="btn-secondary sm:text-base">
                Stavanger Port Guide
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Check your ship time before booking
            </h2>
            <p className="mb-6 text-base leading-8 text-slate-700 sm:text-lg">
              Match excursions to your arrival and departure times so you can
              enjoy Stavanger and still return before all aboard.
            </p>
            <Link
              href="/ship-schedule"
              className="rounded-full border border-slate-200 bg-surface-muted px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
            >
              Stavanger ship schedule hub
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
