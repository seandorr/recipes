import { recipesPerWeek } from "@/utils/constants/recipes";
import { useLocalStorage } from "@/utils/customHooks/useLocalStorage";
import { dayIndex } from "@/utils/functions/date";
import { useState } from "react";

export default function Calendar() {
  const defaultDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDarkTheme ? "dark" : "light"
  );
  const [hoveringRecipe, setHoveringRecipe] = useState({});

  return (
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
                      className={`recipe ${units ? "has-units" : ""} ${
                        recipe === hoveringRecipe ? "hovering" : ""
                      }`}
                    >
                      <a
                        href=""
                        className="recipe-link"
                        onMouseEnter={() => setHoveringRecipe(recipe)}
                        onMouseLeave={() => setHoveringRecipe({})}
                      >
                        <span className="recipe-name">{name}</span>
                      </a>
                      {units && (
                        <div className="unit-container">
                          {units.length > 0 &&
                            units.map((unit, key) => {
                              return (
                                <button key={key} className="unit" title={unit}>
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
    </main>
  );
}
