"use client";

import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";

type Theme = "light" | "dark";

function resolveTheme(): Theme {
  const saved = window.localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  )?.matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggleClient() {
  const [theme, setTheme] = useState<Theme>(() => resolveTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      data-theme={theme}
      onClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className={styles.icon} aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
