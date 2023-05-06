import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [recipeTags, setRecipeTags] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/recipe", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((recipes) => {
        setRecipes(recipes.data);
        setLoading(false);
      })
      .catch((error) => console.error("Request error", error));
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Cookbook</title>
        <meta name="description" content="Cookbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="recipes-container">
        <Link href="/create-recipe" className="button" id="create-recipe-btn">
          +
        </Link>
        {!isLoading &&
          recipes.length > 0 &&
          recipes?.map((recipe, key) => {
            const {
              title,
              tags,
            }: { title: string; tags: { id: number; name: string }[] } = recipe;

            return (
              <div key={key} className={`recipe`}>
                {title}
                {tags.length > 0 ? (
                  <div className="tag-container">
                    {tags.map(
                      (tag: { id: number; name: string }, key: number) => {
                        return (
                          <span key={key} className="tag">
                            {tag.name}
                          </span>
                        );
                      }
                    )}
                  </div>
                ) : null}
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
    </>
  );
}
