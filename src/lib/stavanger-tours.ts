import { imageAlts, siteImages } from "@/lib/site-images";

export const stavangerTourCards = [
  {
    href: "/excursions/lysefjord-cruise",
    image: siteImages.lysefjordCruise,
    imageAlt: imageAlts.lysefjordCruiseCard,
    title: "Lysefjord cruise",
    description:
      "Scenic sailing from the harbour into Lysefjord. Views toward the Pulpit Rock area from the water, not a hike onto the plateau.",
    accent: "blue" as const,
  },
  {
    href: "/excursions/stavanger-walking-tour",
    image: siteImages.gamleStavanger,
    imageAlt: imageAlts.walkingTourCard,
    title: "Stavanger walking tour",
    description:
      "Guided harbour and Old Town walking for cruise passengers who want the city on foot, with compact timings near Vågen.",
    accent: "red" as const,
  },
] as const;

export const stavangerTourListItems = [
  {
    name: "Lysefjord Cruise",
    description:
      "Headline scenic fjord cruise from Stavanger harbour into Lysefjord landscapes.",
  },
  {
    name: "Stavanger Walking Tour",
    description:
      "Guided Old Town and city walk for cruise passengers from Vågen harbour.",
  },
] as const;
