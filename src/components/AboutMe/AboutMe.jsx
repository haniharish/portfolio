import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient dark:bg-skills-gradient-dark clip-path-custom"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text dark:text-white">ABOUT ME</h2>
        <div className="w-32 h-1 bg-accent mx-auto mt-4"></div>
        <p className="text-muted dark:text-gray-300 mt-4 text-lg font-semibold">
          A quick snapshot of who I am, what I build, and what I’m currently
          focused on.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border dark:border-white/10 bg-card/90 dark:bg-slate-950/60 backdrop-blur-md shadow-[0_22px_65px_rgba(15,23,42,0.14)]">
          <div className="absolute -top-12 -right-10 w-44 h-44 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-accent2/20 blur-3xl" />

          <div className="relative p-7 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/5 border border-border/70 dark:border-white/10 px-4 py-2 text-xs font-semibold text-muted dark:text-gray-200 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              <span>Open to internships & full‑stack roles</span>
            </div>

            <p className="mt-6 text-base sm:text-lg text-muted dark:text-gray-300 leading-relaxed">
              I am a passionate and detail-oriented Full Stack Developer with a strong foundation in building scalable, efficient, and user-friendly web applications. I enjoy transforming ideas into real-world digital solutions by combining clean design with robust backend functionality.

With hands-on experience in technologies like HTML, CSS, JavaScript, React, Node.js, and databases, I focus on developing applications that are not only functional but also intuitive and performance-driven. I have worked on multiple projects ranging from web applications to data-driven systems, where I applied problem-solving skills and optimized algorithms to deliver effective results.

I have a solid understanding of data structures, algorithms, and system design, which helps me write efficient and maintainable code. My background in C++ programming and software development concepts further strengthens my ability to tackle complex technical challenges.

I am always eager to learn new technologies and stay updated with the latest industry trends. I believe in continuous improvement, collaboration, and writing clean, readable code.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "MERN Stack",
                "REST APIs",
                "JWT Auth",
                "DSA",
                "System Design",
                "Clean Code",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-50 dark:bg-[#251f38] text-xs font-semibold text-accent rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

