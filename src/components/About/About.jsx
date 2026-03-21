import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

const About = () => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="py-20 md:py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-12 md:mt-16 lg:mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text dark:text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text dark:text-white mb-4 leading-tight">
            Harish Sharma
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-accent leading-tight">
            <span className="text-muted dark:text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Full Stack Developer',
                'MERN Stack Engineer',
                'Devop Enthusiast',
                ,
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-accent">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-muted dark:text-gray-300 mb-6 mt-6 leading-relaxed">
            Full-stack developer with a strong focus on scalable web applications and DevOps-driven development. 
            Currently pursuing a B.Tech in Computer Science at Lovely Professional University, with hands-on experience building modern applications using the MERN stack.
          </p>
          <p className="text-sm sm:text-base text-muted dark:text-gray-400 mb-8">
            Passionate about designing secure, high-performance backend systems, implementing robust authentication mechanisms, and deploying cloud-ready applications.
             Continuously improving through real-world projects, DevOps practices, and learning modern tools for automation, containerization, and system reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
           <a
              href="/Harish-Sharma-CV.pdf"
              download="Harish-Sharma-CV.pdf"
              className="inline-flex items-center justify-center text-white bg-gradient-to-r from-accent to-accent2 py-3 px-7 rounded-full text-sm sm:text-base font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-0.5 transition"
            >
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center border border-border text-accent px-6 py-3 rounded-full text-sm sm:text-base font-semibold bg-white hover:bg-accent hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-accent transition"
            >
              Contact Me
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center justify-center text-sm sm:text-base font-semibold text-muted dark:text-gray-200 hover:text-accent"
            >
              View Projects ↓
            </button>
          </div>
          
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
          <Tilt
            className="w-full max-w-md rounded-3xl bg-gradient-to-br from-accent/10 via-card to-accent2/10 dark:from-accent/20 dark:via-transparent dark:to-accent2/30 border border-border dark:border-white/10 shadow-[0_22px_65px_rgba(15,23,42,0.18)] p-6 relative overflow-hidden"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.02}
            transitionSpeed={900}
            gyroscope={true}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-8 w-36 h-36 rounded-full bg-accent2/25 blur-3xl" />

            <div className="relative space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-white/5 border border-border/60 px-4 py-2 text-xs font-semibold text-muted dark:text-gray-200 backdrop-blur">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                <span>Available for full‑stack roles & internships</span>
              </div>

              <div className="rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-border/70 dark:border-white/5 p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted dark:text-gray-400">
                    Tech Stack
                  </span>
                  <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                    MERN + DevOps
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth', 'REST APIs'].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-border/70 dark:border-slate-700 bg-surface/80 dark:bg-slate-900 px-2.5 py-2 text-center text-[11px] font-medium text-muted dark:text-gray-200 hover:border-accent hover:text-accent transition"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-accent/40 bg-accent/5 dark:bg-accent/10 px-4 py-3 flex items-center justify-between text-xs sm:text-sm">
                <div className="space-y-1">
                  <p className="font-semibold text-text dark:text-white">
                    Building secure, scalable web apps.
                  </p>
                  <p className="text-muted dark:text-gray-300">
                    From database schema to polished UI – end‑to‑end ownership.
                  </p>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 text-[11px] text-muted dark:text-gray-200">
                  <span>-Clean architecture</span>
                  <span>-Cloud‑ready</span>
                  <span>-Performance first</span>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
