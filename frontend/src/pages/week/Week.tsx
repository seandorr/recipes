import { RecipeCard } from "../../components/RecipeCard";
import styles from "./week.module.scss";

type IRecipe = {
  title: string;
  image: string;
  tags?: string[];
};

const mondayRecipes: IRecipe[] = [
  {
    title: "Huevos con tostada y fruta",
    image: "breakfast_bagel",
    tags: ["Desayuno"],
  },
  {
    title: "Yogur + frutos secos",
    image: "broccoli_beef",
    tags: ["Snack"],
  },
  {
    title: "Bowl de pollo con arroz y verduras",
    image: "breakfast_bagel",
    tags: ["Almuerzo"],
  },
  {
    title: "Hummus + zanahoria",
    image: "broccoli_beef",
    tags: ["Merienda"],
  },
  {
    title: "Ternera con ensalada",
    image: "breakfast_bagel",
    tags: ["Cena"],
  },
  {
    title: "Requesón",
    image: "broccoli_beef",
    tags: ["Snack noche"],
  },
];

const Week = () => {
  return (
    <div className={styles.weekContainer}>
      <div className={styles.weekDayContainer}>
        <h2 className={styles.weekDayTitle}>Lunes</h2>
        <div className={styles.recipesContainer}>
          {mondayRecipes.map((recipe, index) => {
            const { title, tags } = recipe;

            return (
              <RecipeCard
                className={styles.recipeCard}
                key={index}
                title={title}
                tags={tags}
                type="calendar"
              />
            );
          })}
        </div>
      </div>
      <div className={styles.weekDayContainer}>
        <h2 className={styles.weekDayTitle}>Martes</h2>
      </div>
      <div className={styles.weekDayContainer}>
        <h2 className={styles.weekDayTitle}>Miercoles</h2>
      </div>
      <div className={styles.weekDayContainer}>
        <h2 className={styles.weekDayTitle}>Jueves</h2>
      </div>
      <div className={styles.weekDayContainer}>
        <h2 className={styles.weekDayTitle}>Viernes</h2>
      </div>
      <div className={styles.weekDayContainer}>
        <h2 className={styles.weekDayTitle}>Sabado</h2>
      </div>
      <div className={styles.weekDayContainer}>
        <h2 className={styles.weekDayTitle}>Domingo</h2>
      </div>
    </div>
  );
};

export default Week;
