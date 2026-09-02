import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const stavangerWalkingTourExcursion: ExcursionData = {
  slug: "stavanger-walking-tour",
  path: "/excursions/stavanger-walking-tour",
  title: "Stavanger Walking Tour",
  headline: "Stavanger Walking Tour for Cruise Passengers",
  lead: "A locally guided Stavanger walking tour designed for cruise passengers who want to see the city on foot: historic Old Town lanes, cathedral, colour street, and harbour views without committing to a long coach or fjord tour.",
  metaTitle: "Stavanger Walking Tour for Cruise Passengers",
  metaDescription:
    "Guided Stavanger walking tour for cruise passengers with 1-hour highlights and 2-hour extended routes. Old Town, cathedral, Valbergtårnet, and return-to-ship friendly timing from Vågen harbour.",
  heroImage: siteImages.gamleStavanger,
  heroImageAlt: imageAlts.gamleStavanger,
  heroBadge: "Ideal when you want the city on foot",
  summary: {
    duration: "1 hour highlights or 2 hour extended walk",
    meetingPoint:
      "Vågen Harbour / Stavanger Tourist Information / Cruise Dock area",
    returnReassurance:
      "Compact city routes with end points near central Stavanger and the cruise port",
    bestFor:
      "Guests with 4–8 hours ashore who prefer walking over coach or fjord tours",
  },
  snapshotCards: [
    { label: "Walk from ship", value: "Often 5–15 minutes to meeting point" },
    { label: "Fitness level", value: "Easy to moderate (some hills)" },
    { label: "Port call suitability", value: "Works from 4 hours in port" },
    { label: "Group style", value: "Small-group guided walk" },
  ],
  gallery: [
    {
      src: siteImages.gamleStavanger,
      alt: imageAlts.gamleStavanger,
    },
    {
      src: siteImages.colorStreet,
      alt: imageAlts.colorStreet,
    },
    {
      src: siteImages.waterfront,
      alt: imageAlts.waterfront,
    },
    {
      src: siteImages.portGuide,
      alt: "Aerial view of Stavanger cruise port and Old Town within walking distance of the gangway",
    },
  ],
  highlights: [
    "Designed specifically for cruise passengers with limited port time",
    "See Gamle Stavanger, cathedral, and Stavanger's famous colour street",
    "Harbour and viewpoint stops without long coach transfers",
    "Choose a 1-hour highlights walk or a 2-hour extended city route",
    "Ends near central Stavanger and the cruise port area",
  ],
  description: [
    "Not every Stavanger port day needs a fjord cruise. This walking tour suits cruise guests who want authentic city storytelling on foot: cobbled Old Town lanes, harbour life, and landmarks you can reach quickly from Vågen.",
    "Your guide paces the route for ship schedules, with clear meeting instructions at the harbour or tourist information area. The one-hour option covers the essentials; the two-hour extended walk adds viewpoints, street art, and waterfront stretches toward Hundvåg Bridge.",
    "Because the tour stays in central Stavanger, it pairs well with an afternoon Lysefjord sailing on longer port days, or stands alone when your ship has only a half-day ashore.",
  ],
  durationOptions: [
    {
      title: "1 hour highlights walk",
      duration: "Approx. 1 hour",
      startingPoint:
        "Vågen Harbour / Stavanger Tourist Information / Cruise Dock",
      stops: [
        "Vågen Harbour meeting point",
        "Gamle Stavanger / Old Town",
        "Breiavatnet",
        "Stavanger Cathedral",
        "Valbergtårnet / Vålberget Viewpoint",
        "Øvre Holmegate / Fargegaten / Color Street",
        "Fiskepiren and exterior of the Norwegian Petroleum Museum",
      ],
      tourEnd: "Central Stavanger / cruise port area",
    },
    {
      title: "2 hour extended city walk",
      duration: "Approx. 2 hours",
      startingPoint:
        "Vågen Harbour / Stavanger Tourist Information / Cruise Dock",
      stops: [
        "Full 1-hour highlights route",
        "Vålandstårnet Viewpoint",
        "Storhaug District",
        "St. Petri Church / Red Church",
        "Storhaug murals and street art",
        "Walk toward Hundvåg Bridge",
        "Waterfront views",
        "Return toward central Stavanger / cruise port",
      ],
      tourEnd: "Central Stavanger / cruise port area",
    },
  ],
  included: [
    "Locally guided walking tour in English",
    "Route tailored for cruise passenger port times",
    "Insider commentary on Old Town and harbour history",
  ],
  notIncluded: [
    "Museum admission (exterior stops only unless noted)",
    "Food, drinks, and personal shopping",
    "Transport to meeting point from distant berths",
    "Travel insurance or personal expenses",
  ],
  timingAdvice: [
    "Choose the 1-hour walk if your ship is in port roughly 4–6 hours; pick the 2-hour route when you have 6+ hours and want deeper neighbourhood coverage.",
    "Wear comfortable shoes. Old Town cobbles and viewpoint steps can be uneven.",
    "Allow 30–45 minutes after the tour ends to reach your gangway before all aboard.",
    "If rain is forecast, bring a light jacket; coastal weather changes quickly in Stavanger.",
  ],
  faqs: [
    {
      question: "Which walking tour duration should cruise passengers choose?",
      answer:
        "Pick the 1-hour highlights walk for shorter port calls or when you plan a fjord cruise the same day. Choose the 2-hour extended route when you have at least six hours ashore and want viewpoints, street art, and waterfront sections.",
    },
    {
      question: "Where does the Stavanger walking tour meet?",
      answer:
        "Tours typically meet at Vågen Harbour, near Stavanger Tourist Information or the cruise dock area. Your voucher confirms the exact pin. Screenshot it before leaving the ship.",
    },
    {
      question: "Is the walking tour suitable for mobility-limited guests?",
      answer:
        "The route includes cobblestones, hills to Valbergtårnet, and stairs at some viewpoints. Contact the operator before booking if you need a step-reduced variant.",
    },
    {
      question: "Will I get back to my cruise ship on time?",
      answer:
        "Guides pace tours for typical port schedules, but you are responsible for meeting all-aboard. Build a 30–45 minute buffer after the tour ends near the cruise port.",
    },
    {
      question: "Can I combine the walking tour with a Lysefjord cruise?",
      answer:
        "Yes on longer port days. Run the walking tour first, then board an afternoon fjord sailing, or reverse the order if your cruise arrives early and the cruise departs mid-morning.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Shore Excursions", href: "/stavanger-shore-excursions" },
    { label: "Stavanger Walking Tour" },
  ],
  relatedLinks: [
    { label: "Lysefjord Cruise", href: "/excursions/lysefjord-cruise" },
    { label: "Stavanger port guide", href: "/stavanger-port-guide" },
    { label: "One day in Stavanger", href: "/one-day-in-stavanger" },
  ],
  bookingHref: "/stavanger-shore-excursions",
  bookingLabel: "Explore Stavanger excursions",
  ctaTitle: "Ready to explore Stavanger on foot?",
  ctaText:
    "Choose your duration, confirm meeting times for your ship, and keep enough buffer to return before all aboard.",
};
