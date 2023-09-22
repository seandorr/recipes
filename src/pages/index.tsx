import RecipesTable from "@/components/Table";
import { Empty } from "antd";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

export interface Recipe {
  title: string;
  tags: { id: number; name: string }[];
}

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

  if (isLoading)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <Head>
        <title>Cookbook</title>
        <meta name="description" content="Cookbook" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {recipes?.length > 0 ? (
        <RecipesTable recipes={recipes} />
      ) : (
        <div className="empty-container">
          <Empty
            description="No recipes"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        </div>
      )}

      <div className="recipes-container">
        <Link href="/create-recipe" className="button" id="create-recipe-btn">
          +
        </Link>
        {!isLoading &&
          recipes?.length > 0 &&
          recipes.map((recipe: Recipe, key) => {
            const { title, tags } = recipe;

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
      </div>
    </>
  );
}
