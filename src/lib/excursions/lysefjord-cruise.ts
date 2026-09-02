import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const lysefjordCruiseExcursion: ExcursionData = {
  slug: "lysefjord-cruise",
  path: "/excursions/lysefjord-cruise",
  title: "Lysefjord Cruise",
  headline: "Lysefjord Cruise Shore Excursion from Stavanger",
  lead: "Cruise from Stavanger into the dramatic Lysefjord on a scenic Rodne-style fjord sailing designed for cruise passengers: steep cliffs, waterfalls, island scenery, and views toward the famous Pulpit Rock area with return-to-ship friendly timing.",
  metaTitle: "Lysefjord Cruise Shore Excursion from Stavanger",
  metaDescription:
    "Lysefjord cruise shore excursion from Stavanger for cruise passengers. Scenic fjord sailing near the harbour with return-to-ship timing advice and cruise-friendly durations.",
  heroImage: siteImages.lysefjordCruise,
  heroImageAlt: imageAlts.lysefjordCruise,
  heroBadge: "Headline scenic option for Stavanger cruise passengers",
  summary: {
    duration: "Approx. 3–3.5 hours",
    meetingPoint:
      "Central Stavanger / harbour area, close to Vågen and cruise dock",
    returnReassurance:
      "Timed for typical Stavanger port calls with buffer before all aboard",
    bestFor:
      "First-time visitors, photographers, and guests wanting a classic Stavanger fjord experience",
  },
  snapshotCards: [
    { label: "Walk from ship", value: "Often 10–20 minutes to departure" },
    { label: "Fitness level", value: "Easy" },
    { label: "Port call suitability", value: "Ideal for 6–10 hour visits" },
    { label: "Availability", value: "Popular May–September" },
  ],
  gallery: [
    {
      src: siteImages.lysefjordCruise,
      alt: imageAlts.lysefjordCruise,
    },
    {
      src: siteImages.lysefjordPanorama,
      alt: imageAlts.lysefjordPanorama,
    },
    {
      src: siteImages.portGuide,
      alt: "Aerial view of Stavanger harbour where Lysefjord cruise boats depart near the cruise ship berth",
    },
    {
      src: siteImages.waterfront,
      alt: imageAlts.waterfront,
    },
  ],
  highlights: [
    "Classic Stavanger fjord experience on Lysefjord waters",
    "Ideal for cruise passengers with limited port time",
    "Departs close to central Stavanger and the harbour area",
    "Scenic landscapes: cliffs, waterfalls, islands, and Pulpit Rock views",
    "Strong choice for first-time visitors to southwest Norway",
  ],
  description: [
    "The Lysefjord cruise is the headline scenic shore excursion for cruise passengers calling at Stavanger. From the harbour area you board a sightseeing vessel and enter one of Norway's most dramatic fjords: sheer rock walls, waterfalls, and open water views toward the Pulpit Rock plateau.",
    "Rodne Fjord Cruise and similar operators run popular sailings from central Stavanger, making this an efficient choice when you want signature fjord scenery without a long coach transfer. Commentary on board helps you spot landmarks and understand the geology that makes Lysefjord famous worldwide.",
    "Because Stavanger is a major cruise hub, departures are planned with port-day timing in mind. That makes the Lysefjord cruise a strong fit when you want a return-to-ship friendly experience rather than a full-day expedition inland.",
  ],
  included: [
    "Scenic Lysefjord cruise from Stavanger",
    "On-board commentary during the sailing",
    "Standard seating on the sightseeing vessel",
  ],
  notIncluded: [
    "Food and drinks on board unless stated by operator",
    "Hotel or ship transfers beyond the meeting point",
    "Optional premium seating or upgrades",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "Check your cruise line app for arrival, all-aboard, and departure times before booking. Treat all-aboard, not published departure, as your hard deadline.",
    "Allow 30–45 minutes after the excursion ends to walk back to the gangway, clear any pier queues, and board without stress.",
    "On busy summer days when several ships visit Stavanger, disembark early and head straight to the harbour meeting point.",
    "Compare your ship's hours in port with our ship schedule hub when monthly timetables are published.",
  ],
  faqs: [
    {
      question: "How long is the Lysefjord cruise shore excursion from Stavanger?",
      answer:
        "Most Rodne-style Lysefjord sailings take around three to three-and-a-half hours including boarding and disembarkation. Exact duration depends on the operator and daily timetable.",
    },
    {
      question: "Will I get back to my cruise ship on time?",
      answer:
        "This excursion is designed for typical Stavanger port calls, but only your cruise line confirms all-aboard time. Build a personal buffer of 30–45 minutes and monitor your ship's app throughout the day.",
    },
    {
      question: "Where does the Lysefjord cruise depart in Stavanger?",
      answer:
        "Boats typically depart from the central harbour area near Vågen, within walking distance of most cruise berths. Follow signage from the gangway or your voucher to the correct quay.",
    },
    {
      question: "Can I see Pulpit Rock from the cruise?",
      answer:
        "You enjoy fjord perspectives toward the Pulpit Rock area from the water. The plateau itself is not visited on this sailing; it requires a separate hiking excursion inland.",
    },
    {
      question: "Should cruise passengers arrange the Lysefjord cruise in advance?",
      answer:
        "On peak summer days Stavanger receives heavy cruise traffic, and popular sailing times can sell out with operators. Arranging ahead helps you lock a preferred departure and plan your return buffer.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shore Excursions", href: "/stavanger-shore-excursions" },
    { label: "Lysefjord Cruise" },
  ],
  relatedLinks: [
    { label: "Ship schedule", href: "/ship-schedule" },
    { label: "Stavanger port guide", href: "/stavanger-port-guide" },
    { label: "One day in Stavanger", href: "/one-day-in-stavanger" },
  ],
  bookingHref: "/stavanger-shore-excursions",
  bookingLabel: "Explore Stavanger excursions",
  ctaTitle: "Ready to explore Lysefjord options from Stavanger?",
  ctaText:
    "Review this sailing against your hours ashore, then compare other cruise-friendly Stavanger ideas on the excursions guide.",
};
