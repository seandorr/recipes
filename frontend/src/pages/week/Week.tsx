import { useState } from "react";
import { RecipeCard } from "../../components/RecipeCard";
import { activeDay } from "../../utils/functions/getDay";
import styles from "./week.module.scss";

type IRecipe = {
  title: string;
  image: string;
  tags?: string[];
};

type IDays =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type IWeekDayColumn = {
  dayKey: IDays;
  title: string;
  meals: IRecipe[];
  active: boolean;
  addMeal: (dayKey: IDays) => void;
  removeMeal: (dayKey: IDays, index: number) => void;
};

type IDayData = {
  dayKey: IDays;
  title: string;
  meals: IRecipe[];
};

const initialWeekDays: IDayData[] = [
  {
    dayKey: "monday",
    title: "Lunes",
    meals: [
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
    ],
  },
  { dayKey: "tuesday", title: "Martes", meals: [] },
  { dayKey: "wednesday", title: "Miércoles", meals: [] },
  { dayKey: "thursday", title: "Jueves", meals: [] },
  { dayKey: "friday", title: "Viernes", meals: [] },
  { dayKey: "saturday", title: "Sábado", meals: [] },
  { dayKey: "sunday", title: "Domingo", meals: [] },
];

const WeekDayColumn = ({
  dayKey,
  title,
  meals,
  active,
  addMeal,
  removeMeal,
}: IWeekDayColumn) => {
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
        <button
          className={styles.addMealButton}
          onClick={() => addMeal(dayKey)}
        >
          +
        </button>
        {meals.map((recipe, index) => {
          const { title, tags } = recipe;

          return (
            <RecipeCard
              className={styles.recipeCard}
              key={index}
              title={title}
              tags={tags}
              type="calendar"
              handleOnDeleteRecipeItem={() => removeMeal(dayKey, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

const Week = () => {
  const [weekData, setWeekData] = useState<IDayData[]>(initialWeekDays);

  const addMeal = (dayKey: IDays) => {
    setWeekData((prev) => {
      return prev.map((day) =>
        day.dayKey === dayKey
          ? {
              ...day,
              meals: [
                ...day.meals,
                {
                  title: "Nueva receta",
                  image: "breakfast_bagel",
                  tags: ["Desayuno"],
                },
              ],
            }
          : day,
      );
    });
  };

  const removeMeal = (dayKey: IDays, index: number) => {
    setWeekData((prev) => {
      return prev.map((day) =>
        day.dayKey === dayKey
          ? {
              ...day,
              meals: day.meals.filter((_, mealIndex) => mealIndex !== index),
            }
          : day,
      );
    });
  };

  return (
    <div className={styles.weekContainer}>
      {weekData.map((weekDay: IDayData, index) => {
        const { dayKey, title, meals } = weekDay;
        return (
          <WeekDayColumn
            key={index}
            dayKey={dayKey}
            title={title}
            meals={meals}
            active={activeDay === dayKey}
            addMeal={addMeal}
            removeMeal={removeMeal}
          />
        );
      })}
    </div>
  );
};

export default Week;
