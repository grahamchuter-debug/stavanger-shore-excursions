import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Stavanger Shore Excursions",
  url: "https://stavangershoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Stavanger cruise port guides and shore excursion planning for passengers visiting Norway's Lysefjord and historic harbour city.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Stavanger Shore Excursions",
  shoreExcursionsPath: "/stavanger-shore-excursions",
} as const;
