export const siteRoutes = [
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
    path: "/ship-schedule",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
] as const;
