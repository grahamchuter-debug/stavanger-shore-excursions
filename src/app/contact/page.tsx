import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { siteConfig } from "@/lib/site-config";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact Stavanger Shore Excursions for help planning a cruise day in Stavanger harbour or Lysefjord.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <ContentPage
      title="Contact"
      lead="Questions about planning a Stavanger cruise day? Use the planning tools on this site, or write when the destination concierge email is active."
      heroImage={siteImages.portGuide}
      heroImageAlt={imageAlts.portGuide}
      pagePath="/contact"
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
      ctaTitle="Prefer to plan yourself first?"
      ctaText="Use the ship schedule, city-or-Lysefjord guide and excursion pages for immediate answers."
      ctaHref="/ship-schedule"
      ctaButtonLabel="Check ship schedule"
      showShipReassurance={false}
      relatedLinks={[
        { label: "About", href: "/about" },
        { label: "Excursions", href: "/stavanger-shore-excursions" },
        { label: "Privacy", href: "/privacy" },
      ]}
    >
      <section>
        <h2>How we can help</h2>
        <ul>
          <li>Understanding a Stavanger cruise call and time ashore</li>
          <li>Choosing between harbour walks and Lysefjord options</li>
          <li>Finding the right guide page for your day</li>
        </ul>
      </section>

      <section>
        <h2>Stavanger planning concierge</h2>
        {siteConfig.contactEmailVerified ? (
          <>
            <p>
              Email{" "}
              <a href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </p>
            <p>
              We help with Stavanger port-day planning questions. Include your
              cruise dates and approximate hours ashore where relevant.
            </p>
          </>
        ) : (
          <p>
            A destination concierge email for Stavanger Shore Excursions is being
            prepared. In the meantime, use the planning tools on this site: the{" "}
            <Link href="/ship-schedule">ship schedule</Link>,{" "}
            <Link href="/stavanger-city-or-lysefjord">
              city or Lysefjord guide
            </Link>{" "}
            and{" "}
            <Link href="/stavanger-shore-excursions">excursion options</Link>.
          </p>
        )}
      </section>

      <section>
        <h2>What we cannot do</h2>
        <ul>
          <li>Confirm your ship’s official arrival or all aboard time</li>
          <li>Guarantee excursion availability or pricing</li>
          <li>Process bookings or payments on this site</li>
        </ul>
      </section>
    </ContentPage>
  );
}
