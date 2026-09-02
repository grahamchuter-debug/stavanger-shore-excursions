import type { Metadata } from "next";
import Link from "next/link";

import { CruisePortDayPlanner } from "@/components/cruise-port-day-planner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TourCard } from "@/components/tour-card";
import { siteConfig } from "@/lib/site-config";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";
import {
  buildFaqSchema,
  buildItemListSchema,
  buildWebPageSchema,
} from "@/lib/site-schema";
import {
  formatScheduleDate,
  stavangerScheduleIntegrity,
} from "@/lib/stavanger-schedules";
import { stavangerTourCards, stavangerTourListItems } from "@/lib/stavanger-tours";

const pageMeta = {
  title: "Stavanger Shore Excursions | Cruise Port Day Planning",
  description:
    "Your cruise ship is calling at Stavanger. Compare a harbour city day with Lysefjord sailings, understand Pulpit Rock in context, and check published ship schedules.",
  path: "/",
} as const;

export const metadata: Metadata = buildPageMetadata({
  ...pageMeta,
  ogImage: siteImages.hero,
  ogImageAlt: imageAlts.hero,
  absoluteTitle: true,
});

const homeFaqs = [
  {
    question: "Is this site for cruise passengers calling at Stavanger?",
    answer:
      "Yes. This is an independent Stavanger cruise-port planning site. It helps you understand the harbour day, check published ship calls and explore excursion ideas. Confirm final timings with your cruise line.",
  },
  {
    question: "Should I stay in Stavanger or go to Lysefjord?",
    answer:
      "It depends on time ashore and what you want from the day. The harbour and Gamle Stavanger suit a city focus. A Lysefjord cruise is the main scenic sailing option on this site. Seeing Pulpit Rock from the water is not the same as hiking Preikestolen. Use the city-or-Lysefjord guide and your ship schedule before deciding.",
  },
  {
    question: "Can I hike Pulpit Rock on a cruise call?",
    answer:
      "Hiking Preikestolen is a different day from a harbour walk or a Lysefjord sightseeing cruise. Schedule duration alone does not prove a hike fits. Check travel time, trail time, fitness and return buffer carefully before choosing any hiking option.",
  },
  {
    question: "Can I book shore excursions on this site?",
    answer:
      "This site is for planning and discovery. There is no live booking checkout here. Use the excursion pages and guides to understand options, then arrange tours through operators or your usual booking channel.",
  },
] as const;

export default function Home() {
  const firstLabel = stavangerScheduleIntegrity.firstDate
    ? formatScheduleDate(stavangerScheduleIntegrity.firstDate)
    : "";
  const lastLabel = stavangerScheduleIntegrity.lastDate
    ? formatScheduleDate(stavangerScheduleIntegrity.lastDate)
    : "";

  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: pageMeta.title,
            description: pageMeta.description,
          }),
          buildItemListSchema(stavangerTourListItems),
          buildFaqSchema(homeFaqs),
        ]}
      />
      <main>
        <PageHero
          image={siteImages.hero}
          imageAlt={imageAlts.hero}
          className="min-h-[28rem] md:min-h-[32rem]"
        >
          <p className="hero-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
            {siteConfig.name}
          </p>
          <h1 className="font-display mb-5 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Your cruise ship is calling at Stavanger. What should you do with the
            day?
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Harbour city, Lysefjord gateway and Pulpit Rock context for cruise
            passengers, with published ship schedules through 2027.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={siteConfig.shoreExcursionsPath}
              className="btn-primary w-full justify-center sm:w-auto"
            >
              Explore Stavanger excursions
            </Link>
            <Link
              href="/ship-schedule"
              className="btn-secondary w-full justify-center sm:w-auto"
            >
              Check your ship schedule
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Your day in Stavanger</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Stay in the city, or head into Lysefjord?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Most cruise passengers face this choice first. Neither is
              automatically better. Hours ashore, pace and whether you want
              harbour streets or fjord scenery decide it.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Stay in Stavanger
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Vågen harbour, Gamle Stavanger and the compact centre. Sensible
                  when time is short or you prefer walking over a fixed sailing.
                </p>
                <Link
                  href="/stavanger-city-or-lysefjord"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  City day guidance
                </Link>
              </div>
              <div className="border-t border-[var(--border-light)] pt-5">
                <h3 className="font-display text-xl font-semibold text-slate-900">
                  Head into Lysefjord
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  A scenic fjord cruise is the main harbour-based option on this
                  site. You may see Pulpit Rock from below. That is not the same
                  as hiking Preikestolen.
                </p>
                <Link
                  href="/excursions/lysefjord-cruise"
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
                >
                  Lysefjord cruise
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Find your ship</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Check when your ship is in Stavanger
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              {stavangerScheduleIntegrity.total} published Stavanger calls from{" "}
              {firstLabel} to {lastLabel}. Arrival and departure times shape what
              is realistic ashore. Always confirm with your cruise line.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/ship-schedule" className="btn-outline-dark">
                Open Stavanger ship schedule
              </Link>
              <Link
                href="/stavanger-city-or-lysefjord"
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
              >
                Then decide city or Lysefjord
              </Link>
            </div>
          </div>
        </section>

        <section id="tours" className="scroll-mt-24 py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Excursion options</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Stavanger ideas that match a cruise day
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Two genuine options on this site: a Lysefjord sailing and a city
              walking tour. Durations are approximate. Keep a return buffer.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {stavangerTourCards.map((tour) => (
                <TourCard key={tour.href} {...tour} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Pulpit Rock, clearly</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Seeing Pulpit Rock is not hiking Preikestolen
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Pulpit Rock and Preikestolen are the same plateau. A Lysefjord
              cruise can offer views from the water. Hiking to the top is a
              separate inland outing with its own travel, trail and timing
              demands. Do not treat them as interchangeable for a port day.
            </p>
            <Link
              href="/stavanger-city-or-lysefjord"
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
            >
              Read the full decision guide
            </Link>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">First time in Stavanger</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Useful planning guides
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/stavanger-port-guide",
                  title: "Cruise port guide",
                  text: "Harbour orientation and how berth location affects walking and excursions.",
                },
                {
                  href: "/one-day-in-stavanger",
                  title: "One day in Stavanger",
                  text: "A practical port-day shape for city time, fjord time and return buffers.",
                },
                {
                  href: "/is-stavanger-worth-visiting",
                  title: "Is Stavanger worth visiting?",
                  text: "Honest context for passengers choosing how to spend limited hours ashore.",
                },
              ].map((item) => (
                <li
                  key={item.href}
                  className="border-t border-[var(--border-light)] pt-5"
                >
                  <h3 className="font-display text-lg font-semibold text-slate-900">
                    <Link
                      href={item.href}
                      className="underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-surface-muted py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Port-day planning</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Think in hours, pace and return buffer
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Use published times as a planning start, then leave margin before
              all aboard. This planner helps you think through the day. It does
              not invent a guaranteed excursion fit.
            </p>
            <div className="mt-8">
              <CruisePortDayPlanner />
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Return to ship</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Plan the walk back before you leave the gangway
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Your cruise line sets all aboard. Build your own buffer after any
              excursion ends. Pier queues and weather can slow a short walk more
              than you expect.
            </p>
          </div>
        </section>

        <section className="border-y border-[var(--border-light)] bg-[var(--surface)] py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="section-eyebrow">Norway beyond Stavanger</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Planning other Norwegian ports?
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              For multi-port itineraries, the national planning site covers the
              wider Norway cruise picture.
            </p>
            <a
              href={siteConfig.nationalAuthorityUrl}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--fjord)] underline-offset-4 hover:underline"
            >
              Norway Shore Excursions
            </a>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="font-display mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Stavanger cruise questions
            </h2>
            <dl className="mt-8 space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-6 text-slate-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-[var(--border-light)] bg-navy py-14 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Stavanger planning concierge
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {siteConfig.contactEmailVerified
                ? `Questions about shaping a Stavanger port day? Email ${siteConfig.contactEmail}.`
                : "A destination email is being prepared. Until then, use the schedule, decision guide and excursion pages on this site."}
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
