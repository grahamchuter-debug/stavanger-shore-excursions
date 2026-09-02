import {
  getStavangerMonthSummaries,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/stavanger-schedules";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/stavanger-shore-excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/lysefjord-cruise",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/stavanger-walking-tour",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/stavanger-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-stavanger",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-stavanger-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-stavanger",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/stavanger-city-or-lysefjord",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: shipScheduleHubPath,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
] as const;

export function getSiteRoutes() {
  const monthRoutes = getStavangerMonthSummaries().map((month) => ({
    path: shipScheduleMonthPath(month.slug),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));
  return [...staticRoutes, ...monthRoutes];
}

/** Static list used where month generation is not needed at import time */
export const siteRoutes = staticRoutes;
