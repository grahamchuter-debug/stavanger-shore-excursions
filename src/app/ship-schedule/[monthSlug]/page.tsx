import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";
import {
  formatMonthLabel,
  getStavangerEntriesForMonthKey,
  getStavangerMonthKeysWithCalls,
  getStavangerMonthSummaries,
  monthKeyToSlug,
  monthSlugToKey,
  scheduleDisclaimer,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/stavanger-schedules";

type MonthPageProps = {
  params: Promise<{ monthSlug: string }>;
};

export function generateStaticParams() {
  return getStavangerMonthKeysWithCalls().map((monthKey) => ({
    monthSlug: monthKeyToSlug(monthKey),
  }));
}

export async function generateMetadata({
  params,
}: MonthPageProps): Promise<Metadata> {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) return {};
  const label = formatMonthLabel(monthKey);
  return buildPageMetadata({
    title: `Stavanger Cruise Schedule: ${label}`,
    description: `Published cruise ship calls in Stavanger for ${label}. Check arrival and departure times, then plan harbour or Lysefjord options that fit your hours ashore.`,
    path: shipScheduleMonthPath(monthSlug),
  });
}

export default async function StavangerShipScheduleMonthPage({
  params,
}: MonthPageProps) {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) notFound();

  const entries = getStavangerEntriesForMonthKey(monthKey);
  if (entries.length === 0) notFound();

  const label = formatMonthLabel(monthKey);
  const otherMonths = getStavangerMonthSummaries().filter(
    (m) => m.slug !== monthSlug,
  );

  return (
    <ContentPage
      title={`Stavanger cruise schedule: ${label}`}
      lead={`${entries.length} published ship call${entries.length === 1 ? "" : "s"} for ${label}. Find your vessel, note arrival and departure, then choose a realistic Stavanger plan.`}
      heroImage={siteImages.waterfront}
      heroImageAlt={imageAlts.waterfront}
      pagePath={shipScheduleMonthPath(monthSlug)}
      pageDescription={`Stavanger cruise ship schedule for ${label}.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule", href: shipScheduleHubPath },
        { label },
      ]}
      ctaTitle="Plan your Stavanger port day"
      ctaText="Use your hours ashore to choose between harbour walking and a Lysefjord sailing, with a clear return buffer."
      ctaHref="/one-day-in-stavanger"
      ctaButtonLabel="Plan your Stavanger day"
      relatedLinks={[
        { label: "All months", href: shipScheduleHubPath },
        { label: "Explore excursions", href: "/stavanger-shore-excursions" },
        { label: "City or Lysefjord?", href: "/stavanger-city-or-lysefjord" },
        { label: "Port guide", href: "/stavanger-port-guide" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
      </section>

      <section>
        <h2>{label} ship calls</h2>
        <ShipScheduleTable entries={entries} />
      </section>

      <section>
        <h2>Next: turn your date into a plan</h2>
        <p>
          Once you know roughly how long you have ashore, decide whether to stay
          in Stavanger or head into Lysefjord. These pages help without inventing
          exact tour-fit guarantees from arrival times alone.
        </p>
        <ul>
          <li>
            <Link href="/stavanger-city-or-lysefjord">
              Stavanger city or Lysefjord?
            </Link>
          </li>
          <li>
            <Link href="/stavanger-shore-excursions">
              Stavanger excursion options
            </Link>
          </li>
          <li>
            <Link href="/stavanger-port-guide">Stavanger cruise port guide</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Stavanger months</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link href={shipScheduleMonthPath(month.slug)}>
                {month.label} · {month.callCount} calls
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
