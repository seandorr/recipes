import { Fragment, useState, useRef, type DragEvent } from "react";
import { RecipeCard } from "../../components/RecipeCard";
import { RecipeDrawer } from "../../components/RecipeDrawer";
import { useClickOutside } from "../../utils/hooks/useClickOutside";
import { useEscapePress } from "../../utils/hooks/useEscapePress";
import { activeDay } from "../../utils/functions/getDay";
import styles from "./week.module.scss";
import { Tag } from "../../components/Tag";
import { recipes, initialWeekDays } from "../../utils/constants/recipes";
import type {
  DayDataProps,
  DaysProps,
  WeekDayColumnProps,
  WeekMealProps,
} from "../../utils/types";

const WeekDayColumn = ({
  dayKey,
  title,
  meals,
  active,
  addMeal,
  removeMeal,
  reorderMeal,
  duplicateMeal,
  moveMealToDay,
  draggedItem,
  setDraggedItem,
  placeholderLocation,
  setPlaceholderLocation,
  toggleMoreOptionsMenu,
  openMenuRecipe,
  openAddRecipeDrawer,
  viewRecipe,
}: WeekDayColumnProps) => {
  const dragImageRef = useRef<HTMLElement | null>(null);
  const placeholderIndex =
    placeholderLocation?.dayKey === dayKey ? placeholderLocation.index : null;

  const cleanupDragGhost = () => {
    if (dragImageRef.current) {
      document.body.removeChild(dragImageRef.current);
      dragImageRef.current = null;
    }
  };

  const getDropIndex = (e: DragEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const shouldPlaceAfter = e.clientY > rect.top + rect.height / 2;
    const nextIndex = shouldPlaceAfter ? index + 1 : index;
    return Math.min(nextIndex, meals.length);
  };

  const setPlaceholderIfChanged = (dayKey: DaysProps, index: number) => {
    if (
      placeholderLocation?.dayKey !== dayKey ||
      placeholderLocation?.index !== index
    ) {
      setPlaceholderLocation({ dayKey, index });
    }
  };

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
        onDragOver={(e) => {
          e.preventDefault();
          if (draggedItem && e.currentTarget === e.target) {
            setPlaceholderLocation({ dayKey, index: meals.length });
          }
        }}
        onDrop={() => {
          if (!draggedItem) {
            setPlaceholderLocation(null);
            return;
          }

          const targetIndex =
            placeholderLocation?.dayKey === dayKey
              ? placeholderLocation.index
              : meals.length;
          if (draggedItem.dayKey === dayKey) {
            if (draggedItem.index !== targetIndex) {
              reorderMeal(dayKey, draggedItem.index, targetIndex);
            }
          } else {
            moveMealToDay(
              draggedItem.dayKey,
              draggedItem.index,
              dayKey,
              targetIndex,
            );
          }

          setDraggedItem(null);
          setPlaceholderLocation(null);
        }}
        onDragLeave={(e) => {
          if (e.currentTarget === e.target) setPlaceholderLocation(null);
        }}
      >
        <button
          className={styles.addMealButton}
          onClick={() => addMeal({ dayKey })}
          disabled={openAddRecipeDrawer}
        >
          +
        </button>
        {meals.map((meal, index) => {
          const recipe = recipes.find((item) => item.id === meal.recipeId);
          const title = meal.title ?? recipe?.title ?? "Receta";
          const mealType = recipe?.mealType ?? "Desayuno";
          const tags = recipe?.tags ?? [];
          const isDragged =
            draggedItem?.dayKey === dayKey && draggedItem?.index === index;
          const isMenuOpen =
            openMenuRecipe?.dayKey === dayKey &&
            openMenuRecipe?.index === index;

          return (
            <Fragment key={`${meal.recipeId}-${index}`}>
              {placeholderIndex === index && (
                <div
                  className={`${styles.dropPlaceholder} ${styles.dropPlaceholderActive}`}
                >
                  <div className={styles.dropPlaceholderInner}>
                    <span className={styles.dropPlaceholderLabel}>
                      Drop here
                    </span>
                  </div>
                </div>
              )}
              <div
                className={`${styles.draggableRecipeCard} ${
                  isDragged ? styles.dragSourceCollapsed : ""
                }`}
                draggable
                onDragStart={(e) => {
                  cleanupDragGhost();
                  const card = e.currentTarget.cloneNode(true) as HTMLElement;
                  card.style.position = "absolute";
                  card.style.top = "-9999px";
                  card.style.left = "-9999px";
                  card.style.width = `${e.currentTarget.offsetWidth}px`;
                  card.style.pointerEvents = "none";
                  card.style.opacity = "0.95";
                  document.body.appendChild(card);
                  dragImageRef.current = card;
                  e.dataTransfer.setDragImage(
                    card,
                    e.clientX - e.currentTarget.getBoundingClientRect().left,
                    e.clientY - e.currentTarget.getBoundingClientRect().top,
                  );
                  e.dataTransfer.effectAllowed = "move";
                  requestAnimationFrame(() => {
                    setDraggedItem({ dayKey, index });
                  });
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  setPlaceholderIfChanged(dayKey, getDropIndex(e, index));
                }}
                onDrop={(e) => {
                  e.stopPropagation();
                  if (!draggedItem) {
                    setPlaceholderLocation(null);
                    return;
                  }
                  const dropIndex =
                    placeholderLocation?.dayKey === dayKey
                      ? placeholderLocation.index
                      : getDropIndex(e, index);
                  if (
                    draggedItem.dayKey === dayKey &&
                    draggedItem.index !== dropIndex
                  ) {
                    reorderMeal(dayKey, draggedItem.index, dropIndex);
                  } else if (draggedItem.dayKey !== dayKey) {
                    moveMealToDay(
                      draggedItem.dayKey,
                      draggedItem.index,
                      dayKey,
                      dropIndex,
                    );
                  }
                  setDraggedItem(null);
                  setPlaceholderLocation(null);
                }}
                onDragEnd={() => {
                  cleanupDragGhost();
                  setDraggedItem(null);
                  setPlaceholderLocation(null);
                }}
                style={{
                  cursor: isDragged ? "grabbing" : "grab",
                }}
              >
                <RecipeCard
                  className={styles.recipeCard}
                  title={title}
                  tags={tags}
                  type="calendar"
                  mealType={mealType}
                  handleOnDeleteRecipeItem={() => removeMeal(dayKey, index)}
                  handleOnDuplicateRecipeItem={() =>
                    duplicateMeal(dayKey, index)
                  }
                  handleOnMoreOptionsButton={() =>
                    toggleMoreOptionsMenu(dayKey, index)
                  }
                  showMoreOptionsMenu={isMenuOpen}
                  handleOnTitleClick={() => viewRecipe(meal.recipeId)}
                />
              </div>
            </Fragment>
          );
        })}
        <div
          className={`${styles.bottomDropZone} ${
            placeholderIndex === meals.length
              ? styles.dropPlaceholderActive
              : ""
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            if (draggedItem) {
              setPlaceholderIfChanged(dayKey, meals.length);
            }
          }}
          onDrop={(e) => {
            e.stopPropagation();
            if (!draggedItem) {
              setPlaceholderLocation(null);
              return;
            }
            const dropIndex = meals.length;
            if (draggedItem.dayKey === dayKey) {
              if (draggedItem.index !== dropIndex) {
                reorderMeal(dayKey, draggedItem.index, dropIndex);
              }
            } else {
              moveMealToDay(
                draggedItem.dayKey,
                draggedItem.index,
                dayKey,
                dropIndex,
              );
            }
            setDraggedItem(null);
            setPlaceholderLocation(null);
          }}
          onDragLeave={(e) => {
            if (e.currentTarget === e.target) setPlaceholderLocation(null);
          }}
        />
      </div>
    </div>
  );
};

const Week = () => {
  const [weekData, setWeekData] = useState<DayDataProps[]>(initialWeekDays);
  const [draggedItem, setDraggedItem] = useState<{
    dayKey: DaysProps;
    index: number;
  } | null>(null);
  const [openMenuRecipe, setOpenMenuRecipe] = useState<{
    dayKey: DaysProps;
    index: number;
  } | null>(null);
  const [openAddRecipeDrawer, setOpenAddRecipeDrawer] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [placeholderLocation, setPlaceholderLocation] = useState<{
    dayKey: DaysProps;
    index: number;
  } | null>(null);
  const weekContainerRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    weekContainerRef,
    () => setOpenMenuRecipe(null),
    !!openMenuRecipe,
  );

  useClickOutside(
    drawerRef,
    () => setOpenAddRecipeDrawer(false),
    openAddRecipeDrawer,
  );

  useEscapePress(
    weekContainerRef,
    () => setOpenMenuRecipe(null),
    !!openMenuRecipe,
  );

  useEscapePress(
    weekContainerRef,
    () => setOpenAddRecipeDrawer(false),
    !!openAddRecipeDrawer,
  );

  const viewRecipe = (recipeId: string) => {
    setSelectedRecipeId(recipeId);
    setOpenAddRecipeDrawer(true);
  };

  const selectedRecipe = selectedRecipeId
    ? (recipes.find((recipe) => recipe.id === selectedRecipeId) ?? null)
    : null;

  const addMeal = ({ dayKey }: { dayKey: DaysProps }) => {
    const defaultRecipeId = recipes[0]?.id ?? "1";
    const newMeal: WeekMealProps = {
      recipeId: defaultRecipeId,
      title: "Nueva receta",
      mealType: "Desayuno",
    };

    setWeekData((prev) => {
      return prev.map((day) =>
        day.dayKey === dayKey
          ? {
              ...day,
              meals: [...day.meals, newMeal],
            }
          : day,
      );
    });
  };

  const onClose = () => {
    setOpenAddRecipeDrawer(false);
    setSelectedRecipeId(null);
  };

  const removeMeal = (dayKey: DaysProps, index: number) => {
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
    setOpenMenuRecipe(null);
  };

  const reorderMeal = (
    dayKey: DaysProps,
    fromIndex: number,
    toIndex: number,
  ) => {
    setWeekData((prev) => {
      return prev.map((day) => {
        if (day.dayKey !== dayKey) return day;
        const newMeals = [...day.meals];
        const [movedMeal] = newMeals.splice(fromIndex, 1);
        const insertionIndex = fromIndex < toIndex ? toIndex - 1 : toIndex;
        newMeals.splice(insertionIndex, 0, movedMeal);
        return { ...day, meals: newMeals };
      });
    });
    setOpenMenuRecipe(null);
  };

  const duplicateMeal = (dayKey: DaysProps, index: number) => {
    setWeekData((prev) => {
      return prev.map((day) => {
        if (day.dayKey !== dayKey) return day;
        const mealToDuplicate = day.meals[index];
        const newMeals = [...day.meals];
        newMeals.splice(index + 1, 0, { ...mealToDuplicate });
        return { ...day, meals: newMeals };
      });
    });
    setOpenMenuRecipe(null);
  };

  const moveMealToDay = (
    fromDayKey: DaysProps,
    fromIndex: number,
    toDayKey: DaysProps,
    toIndex?: number,
  ) => {
    setWeekData((prev) => {
      const sourceDay = prev.find((day) => day.dayKey === fromDayKey);
      const mealToMove = sourceDay?.meals[fromIndex];

      if (!mealToMove) {
        return prev;
      }

      return prev.map((day) => {
        if (day.dayKey === fromDayKey) {
          return {
            ...day,
            meals: day.meals.filter((_, index) => index !== fromIndex),
          };
        }

        if (day.dayKey === toDayKey) {
          const insertionIndex =
            typeof toIndex === "number" ? toIndex : day.meals.length;
          const nextMeals = [...day.meals];
          nextMeals.splice(insertionIndex, 0, mealToMove);
          return {
            ...day,
            meals: nextMeals,
          };
        }

        return day;
      });
    });
    setOpenMenuRecipe(null);
  };

  const toggleMoreOptionsMenu = (dayKey: DaysProps, index: number) => {
    setOpenMenuRecipe((prev) => {
      // If clicking the same recipe, close the menu
      if (prev?.dayKey === dayKey && prev?.index === index) {
        return null;
      }
      // Otherwise, open the menu for this recipe
      return { dayKey, index };
    });
  };

  return (
    <div
      className={styles.weekContainer}
      ref={weekContainerRef}
      onClick={() => setOpenMenuRecipe(null)}
    >
      {openAddRecipeDrawer && selectedRecipe && (
        <RecipeDrawer
          ref={drawerRef}
          onClose={onClose}
          title={selectedRecipe ? selectedRecipe.title : "Nueva receta"}
          content={
            <>
              <Tag label={selectedRecipe?.mealType} />
              {selectedRecipe.image && (
                <img
                  src={
                    selectedRecipe?.image
                      ? `/img/${selectedRecipe.image}.jpg`
                      : "/img/breakfast_bagel.jpg"
                  }
                  alt={selectedRecipe?.title}
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "8px",
                    marginTop: "1rem",
                  }}
                />
              )}

              <ul>
                {selectedRecipe.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </>
          }
        />
      )}
      {weekData.map((weekDay: DayDataProps, index) => {
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
            duplicateMeal={duplicateMeal}
            moveMealToDay={moveMealToDay}
            draggedItem={draggedItem}
            setDraggedItem={setDraggedItem}
            toggleMoreOptionsMenu={toggleMoreOptionsMenu}
            placeholderLocation={placeholderLocation}
            setPlaceholderLocation={setPlaceholderLocation}
            openMenuRecipe={openMenuRecipe}
            openAddRecipeDrawer={openAddRecipeDrawer}
            viewRecipe={viewRecipe}
          />
        );
      })}
    </div>
  );
};

export default Week;
