import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

export const metadata: Metadata = buildPageMetadata({
  title: "About Stavanger Shore Excursions",
  description:
    "About Stavanger Shore Excursions: independent cruise-port planning for Stavanger harbour, Lysefjord and published ship schedules.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ContentPage
      title="About Stavanger Shore Excursions"
      lead="An independent planning site for cruise passengers calling at Stavanger. Harbour context, Lysefjord ideas, Pulpit Rock clarification and published ship schedules."
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath="/about"
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About" },
      ]}
      ctaTitle="Start with your Stavanger day"
      ctaText="Check the ship schedule, then decide city or Lysefjord and explore excursion options."
      ctaHref="/ship-schedule"
      ctaButtonLabel="Check ship schedule"
      showShipReassurance={false}
      relatedLinks={[
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ]}
    >
      <section>
        <h2>What this site is</h2>
        <p>
          Stavanger Shore Excursions helps cruise passengers plan a realistic day
          in Stavanger: harbour walks, Gamle Stavanger, Lysefjord sailings and
          published ship-call information drawn from the Norway Shore Excursions
          master schedule.
        </p>
      </section>

      <section>
        <h2>What this site is not</h2>
        <ul>
          <li>Not a cruise line or port authority</li>
          <li>Not an official tourism board</li>
          <li>Not a live booking checkout</li>
          <li>Not a guarantee of berth, timings or tour availability</li>
        </ul>
      </section>

      <section>
        <h2>National context</h2>
        <p>
          For multi-port Norway planning, see{" "}
          <a href={siteConfig.nationalAuthorityUrl}>Norway Shore Excursions</a>.
          This site stays focused on Stavanger.
        </p>
        <p>
          <Link href="/contact">Contact</Link>
          {" · "}
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
        </p>
      </section>
    </ContentPage>
  );
}
