import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { stavangerWalkingTourExcursion } from "@/lib/excursions/stavanger-walking-tour";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: stavangerWalkingTourExcursion.metaTitle,
  description: stavangerWalkingTourExcursion.metaDescription,
  path: stavangerWalkingTourExcursion.path,
  ogImage: stavangerWalkingTourExcursion.heroImage,
  ogImageAlt: stavangerWalkingTourExcursion.heroImageAlt,
});

export default function StavangerWalkingTourPage() {
  return <ExcursionDetailPage excursion={stavangerWalkingTourExcursion} />;
}
