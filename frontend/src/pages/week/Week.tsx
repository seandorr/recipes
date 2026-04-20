import { RecipeCard } from "../../components/RecipeCard";
import { activeDay } from "../../utils/functions/getDay";
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

type IWeekDayColumn = {
  title: string;
  meals: IRecipe[];
  active: boolean;
};

const WeekDayColumn = ({ title, meals, active }: IWeekDayColumn) => {
  return (
    <div
      className={`${styles.weekDayContainer} ${active ? styles.active : ""}`}
    >
      <div className={styles.weekDayTitleContainer}>
        <h2 className={styles.weekDayTitle}>{title}</h2>
        {active && (
          <span className={styles.activeDayTag}>
            <div className={styles.activeSymbol}></div>Hoy
          </span>
        )}
      </div>
      <div className={styles.recipesContainer}>
        {meals.map((recipe, index) => {
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
  );
};

const Week = () => {
  return (
    <div className={styles.weekContainer}>
      <WeekDayColumn
        title="Lunes"
        meals={mondayRecipes}
        active={activeDay === "monday"}
      />
      <WeekDayColumn
        title="Martes"
        meals={[]}
        active={activeDay === "tuesday"}
      />
      <WeekDayColumn
        title="Miércoles"
        meals={[]}
        active={activeDay === "wednesday"}
      />
      <WeekDayColumn
        title="Jueves"
        meals={[]}
        active={activeDay === "thursday"}
      />
      <WeekDayColumn
        title="Viernes"
        meals={[]}
        active={activeDay === "friday"}
      />
      <WeekDayColumn
        title="Sábado"
        meals={[]}
        active={activeDay === "saturday"}
      />
      <WeekDayColumn
        title="Domingo"
        meals={[]}
        active={activeDay === "sunday"}
      />
    </div>
  );
};

export default Week;
