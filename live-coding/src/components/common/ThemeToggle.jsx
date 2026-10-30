import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        return stored;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen to OS theme changes if user hasn't explicitly set preference in current session
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="fixed top-3.5 right-4 sm:right-6 md:right-8 z-[60] w-9 h-9 rounded-full bg-surface/80 hover:bg-surface border border-border hover:border-accent/40 shadow-sm backdrop-blur-md flex items-center justify-center text-text-secondary hover:text-accent transition-all duration-200 active:scale-95 cursor-pointer print-hide group"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun
          size={18}
          className="text-amber-400 group-hover:rotate-45 transition-transform duration-300"
        />
      ) : (
        <Moon
          size={17}
          className="text-text-secondary group-hover:-rotate-12 transition-transform duration-300"
        />
      )}
    </button>
  );
}

