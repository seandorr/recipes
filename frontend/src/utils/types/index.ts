export type mealType = "Desayuno" | "Almuerzo" | "Cena" | "Merienda";

export type RecipeProps = {
  id: string;
  title: string;
  image?: string;
  mealType: mealType;
  tags?: string[];
  ingredients: string[];
  instructions?: string[];
};

export type DayDataProps = {
  dayKey: DaysProps;
  title: string;
  meals: { recipeId: string; title: string; mealType: mealType }[];
};

export type DaysProps =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type RecipeCardProps = {
  className?: string;
  title: string;
  image?: string;
  mealType: mealType;
  tags?: string[];
  type: "calendar" | "default";
  handleOnDeleteRecipeItem?: () => void;
  handleOnDuplicateRecipeItem?: () => void;
  handleOnMoreOptionsButton?: () => void;
  showMoreOptionsMenu?: boolean;
  handleOnTitleClick?: () => void;
};

export type RecipeDrawerProps = {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
  ref: React.Ref<HTMLDivElement>;
};

export type TagProps = {
  label: string;
  color?: string;
};

export type WeekMealProps = {
  recipeId: string;
  title: string;
  mealType: mealType;
};

export type WeekDayColumnProps = {
  dayKey: DaysProps;
  title: string;
  meals: WeekMealProps[];
  active: boolean;
  addMeal: ({ dayKey }: { dayKey: DaysProps }) => void;
  removeMeal: (dayKey: DaysProps, index: number) => void;
  reorderMeal: (dayKey: DaysProps, fromIndex: number, toIndex: number) => void;
  moveMealToDay: (
    fromDayKey: DaysProps,
    fromIndex: number,
    toDayKey: DaysProps,
  ) => void;
  duplicateMeal: (dayKey: DaysProps, index: number) => void;
  draggedItem: { dayKey: DaysProps; index: number } | null;
  setDraggedItem: (item: { dayKey: DaysProps; index: number } | null) => void;
  toggleMoreOptionsMenu: (dayKey: DaysProps, index: number) => void;
  openMenuRecipe: { dayKey: DaysProps; index: number } | null;
  openAddRecipeDrawer: boolean;
  viewRecipe: (recipeId: string) => void;
};
