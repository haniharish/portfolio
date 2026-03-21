import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text dark:text-white tracking-tight">
            CONTACT
          </h2>
          <div className="w-32 h-1 bg-accent mx-auto mt-4"></div>
          <p className="text-muted dark:text-gray-300 mt-5 text-lg md:text-xl font-semibold">
            Let’s collaborate on something meaningful. Reach out for roles, internships, or projects.
          </p>
        </div>

        {/* Only Left Section (Contact Info) */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="rounded-2xl bg-card dark:bg-slate-950/70 border border-border dark:border-white/10 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.09)]">
            <h3 className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-muted dark:text-gray-400 mb-5">
              Direct Contact
            </h3>

            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-center justify-between border-b border-border/60 dark:border-slate-800 pb-3">
                <div>
                  <p className="text-[11px] md:text-xs font-medium text-muted dark:text-gray-400">Email</p>
                  <a
                    href="mailto:harishhani2004@gmail.com"
                    className="text-text dark:text-white font-semibold hover:text-accent transition"
                  >
                    harishhani2004@gmail.com
                  </a>
                </div>
                <span className="px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[11px] font-medium dark:bg-emerald-500/10 dark:text-emerald-300">
                  Preferred
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border/60 dark:border-slate-800 pb-3">
                <div>
                  <p className="text-[11px] md:text-xs font-medium text-muted dark:text-gray-400">GitHub</p>
                  <a
                    href="https://github.com/haniharish"
                    target="_blank"
                    rel="noreferrer"
                    className="text-text dark:text-white font-semibold hover:text-accent transition"
                  >
                    github.com/haniharish
                  </a>
                </div>
                <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-medium dark:bg-slate-800/60 dark:text-gray-200">
                  Code
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] md:text-xs font-medium text-muted dark:text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/harishsharma12"
                    target="_blank"
                    rel="noreferrer"
                    className="text-text dark:text-white font-semibold hover:text-accent transition"
                  >
                    linkedin.com/in/harishsharma12
                  </a>
                </div>
                <span className="px-2 py-1 rounded-full bg-rose-50 text-rose-600 text-[11px] font-medium dark:bg-rose-500/10 dark:text-rose-300">
                  Network
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 dark:bg-slate-950/60 px-5 py-4 text-sm md:text-base text-muted dark:text-gray-300">
            <p className="font-semibold text-text dark:text-white mb-2">
              Response time
            </p>
            <p>
              I usually reply within <span className="font-semibold text-accent">24 hours</span>.
              Share a brief about your project, role, or idea so I can come prepared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;