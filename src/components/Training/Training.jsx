import React from "react";
import { trainings } from "../../constants";

const Training = () => {
  return (
    <section
      id="training"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient dark:bg-skills-gradient-dark clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text dark:text-white">
          TRAINING
        </h2>
        <div className="w-32 h-1 bg-accent mx-auto mt-4"></div>
        <p className="text-muted dark:text-gray-300 mt-4 text-lg font-semibold">
          Structured programs and intensive learning experiences that built
          strong foundations.
        </p>
      </div>

      <div className="space-y-8">
        {trainings.map((t) => (
          <div
            key={t.id}
            className="rounded-3xl border border-border/80 dark:border-white/10 bg-card/90 dark:bg-slate-950/60 backdrop-blur-md shadow-[0_22px_65px_rgba(15,23,42,0.14)] overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Thumbnail */}
              <div className="md:w-[42%] p-4">
                <div className="relative w-full h-56 md:h-full min-h-[220px] rounded-2xl overflow-hidden border border-border/70 dark:border-white/10 bg-surface/80 dark:bg-slate-900/60">
                  {t.cover ? (
                    <img
                      src={t.cover}
                      alt={`${t.title} cover`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-muted dark:text-gray-300">
                      Preview unavailable
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold text-white/95 line-clamp-1">
                      {t.provider}
                    </span>
                    <span className="shrink-0 rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white">
                      {t.hours ? `${t.hours} hrs` : t.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-6 pb-7 pt-2 md:pt-6 md:pl-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text dark:text-white leading-snug">
                      {t.title}
                    </h3>
                    {t.subtitle && (
                      <p className="mt-2 text-sm md:text-base font-semibold text-muted dark:text-gray-300">
                        {t.subtitle}
                      </p>
                    )}
                  </div>
                  <span className="self-start rounded-full bg-accent/10 text-accent dark:bg-white/10 dark:text-white px-3 py-1 text-[11px] font-semibold">
                    {t.date}
                    {t.hours ? ` • ${t.hours} hrs` : ""}
                  </span>
                </div>

                {t.description && (
                  <p className="mt-4 text-sm md:text-base text-muted dark:text-gray-300 leading-relaxed">
                    {t.description}
                  </p>
                )}

                {Array.isArray(t.highlights) && t.highlights.length > 0 && (
                  <ul className="mt-5 list-disc pl-5 space-y-2 text-sm md:text-base text-muted dark:text-gray-300">
                    {t.highlights.map((line, idx) => (
                      <li key={`${t.id}-hl-${idx}`}>{line}</li>
                    ))}
                  </ul>
                )}

                {t.project && (
                  <div className="mt-6 rounded-2xl border border-dashed border-accent/40 bg-accent/5 dark:bg-slate-900/40 px-5 py-4">
                    <p className="text-sm font-semibold text-text dark:text-white">
                      Project
                    </p>
                    <p className="mt-2 text-sm md:text-base text-muted dark:text-gray-300">
                      {t.project}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  {t.link ? (
                    <a
                      href={t.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-r from-accent to-accent2 text-white font-semibold hover:opacity-95 transition"
                    >
                      Open link
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-border dark:border-slate-700 text-muted dark:text-gray-300 font-semibold">
                      Link not added yet
                    </span>
                  )}
                  <span className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-border dark:border-slate-700 text-text dark:text-white font-semibold hover:bg-accent/10 transition">
                    {t.hours ? `${t.hours} hrs` : "Completed"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Training;

