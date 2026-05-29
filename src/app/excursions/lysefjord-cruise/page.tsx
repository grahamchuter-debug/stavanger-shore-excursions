import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { lysefjordCruiseExcursion } from "@/lib/excursions/lysefjord-cruise";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: lysefjordCruiseExcursion.metaTitle,
  description: lysefjordCruiseExcursion.metaDescription,
  path: lysefjordCruiseExcursion.path,
  ogImage: lysefjordCruiseExcursion.heroImage,
  ogImageAlt: lysefjordCruiseExcursion.heroImageAlt,
});

export default function LysefjordCruisePage() {
  return <ExcursionDetailPage excursion={lysefjordCruiseExcursion} />;
}
