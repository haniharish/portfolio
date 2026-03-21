import React, { useState } from "react";
import { achievements } from "../../constants";

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  const open = (achievement) => setSelected(achievement);
  const close = () => setSelected(null);

  const featured = achievements[0] ?? null;

  return (
    <section
      id="achievements"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient dark:bg-skills-gradient-dark clip-path-custom-3 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text dark:text-white">
          ACHIEVEMENTS
        </h2>
        <div className="w-32 h-1 bg-accent mx-auto mt-4"></div>
        <p className="text-muted dark:text-gray-300 mt-4 text-lg font-semibold">
          Hands‑on milestones from practical learning platforms and real practice.
        </p>
      </div>

      <div className="grid gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-start">
        {/* Left: platform explainer */}
        <div className="rounded-3xl border border-border dark:border-white/10 bg-card/90 dark:bg-slate-950/60 backdrop-blur-md shadow-[0_22px_65px_rgba(15,23,42,0.14)] overflow-hidden relative">
          <div className="absolute -top-12 -right-10 w-44 h-44 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-accent2/20 blur-3xl" />

          <div className="relative p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted dark:text-gray-400">
              Platform
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-text dark:text-white">
              TryHackMe
            </h3>
            <p className="mt-4 text-sm sm:text-base text-muted dark:text-gray-300 leading-relaxed">
              TryHackMe is a hands‑on cybersecurity training platform where you
              learn by doing — guided labs, real scenarios, and structured paths.
              It’s focused on practical skills like reconnaissance, web security
              basics, and foundational penetration‑testing workflows. I’ve
              completed <span className="font-semibold text-accent">45 rooms</span>{" "}
              as part of my training and consistent practice.
            </p>

            <div className="mt-7 rounded-2xl border border-dashed border-accent/40 bg-accent/5 dark:bg-accent/10 px-5 py-4">
              <p className="text-sm sm:text-base font-semibold text-text dark:text-white">
                Golden League Badge
              </p>
              <p className="mt-2 text-sm sm:text-base text-muted dark:text-gray-300 leading-relaxed">
                The Golden League represents consistent performance and activity
                on the platform. I earned it by regularly completing labs and
                challenges — showing discipline, consistency, and practical
                learning progress.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Hands‑on labs",
                "Recon",
                "Web security basics",
                "Beginner pentesting",
                "45 rooms completed",
                "Consistency",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-50 dark:bg-[#251f38] text-xs font-semibold text-accent rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://tryhackme.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-r from-accent to-accent2 text-white font-semibold hover:opacity-95 transition"
              >
                Explore TryHackMe
              </a>
              {featured?.proofLink && (
                <a
                  href={featured.proofLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-border dark:border-slate-700 text-text dark:text-white font-semibold hover:bg-accent/10 transition"
                >
                  View Badge
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right: featured achievement card */}
        {featured && (
          <button
            type="button"
            onClick={() => open(featured)}
            className="text-left border border-border dark:border-white/10 bg-card dark:bg-gray-900 backdrop-blur-md rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)] dark:shadow-2xl overflow-hidden hover:shadow-accent/30 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>

            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-text dark:text-white leading-snug">
                    {featured.title}
                  </h3>
                  {featured.subtitle && (
                    <p className="mt-2 text-sm font-semibold text-muted dark:text-gray-300">
                      {featured.subtitle}
                    </p>
                  )}
                </div>
                {featured.date && (
                  <span className="shrink-0 rounded-full bg-accent/10 text-accent dark:bg-white/10 dark:text-white px-3 py-1 text-[11px] font-semibold">
                    {featured.date}
                  </span>
                )}
              </div>

              <p className="text-muted dark:text-gray-400 mt-4 leading-relaxed">
                {featured.description}
              </p>

              {Array.isArray(featured.tags) && featured.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tags.map((tag, index) => (
                    <span
                      key={`${featured.id}-${index}`}
                      className="bg-indigo-50 dark:bg-[#251f38] text-xs font-semibold text-accent rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-accent to-accent2 shadow-sm shadow-accent/20 hover:shadow-accent/40 transition">
                View details <span className="text-white/90">→</span>
              </div>
            </div>
          </button>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-card dark:bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={close}
                className="text-text dark:text-white text-3xl font-bold hover:text-accent"
                aria-label="Close"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-card dark:bg-gray-900 px-4">
                <img
                  src={selected.image}
                  alt={selected.title}
                  loading="lazy"
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>

              <div className="lg:p-8 p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="lg:text-3xl font-bold text-text dark:text-white text-md">
                      {selected.title}
                    </h3>
                    {selected.subtitle && (
                      <p className="mt-1 text-sm md:text-base font-semibold text-muted dark:text-gray-300">
                        {selected.subtitle}
                      </p>
                    )}
                  </div>
                  {selected.date && (
                    <span className="self-start rounded-full bg-accent/10 text-accent dark:bg-white/10 dark:text-white px-3 py-1 text-[11px] font-semibold">
                      {selected.date}
                    </span>
                  )}
                </div>

                <p className="text-muted dark:text-gray-300 mb-6 lg:text-base text-xs">
                  {selected.description}
                </p>

                {Array.isArray(selected.details) && selected.details.length > 0 && (
                  <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-muted dark:text-gray-300 mb-6">
                    {selected.details.map((line, idx) => (
                      <li key={`${selected.id}-detail-${idx}`}>{line}</li>
                    ))}
                  </ul>
                )}

                {Array.isArray(selected.tags) && selected.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selected.tags.map((tag, index) => (
                      <span
                        key={`${selected.id}-tag-${index}`}
                        className="bg-indigo-50 dark:bg-[#251f38] text-xs font-semibold text-accent rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4">
                  {selected.proofLink ? (
                    <a
                      href={selected.proofLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-slate-100 dark:bg-gray-800 hover:bg-accent/10 dark:hover:bg-purple-800 text-accent dark:text-gray-300 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Proof
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={close}
                      className="w-1/2 bg-slate-100 dark:bg-gray-800 hover:bg-accent/10 dark:hover:bg-purple-800 text-accent dark:text-gray-300 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      Close
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={close}
                    className="w-1/2 bg-accent hover:bg-accent2 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;

