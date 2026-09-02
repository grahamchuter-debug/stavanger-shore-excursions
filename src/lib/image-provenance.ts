/**
 * Image provenance registry for Stavanger Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED here without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status: "KEEP" | "REPLACE" | "WRONG_LOCATION" | "PROVENANCE_UNKNOWN" | "BROKEN";
  notes: string;
  licence?: string;
};

export const stavangerImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath: "/images/stavanger-hero.png",
    status: "KEEP",
    notes:
      "Local raster already in repo; Stavanger harbour / Vågen context. Exact licence provenance unknown; flag for rights confirmation before commercial hardening.",
    licence: "PROVENANCE_UNKNOWN. local asset",
  },
  {
    key: "portGuide",
    urlOrPath: "/images/stavanger-port-guide.png",
    status: "KEEP",
    notes: "Local aerial harbour / Gamle Stavanger context. Provenance unknown.",
  },
  {
    key: "worthVisiting",
    urlOrPath: "/images/is-stavanger-worth-visiting.png",
    status: "KEEP",
    notes: "Local Lysefjord panorama asset. Provenance unknown.",
  },
  {
    key: "lysefjordCruise",
    urlOrPath: "/images/lysefjord-cruise.png",
    status: "KEEP",
    notes:
      "Preikestolen / Pulpit Rock plateau view used for Lysefjord cruise context. Note: image shows the plateau (hiking viewpoint), not only a boat-deck view. Acceptable as Lysefjord landmark context; do not imply the cruise lands on the plateau.",
  },
  {
    key: "gamleStavanger",
    urlOrPath: "/images/stavanger-walking-tour.png",
    status: "KEEP",
    notes: "Local Old Town cobbles asset. Provenance unknown.",
  },
  {
    key: "colorStreet",
    urlOrPath: "/images/color-street.jpg",
    status: "KEEP",
    notes: "Local Øvre Holmegate / Fargegaten asset. Provenance unknown.",
  },
] as const;
