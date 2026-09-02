import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ShipScheduleBreadcrumbs } from "@/components/ship-schedule-breadcrumbs";
import { imageAlts, siteImages } from "@/lib/site-images";
import { siteConfig } from "@/lib/site-config";

type ShipScheduleShellProps = {
  title: string;
  lead: string;
  breadcrumbs: { label: string; href?: string }[];
  children: React.ReactNode;
  showReassurance?: boolean;
  ctaTitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function ShipScheduleShell({
  title,
  lead,
  breadcrumbs,
  children,
  showReassurance = true,
  ctaTitle = "See tours timed perfectly for your cruise visit",
  ctaHref = siteConfig.shoreExcursionsPath,
  ctaLabel = "View shore excursions",
}: ShipScheduleShellProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ShipScheduleBreadcrumbs items={breadcrumbs} />

      <PageHero image={siteImages.portGuide} imageAlt={imageAlts.portGuide}>
        <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-base leading-7 text-white/90 sm:text-lg">
          {lead}
        </p>
        {showReassurance ? (
          <p className="badge-accent-red mt-5 inline-flex rounded-full px-4 py-1.5 text-xs font-medium text-white/95 backdrop-blur-sm sm:text-sm">
            Return to ship on time. Cruise passenger friendly.
          </p>
        ) : null}
      </PageHero>

      {children}

      <section className="border-y bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">{ctaTitle}</h2>
          <Link href={ctaHref} className="btn-primary mt-6 sm:px-8 sm:py-3.5 sm:text-base">
            {ctaLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
