"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

// Day/Night mode for Aldovia. Persisted to localStorage so a visitor's
// preference survives across visits. Default is day to match the live
// site's first paint.

type Mode = "day" | "night";

type ThemeCtx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
  ready: boolean;
};

const STORAGE_KEY = "aldovia.themeMode";

const ThemeContext = createContext<ThemeCtx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("day");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "day" || saved === "night") {
      setMode(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.dataset.theme = mode;
  }, [mode, ready]);

  const toggle = () => setMode((m) => (m === "day" ? "night" : "day"));

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggle, ready }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeCtx {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // SSR / non-provider fallback. Server defaults to day.
    return {
      mode: "day",
      setMode: () => undefined,
      toggle: () => undefined,
      ready: false,
    };
  }
  return ctx;
}
