import { v4 as uuidv4 } from "uuid";
import type { DayDataProps, RecipeProps } from "../types";

export const recipes: RecipeProps[] = [
  {
    id: uuidv4(),
    title: "Huevos con tostada y fruta",
    image: "breakfast_bagel",
    tags: ["Desayuno"],
    ingredients: ["Huevos", "Pan integral", "Fruta"],
  },
  {
    id: uuidv4(),
    title: "Yogur + frutos secos",
    image: "broccoli_beef",
    tags: ["Snack"],
  },
  {
    id: uuidv4(),
    title: "Bowl de pollo con arroz y verduras",
    image: "breakfast_bagel",
    tags: ["Almuerzo"],
  },
  {
    id: uuidv4(),
    title: "Hummus + zanahoria",
    image: "broccoli_beef",
    tags: ["Merienda"],
  },
  {
    id: uuidv4(),
    title: "Ternera con ensalada",
    image: "breakfast_bagel",
    tags: ["Cena"],
  },
  {
    id: uuidv4(),
    title: "Requesón",
    image: "broccoli_beef",
    tags: ["Snack noche"],
  },
];

export const initialWeekDays: DayDataProps[] = [
  {
    dayKey: "monday",
    title: "Lunes",
    meals: [
      {
        recipeId: recipes[0]?.id,
        title: "Huevos con tostada y fruta",
        slot: "Desayuno",
      },
      {
        recipeId: recipes[1]?.id,
        title: "Yogur + frutos secos",
        slot: "Snack",
      },
      {
        recipeId: recipes[2]?.id,
        title: "Bowl de pollo con arroz y verduras",
        slot: "Almuerzo",
      },
      {
        recipeId: recipes[3]?.id,
        title: "Hummus + zanahoria",
        slot: "Merienda",
      },
      {
        recipeId: recipes[4]?.id,
        title: "Ternera con ensalada",
        slot: "Cena",
      },
      {
        recipeId: recipes[5]?.id,
        title: "Requesón",
        slot: "Snack noche",
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
