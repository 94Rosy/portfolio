"use client";

import { useEffect, useState } from "react";

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
  // 클라이언트에서만 렌더되므로 여기서 window/localStorage 읽기
  const [theme, setTheme] = useState<Theme>(() => resolveTheme());

  // 외부 시스템 동기화만 effect에서 (setState 없음)
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((p) => (p === "dark" ? "light" : "dark"))}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
