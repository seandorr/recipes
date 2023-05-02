import Head from "next/head";
import { useLocalStorage } from "@/utils/customHooks/useLocalStorage";
import { useState, useEffect } from "react";

export default function Home() {
  const defaultDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDarkTheme ? "dark" : "light"
  );

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    try {
      const response = await fetch("/api/recipe", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setRecipes(await response.json());
    } catch (error) {
      console.error("Request error", error);
    }
  };

  return (
    <>
      <Head>
        <title>Cookbook</title>
        <meta name="description" content="Cookbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="main-container" data-theme={theme}>
        <div className="recipes-container">
          {recipes.map((recipe, key) => {
            const { title } = recipe;

            return (
              <div key={key} className={`recipe`}>
                {title}
              </div>
            );
          })}
          {/* {allRecipes.map((recipe, key) => {
            const { name, units } = recipe;

            return (
              <div key={key} className={`recipe ${units ? "has-units" : ""}`}>
                {name}
                {units && (
                  <div className="unit-container">
                    {units.length > 0 &&
                      units.map((unit, key) => {
                        return (
                          <button key={key} className="unit">
                            {unit}
                          </button>
                        );
                      })}
                  </div>
                )}
              </div>
            );
          })} */}
        </div>
        <div className="theme-buttons">
          <button onClick={() => setTheme("light")}>Light</button>
          <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
      </main>
    </>
  );
}
