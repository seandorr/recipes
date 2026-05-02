export type RecipeProps = {
  id: string;
  title: string;
  image?: string;
  tags?: string[];
  ingredients?: string[];
  instructions?: string[];
};

export type DayDataProps = {
  dayKey: DaysProps;
  title: string;
  meals: { recipeId: string; title: string; slot?: string }[];
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
