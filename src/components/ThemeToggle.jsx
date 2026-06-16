import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function getInitialTheme() {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export default function ThemeToggle({ className = "", compact = false }) {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    const syncTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("storage", syncTheme);
    return () => window.removeEventListener("storage", syncTheme);
  }, []);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
        isDark
          ? "border-[rgba(201,206,214,0.2)] bg-[rgba(255,255,255,0.06)] text-white hover:border-[rgba(46,111,214,0.38)] hover:bg-[rgba(46,111,214,0.12)]"
          : "border-[rgba(11,31,58,0.14)] bg-white text-[#0b1f3a] hover:border-[rgba(46,111,214,0.3)] hover:bg-[#f5f7fa]"
      } ${compact ? "px-3 py-2" : ""} ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(46,111,214,0.14)] text-[#2e6fd6]">
        {isDark ? <FaMoon size={15} /> : <FaSun size={15} />}
      </span>
      <span className={compact ? "hidden sm:inline" : ""}>
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
