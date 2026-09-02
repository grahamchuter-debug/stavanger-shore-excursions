import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

export const metadata: Metadata = buildPageMetadata({
  title: "Stavanger City or Lysefjord from a Cruise Ship?",
  description:
    "Decide whether to spend your Stavanger cruise day in the harbour and Gamle Stavanger, take a Lysefjord cruise, or consider a Preikestolen hike only with careful timing evidence.",
  path: "/stavanger-city-or-lysefjord",
});

const faqs = [
  {
    question: "Is Pulpit Rock the same as Preikestolen?",
    answer:
      "Yes. Pulpit Rock is the English name for Preikestolen, the famous plateau above Lysefjord. Seeing it from the water and hiking to the top are different experiences.",
  },
  {
    question: "Can I see Pulpit Rock without hiking?",
    answer:
      "A Lysefjord sightseeing cruise can give fjord perspectives toward the Pulpit Rock area from below. That sailing does not take you onto the plateau.",
  },
  {
    question: "Is a Preikestolen hike realistic on a cruise call?",
    answer:
      "Only if genuine product timing, transport and your own fitness support a safe return. Published ship arrival and departure alone are not enough. Check timings carefully before choosing any hiking option.",
  },
  {
    question: "Is Stavanger itself worth exploring?",
    answer:
      "Yes for many passengers. The harbour, Gamle Stavanger and the compact centre work well when you want less transfer risk or a shorter call.",
  },
] as const;

export default function StavangerCityOrLysefjordPage() {
  return (
    <ContentPage
      title="Stavanger city or Lysefjord?"
      lead="The main cruise-day decision in Stavanger: stay around the harbour and Old Town, sail into Lysefjord, or treat a Preikestolen hike as a separate, carefully checked option."
      heroImage={siteImages.lysefjordPanorama}
      heroImageAlt={imageAlts.lysefjordPanorama}
      pagePath="/stavanger-city-or-lysefjord"
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "City or Lysefjord?" },
      ]}
      faqs={faqs}
      ctaTitle="Check your hours, then choose"
      ctaText="Look up your ship call, then explore harbour or Lysefjord options that fit a realistic buffer."
      ctaHref="/ship-schedule"
      ctaButtonLabel="Check Stavanger ship schedule"
      relatedLinks={[
        { label: "One day in Stavanger", href: "/one-day-in-stavanger" },
        { label: "Lysefjord cruise", href: "/excursions/lysefjord-cruise" },
        { label: "Walking tour", href: "/excursions/stavanger-walking-tour" },
        { label: "Port guide", href: "/stavanger-port-guide" },
      ]}
    >
      <section>
        <h2>Start with time, not a wishlist</h2>
        <p>
          Arrival, departure and all aboard set the shape of the day. A longer
          call can support a Lysefjord sailing when operator timings allow. A
          shorter call usually favours the harbour and Gamle Stavanger.{" "}
          <Link href="/ship-schedule">Check your Stavanger ship schedule</Link>{" "}
          before locking a plan.
        </p>
      </section>

      <section>
        <h2>Choose the city when</h2>
        <ul>
          <li>You have a shorter call and want less transfer risk</li>
          <li>Harbour atmosphere, Gamle Stavanger and local streets matter most</li>
          <li>You prefer flexible walking over a fixed sailing window</li>
          <li>Weather is unsettled and you want short, adjustable walks</li>
        </ul>
        <p>
          Useful next steps:{" "}
          <Link href="/excursions/stavanger-walking-tour">walking tour</Link>,{" "}
          <Link href="/stavanger-port-guide">port guide</Link>, or{" "}
          <Link href="/one-day-in-stavanger">one day in Stavanger</Link>.
        </p>
      </section>

      <section>
        <h2>Choose a Lysefjord sailing when</h2>
        <ul>
          <li>You have enough hours for the full outing plus a return buffer</li>
          <li>Scenery is the priority over museum or shopping time</li>
          <li>You are comfortable committing to a fixed sailing window</li>
          <li>You want Pulpit Rock context from the water, not a plateau hike</li>
        </ul>
        <p>
          The main existing option on this site is the{" "}
          <Link href="/excursions/lysefjord-cruise">Lysefjord cruise</Link>.
          Confirm meeting point, duration and latest return timing with the
          operator.
        </p>
      </section>

      <section>
        <h2>Seeing Pulpit Rock versus hiking Preikestolen</h2>
        <p>
          These are not interchangeable. A fjord cruise may offer views toward
          the plateau from below. Hiking Preikestolen means inland travel, trail
          time, physical demand and a reliable return path to the ship. Do not
          assume your ship is in port long enough for the hike based only on
          arrival and departure times.
        </p>
        <p>
          If you are considering a hiking option, check the timings carefully
          before choosing it. Transport availability, seasonal operation and
          trail conditions need separate confirmation beyond this site&apos;s
          schedule data.
        </p>
      </section>

      <section>
        <h2>Combining city and fjord</h2>
        <p>
          Some longer calls can support a harbour morning and a scenic sailing,
          or a sailing plus a short walk. Do not assume a combination fits from
          the ship timetable alone. Check excursion duration and leave margin
          before all aboard.
        </p>
        <p>
          For a structured overview, see{" "}
          <Link href="/one-day-in-stavanger">one day in Stavanger</Link> and the{" "}
          <Link href="/stavanger-shore-excursions">shore excursions guide</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
