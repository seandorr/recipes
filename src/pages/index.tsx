import Head from "next/head";
import { useLocalStorage } from "@/utils/customHooks/useLocalStorage";
import { allRecipes, recipesPerWeek } from "@/utils/constants/recipes";
import { Expand } from "@/components/icons/Expand";
import { dayIndex } from "@/utils/functions/date";

export default function Home() {
  const defaultDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDarkTheme ? "dark" : "light"
  );

  return (
    <>
      <Head>
        <title>Cookbook</title>
        <meta name="description" content="Cookbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="main-container" data-theme={theme}>
        <div className="calendar-container">
          {recipesPerWeek.map((recipe, key) => {
            const { day, recipes } = recipe;

            return (
              <div
                key={key}
                className={`calendar-column ${
                  key + 1 === dayIndex ? "active" : ""
                }`}
                id={day}
              >
                <div className="calendar-title-container">
                  <h1 className="calendar-title">{day}</h1>
                </div>
                <div className="gutter">
                  {recipes.map((recipe, key) => {
                    const { name, units } = recipe;

                    return (
                      <div
                        key={key}
                        className={`recipe ${units ? "has-units" : ""}`}
                      >
                        <div className="recipe-name-container">
                          {name}
                          <div className="expand-icon-container">
                            <Expand size={14} />
                          </div>
                        </div>

                        {units && (
                          <div className="unit-container">
                            {units.length > 0 &&
                              units.map((unit, key) => {
                                return (
                                  <button
                                    key={key}
                                    className="unit"
                                    title={unit}
                                  >
                                    {unit}
                                  </button>
                                );
                              })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="recipes-container">
          {allRecipes.map((recipe, key) => {
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
          })}
        </div> */}
        <div className="theme-buttons">
          <button onClick={() => setTheme("light")}>Light</button>
          <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
      </main>
    </>
  );
}
