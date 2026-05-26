import { RecipeCard } from "./components/RecipeCard";
import { recipes } from "./utils/constants/recipes";

const App = () => {
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
        <div className="recipe-grid">
          {recipes.map((recipe, index) => {
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
