import { useLocalStorage } from "@/utils/customHooks/useLocalStorage";
import React from "react";

export default function Layout({ children }: any) {
  const defaultDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDarkTheme ? "dark" : "light"
  );

  return (
    <main className="main-container" data-theme={theme}>
      <div className="spacer">{children}</div>
      <div className="theme-buttons">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
      </div>
    </main>
  );
}
