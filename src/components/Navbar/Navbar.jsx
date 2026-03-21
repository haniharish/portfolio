import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = prefersDark;
    setIsDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    // { id: "about", label: "About" },
    // { id: "about-me", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "training", label: "Training" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-surface/90 dark:bg-[#050414]/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-surface/70 dark:bg-transparent"
      }`}
    >
      <div className="text-text dark:text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-accent">&lt;</span>
          <span className="text-text dark:text-white">Harish</span>
          <span className="text-accent">/</span>
          <span className="text-text dark:text-white">Sharma</span>
          <span className="text-accent">&gt;</span>
        </div>

        <ul className="hidden md:flex items-center space-x-8 text-muted dark:text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-accent ${
                activeSection === item.id ? "text-accent" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-xs font-medium text-muted dark:text-gray-200 hover:border-accent hover:text-accent transition"
          >
            {isDark ? "☀" : "🌙"}
          </button>
          <a
            href="https://github.com/haniharish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted dark:text-gray-300 hover:text-accent"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harishsharma12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted dark:text-gray-300 hover:text-accent"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-accent cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-accent cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-surface dark:bg-[#050414] bg-opacity-95 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-muted dark:text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-accent ${
                  activeSection === item.id ? "text-accent" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-xs font-medium text-muted dark:text-gray-200 hover:border-accent hover:text-accent transition"
              >
                {isDark ? "☀" : "🌙"}
              </button>
              <a
                href="https://github.com/haniharish"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted dark:text-gray-300 hover:text-accent"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/harishsharma12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted dark:text-gray-300 hover:text-accent"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
