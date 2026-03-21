import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient dark:bg-skills-gradient-dark clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text dark:text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-accent mx-auto mt-4"></div>
        <p className="text-muted dark:text-gray-300 mt-4 text-lg font-semibold">
          My academic journey and the foundations that shaped my approach to engineering and problem solving.
        </p>
      </div>

      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-accent/40 dark:bg-white/80 h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg border-4 border-surface bg-gradient-to-br from-accent to-accent2">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                {edu.badge}
              </span>
            </div>

            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-[0_20px_55px_rgba(15,23,42,0.18)] border border-border dark:border-white/10 bg-card/95 dark:bg-gray-900/95 backdrop-blur-md ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                {edu.img && (
                  <div className="w-16 h-16 rounded-2xl bg-surface/70 dark:bg-slate-900 border border-border/70 dark:border-white/10 overflow-hidden shadow-sm shrink-0">
                    <img
                      src={edu.img}
                      alt={`${edu.school} logo`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-text dark:text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-muted dark:text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-muted dark:text-gray-400 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted dark:text-gray-300 font-semibold">
                {edu.grade}
              </p>
              <p className="mt-3 text-sm text-muted dark:text-gray-300 leading-relaxed">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
