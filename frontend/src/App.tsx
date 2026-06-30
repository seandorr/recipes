import { useEffect, useState } from "react";
import axios from "axios";
import { RecipeCard } from "./components/RecipeCard";
import { useNavigate } from "react-router";
// import { recipes } from "./utils/constants/recipes";

const App = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/recipes");
        setRecipes(res.data);
        setIsRateLimited(false);
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          console.error("Error fetching recipes", error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      {/* <header>
        <a href="#">Recipes</a>
        <nav>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </nav>
      </header> */}
      <main>
        {isRateLimited && (
          <div className="rate-limit-message">
            <p>You have reached the rate limit. Please try again later.</p>
          </div>
        )}
        {loading ? (
          <p>Loading recipes...</p>
        ) : (
          !isRateLimited && recipes.length === 0 && <p>No recipes found.</p>
        )}
        <div className="recipe-grid">
          <button className="addMealButton" onClick={() => navigate("/create")}>
            +
          </button>
          {recipes.length > 0 &&
            recipes.map((recipe, index) => {
              const { title, image, tags, mealType } = recipe;

              return (
                <RecipeCard
                  key={index}
                  title={title}
                  image={image}
                  tags={tags}
                  mealType={mealType}
                  type="default"
                />
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default App;
