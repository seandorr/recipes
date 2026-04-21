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
  reorderMeal: (dayKey: IDays, fromIndex: number, toIndex: number) => void;
  moveMealToDay: (
    fromDayKey: IDays,
    fromIndex: number,
    toDayKey: IDays,
  ) => void;
  draggedItem: { dayKey: IDays; index: number } | null;
  setDraggedItem: (item: { dayKey: IDays; index: number } | null) => void;
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
  reorderMeal,
  moveMealToDay,
  draggedItem,
  setDraggedItem,
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
      <div
        className={styles.recipesContainer}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => {
          if (draggedItem && draggedItem.dayKey !== dayKey) {
            moveMealToDay(draggedItem.dayKey, draggedItem.index, dayKey);
            setDraggedItem(null);
          }
        }}
      >
        <button
          className={styles.addMealButton}
          onClick={() => addMeal(dayKey)}
        >
          +
        </button>
        {meals.map((recipe, index) => {
          const { title, tags } = recipe;
          const isDragged =
            draggedItem?.dayKey === dayKey && draggedItem?.index === index;

          return (
            <div
              className={styles.draggableRecipeCard}
              key={index}
              draggable
              onDragStart={() => setDraggedItem({ dayKey, index })}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => {
                if (draggedItem) {
                  // Same day reordering
                  if (
                    draggedItem.dayKey === dayKey &&
                    draggedItem.index !== index
                  ) {
                    reorderMeal(dayKey, draggedItem.index, index);
                  }
                  // Cross-day move
                  else if (draggedItem.dayKey !== dayKey) {
                    moveMealToDay(
                      draggedItem.dayKey,
                      draggedItem.index,
                      dayKey,
                    );
                  }
                  setDraggedItem(null);
                }
              }}
              onDragEnd={() => setDraggedItem(null)}
              style={{
                opacity: isDragged ? 0.5 : 1,
                cursor: isDragged ? "grabbing" : "grab",
              }}
            >
              <RecipeCard
                className={styles.recipeCard}
                title={title}
                tags={tags}
                type="calendar"
                handleOnDeleteRecipeItem={() => removeMeal(dayKey, index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Week = () => {
  const [weekData, setWeekData] = useState<IDayData[]>(initialWeekDays);
  const [draggedItem, setDraggedItem] = useState<{
    dayKey: IDays;
    index: number;
  } | null>(null);

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

  const reorderMeal = (dayKey: IDays, fromIndex: number, toIndex: number) => {
    setWeekData((prev) => {
      return prev.map((day) => {
        if (day.dayKey !== dayKey) return day;
        const newMeals = [...day.meals];
        const [movedMeal] = newMeals.splice(fromIndex, 1);
        newMeals.splice(toIndex, 0, movedMeal);
        return { ...day, meals: newMeals };
      });
    });
  };

  const moveMealToDay = (
    fromDayKey: IDays,
    fromIndex: number,
    toDayKey: IDays,
  ) => {
    setWeekData((prev) => {
      let mealToMove: IRecipe | undefined;

      // Find and remove meal from source day
      const updated = prev.map((day) => {
        if (day.dayKey === fromDayKey) {
          mealToMove = day.meals[fromIndex];
          return {
            ...day,
            meals: day.meals.filter((_, index) => index !== fromIndex),
          };
        }
        return day;
      });

      // Add meal to target day
      if (mealToMove !== undefined) {
        return updated.map((day) =>
          day.dayKey === toDayKey
            ? { ...day, meals: [...day.meals, mealToMove as IRecipe] }
            : day,
        );
      }

      return updated;
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
            reorderMeal={reorderMeal}
            moveMealToDay={moveMealToDay}
            draggedItem={draggedItem}
            setDraggedItem={setDraggedItem}
          />
        );
      })}
    </div>
  );
};

export default Week;
