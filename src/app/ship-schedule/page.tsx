import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/json-ld";
import { ShipScheduleShell } from "@/components/ship-schedule-shell";
import { buildPageMetadata } from "@/lib/site-metadata";
import { shipScheduleHub } from "@/lib/ship-schedule-months";
import { buildWebPageSchema } from "@/lib/site-schema";
import { siteConfig } from "@/lib/site-config";

const pageMeta = {
  title: shipScheduleHub.title,
  description: shipScheduleHub.description,
  path: shipScheduleHub.path,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

export default function ShipScheduleHubPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageSchema({
            path: pageMeta.path,
            title: `${pageMeta.title} | ${siteConfig.name}`,
            description: pageMeta.description,
          }),
        ]}
      />
      <ShipScheduleShell
        title="Stavanger Cruise Ship Schedule"
        lead="A dedicated Stavanger cruise ship schedule hub is coming soon. Use your cruise line app for confirmed port times today, then plan excursions with return-to-ship friendly margins."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Ship Schedule" },
        ]}
      >
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-2xl border border-slate-200 border-l-[3px] border-l-[var(--norway-red)] bg-white px-5 py-4 text-slate-800 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wide">
                Schedule data coming soon
              </p>
              <p className="mt-2 text-base leading-7">
                Monthly Stavanger cruise ship timetables — arrivals, departures,
                and busy port days — will be published here. Until then, confirm
                all times on your cruise line app and use our port planning tools
                below.
              </p>
            </div>

            <p className="text-base leading-7 text-slate-700 sm:text-lg">
              Stavanger is one of Norway&apos;s busiest cruise ports. Knowing
              when your ship arrives and leaves helps you choose between a
              Lysefjord cruise, a walking tour of Gamle Stavanger, or independent
              harbour time without risking a late return to the gangway.
            </p>

            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  href={siteConfig.shoreExcursionsPath}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
                >
                  Shore excursions
                </Link>
              </li>
              <li>
                <Link
                  href="/stavanger-port-guide"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
                >
                  Stavanger port guide
                </Link>
              </li>
              <li>
                <Link
                  href="/one-day-in-stavanger"
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:border-[var(--norway-blue)] hover:text-[var(--norway-blue)]"
                >
                  One day in Stavanger
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </ShipScheduleShell>
    </>
  );
}
