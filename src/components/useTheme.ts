// src/components/useTheme.tsx
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMonitor, FiDroplet } from "react-icons/fi";

// Definición de las Paletas de Colores
export const themes = {
  'Oscuro': {
    "--bg-color": "#0d1117",
    "--card-bg": "#161b22",
    "--border-color": "#30363d",
    "--text-primary": "#c9d1d9",
    "--text-secondary": "#8b949e",
    "--accent-primary": "#58a6ff",
    "--accent-secondary": "#3fb950",
  },
  'Pizarra': {
    "--bg-color": "#111827",
    "--card-bg": "#1F2937",
    "--border-color": "#374151",
    "--text-primary": "#F9FAFB",
    "--text-secondary": "#9CA3AF",
    "--accent-primary": "#3B82F6",
    "--accent-secondary": "#10B981",
  },
  'Arena': {
    "--bg-color": "#F5F5F4",
    "--card-bg": "#FFFFFF",
    "--border-color": "#E7E5E4",
    "--text-primary": "#292524",
    "--text-secondary": "#78716C",
    "--accent-primary": "#F97316",
    "--accent-secondary": "#059669",
  },
  'Neón': {
    "--bg-color": "#121212",
    "--card-bg": "#1E1E1E",
    "--border-color": "#2C2C2C",
    "--text-primary": "#EAEAEA",
    "--text-secondary": "#888888",
    "--accent-primary": "#8A2BE2",
    "--accent-secondary": "#00FFFF",
  },
};

// Iconos para cada tema
export const themeIcons = {
  'Oscuro': FiMoon,
  'Pizarra': FiMonitor,
  'Arena': FiSun,
  'Neón': FiDroplet,
};

// El Custom Hook
export const useTheme = () => {
  const [activeTheme, setActiveTheme] = useState("Oscuro");

  useEffect(() => {
    const theme = themes[activeTheme as keyof typeof themes];
    Object.keys(theme).forEach((key) => {
      const cssVar = key as keyof typeof theme;
      document.documentElement.style.setProperty(cssVar, theme[cssVar]);
    });
  }, [activeTheme]);

  const handleThemeChange = (themeName: string) => {
    setActiveTheme(themeName);
  };

  return { activeTheme, handleThemeChange, themes, themeIcons };
};
