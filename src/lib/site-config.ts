import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Stavanger Shore Excursions",
  url: "https://stavangershoreexcursions.com",
  locale: "en_GB",
  tagline: "Harbour city, Lysefjord gateway, cruise-day planning",
  defaultDescription:
    "Independent Stavanger cruise-port planning: harbour and Gamle Stavanger, Lysefjord sailings, Pulpit Rock context, and published ship schedules for your day ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Stavanger Shore Excursions",
  shoreExcursionsPath: "/stavanger-shore-excursions",
  plannerPath: "/one-day-in-stavanger",
  schedulePath: "/ship-schedule",
  decisionPath: "/stavanger-city-or-lysefjord",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@stavangershoreexcursions.com",
  /** Cloudflare Email Routing active: hello@ → info@wowatour.com */
  contactEmailVerified: true,
} as const;
