import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";
import {
  formatScheduleDate,
  getStavangerMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
  stavangerScheduleIntegrity,
} from "@/lib/stavanger-schedules";

export const metadata: Metadata = buildPageMetadata({
  title: "Stavanger Cruise Ship Schedule 2026–2027",
  description:
    "Published Stavanger cruise ship calls for 2026 and 2027. Find your ship and date, then plan a realistic day ashore around the harbour or Lysefjord.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getStavangerMonthSummaries();
  const firstLabel = stavangerScheduleIntegrity.firstDate
    ? formatScheduleDate(stavangerScheduleIntegrity.firstDate)
    : "";
  const lastLabel = stavangerScheduleIntegrity.lastDate
    ? formatScheduleDate(stavangerScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Stavanger cruise ship schedule"
      lead={`Published calls for Stavanger from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then choose a city or Lysefjord plan that fits.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Stavanger port day"
      ctaText="Once you know your hours ashore, compare harbour walks with Lysefjord options and return-to-ship buffers."
      ctaHref="/one-day-in-stavanger"
      ctaButtonLabel="Plan your Stavanger day"
      relatedLinks={[
        { label: "Stavanger excursions", href: "/stavanger-shore-excursions" },
        { label: "City or Lysefjord?", href: "/stavanger-city-or-lysefjord" },
        { label: "Port guide", href: "/stavanger-port-guide" },
        { label: "One day in Stavanger", href: "/one-day-in-stavanger" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {stavangerScheduleIntegrity.total} Stavanger calls,{" "}
          {stavangerScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {stavangerScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {stavangerScheduleIntegrity.uniqueShips} ships. No 2028 data is published
          here.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Stavanger</h2>
        <p>
          A short call may suit the harbour and Gamle Stavanger. A longer day can
          support a Lysefjord sailing if the operator timing and your return buffer
          allow it. Arrival and departure alone do not prove a Pulpit Rock hike
          fits. Always leave a clear buffer before all aboard.
        </p>
        <p>
          Continue to the{" "}
          <Link href="/stavanger-city-or-lysefjord">
            city or Lysefjord decision guide
          </Link>
          , <Link href="/stavanger-shore-excursions">excursion options</Link>, or
          the <Link href="/stavanger-port-guide">port guide</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
