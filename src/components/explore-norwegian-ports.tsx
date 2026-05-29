import type { ReactNode } from "react";

export type ExploreNorwegianPortsConfig = {
  intro: ReactNode;
  cardTitle: string;
  cardTitleHref: string;
  cardDescription: string;
  ctaLabel: string;
  ctaHref: string;
};

type ExploreNorwegianPortsProps = {
  config: ExploreNorwegianPortsConfig;
};

export function ExploreNorwegianPorts({ config }: ExploreNorwegianPortsProps) {
  return (
    <section
      id="norwegian-cruise-ports"
      className="border-t bg-surface-muted"
      aria-labelledby="explore-norwegian-ports-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <h2
          id="explore-norwegian-ports-heading"
          className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          <span aria-hidden="true" className="mr-2">
            🇳🇴
          </span>
          Explore More Norwegian Cruise Ports
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch">
          <div className="text-base leading-8 text-slate-700 sm:text-lg">
            {config.intro}
          </div>

          <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition-shadow hover:shadow-lg">
            <div
              className="relative flex h-40 shrink-0 items-center justify-center bg-gradient-to-br from-[var(--navy)] to-[var(--norway-blue)] sm:h-44"
              aria-hidden="true"
            >
              <span className="text-5xl opacity-90">🇳🇴</span>
              <div className="accent-bar-blue absolute bottom-0 left-0 h-1 w-full" />
            </div>

            <div className="flex flex-1 flex-col p-5 md:p-6">
              <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-900">
                <a
                  href={config.cardTitleHref}
                  className="text-slate-900 underline-offset-2 transition hover:text-[var(--norway-blue)] hover:underline"
                >
                  {config.cardTitle}
                </a>
              </h3>

              <p className="mb-5 flex-1 text-sm leading-6 text-slate-600">
                {config.cardDescription}
              </p>

              <a href={config.ctaHref} className="btn-primary-on-light w-fit">
                {config.ctaLabel}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export const explorePortsFromStavanger: ExploreNorwegianPortsConfig = {
  intro: (
    <>
      Many Norwegian cruises combine Stavanger with Flam, one of Norway&apos;s
      most famous fjord destinations. Discover shore excursions, port guides and
      independent cruise planning resources for Flam — including{" "}
      <a
        href="https://flamshoreexcursions.com"
        className="font-medium text-[var(--norway-blue)] underline-offset-2 hover:underline"
      >
        Flam Shore Excursions
      </a>{" "}
      and a dedicated{" "}
      <a
        href="https://flamshoreexcursions.com/flam-port-guide"
        className="font-medium text-[var(--norway-blue)] underline-offset-2 hover:underline"
      >
        Flam Port Guide
      </a>
      .
    </>
  ),
  cardTitle: "Flam Shore Excursions",
  cardTitleHref: "https://flamshoreexcursions.com",
  cardDescription:
    "Explore Flam shore excursions, Stegastein viewpoint tours, cruise port information and planning guides.",
  ctaLabel: "Visit Flam",
  ctaHref: "https://flamshoreexcursions.com",
};
