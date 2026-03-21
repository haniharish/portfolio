import React, { useEffect, useMemo, useState } from "react";
import { certifications } from "../../constants";

const toDrivePreviewUrl = (url, cacheKey) => {
  const match = url.match(/\/file\/d\/([^/]+)\//);
  if (!match) return url;
  const base = `https://drive.google.com/file/d/${match[1]}/preview`;
  return cacheKey ? `${base}?cache=${encodeURIComponent(cacheKey)}` : base;
};

const Certifications = () => {
  const [active, setActive] = useState(null);
  const [previewReady, setPreviewReady] = useState(true);

  const activeCert = useMemo(
    () => certifications.find((c) => c.id === active) ?? null,
    [active]
  );

  useEffect(() => {
    if (!activeCert?.link) return;
    // Force iframe to fully reload when switching certificates (Drive preview can cache aggressively).
    setPreviewReady(false);
    const t = setTimeout(() => setPreviewReady(true), 60);
    return () => clearTimeout(t);
  }, [activeCert?.id, activeCert?.link]);

  const close = () => setActive(null);

  const open = (id) => {
    setActive(id);
  };

  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient dark:bg-skills-gradient-dark clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text dark:text-white">
          CERTIFICATIONS
        </h2>
        <div className="w-32 h-1 bg-accent mx-auto mt-4"></div>
        <p className="text-muted dark:text-gray-300 mt-4 text-lg font-semibold">
          Industry-recognized credentials that reflect consistent learning and
          hands-on practice.
        </p>
      </div>

      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => open(cert.id)}
            className="group rounded-2xl border border-border/80 dark:border-white/10 bg-card/95 dark:bg-slate-950/70 backdrop-blur-md shadow-[0_16px_40px_rgba(15,23,42,0.10)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(15,23,42,0.18)] transition overflow-hidden cursor-pointer"
          >
            {/* Preview (like Projects cards) */}
            <div className="p-4">
              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-border/70 dark:border-white/10 bg-surface/80 dark:bg-slate-900/60">
                {cert.cover ? (
                  <img
                    src={cert.cover}
                    alt={`${cert.title} cover`}
                    loading="lazy"
                    className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.06] transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-muted dark:text-gray-300">
                    Preview unavailable
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold text-white/95 line-clamp-1">
                    {cert.issuer}
                  </span>
                  <span className="shrink-0 rounded-full bg-white/15 backdrop-blur px-2.5 py-1 text-[11px] font-semibold text-white">
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-text dark:text-white leading-snug tracking-tight">
                {cert.title}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500/90"></span>
                  <span className="text-xs font-medium text-muted dark:text-gray-300">
                    Verified
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-accent to-accent2 shadow-sm shadow-accent/20 group-hover:shadow-accent/40 transition">
                  View <span className="text-white/90 group-hover:translate-x-0.5 transition">→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-card dark:bg-slate-950 shadow-2xl">
            <div className="flex items-start justify-between gap-4 p-5 border-b border-border/70 dark:border-slate-800">
              <div>
                <h4 className="text-lg md:text-xl font-bold text-text dark:text-white">
                  {activeCert.title}
                </h4>
                <p className="mt-1 text-sm text-muted dark:text-gray-300">
                  {activeCert.issuer} • {activeCert.date}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-full w-10 h-10 flex items-center justify-center text-text dark:text-white hover:text-accent hover:bg-accent/10 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {activeCert.link ? (
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-border dark:border-slate-800 bg-surface/60 dark:bg-slate-900/40">
                    <div className="px-4 py-3 border-b border-border/70 dark:border-slate-800 flex items-center justify-between">
                      <p className="text-sm font-semibold text-text dark:text-white">
                        Certificate preview
                      </p>
                      <a
                        href={activeCert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-accent hover:underline"
                      >
                        Open in new tab
                      </a>
                    </div>
                    <div className="aspect-[16/10] w-full">
                      {previewReady ? (
                        <iframe
                          key={`${activeCert.id}-${activeCert.link}`}
                          title={`${activeCert.title} preview`}
                          src={toDrivePreviewUrl(
                            activeCert.link,
                            `${activeCert.id}-${activeCert.link}`
                          )}
                          className="w-full h-full"
                          allow="autoplay"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-sm text-muted dark:text-gray-300">
                          Loading preview…
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={activeCert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-gradient-to-r from-accent to-accent2 text-white font-semibold hover:opacity-95 transition"
                    >
                      View full certificate
                    </a>
                    <button
                      type="button"
                      onClick={close}
                      className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-border dark:border-slate-700 text-text dark:text-white font-semibold hover:bg-accent/10 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-accent/40 bg-accent/5 dark:bg-slate-900/40 p-5 text-sm text-muted dark:text-gray-300">
                  Certificate link not added yet. When you share the certificate
                  URLs (Google Drive/Coursera/NPTEL), I’ll wire them here so
                  “View full certificate” opens the actual document.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;

