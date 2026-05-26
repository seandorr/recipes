import { v4 as uuidv4 } from "uuid";
import type { DayDataProps, RecipeProps } from "../types";

export const recipes: RecipeProps[] = [
  {
    id: uuidv4(),
    title: "Avena cremosa",
    mealType: "Desayuno",
    ingredients: ["Avena", "Leche", "Plátano", "Nueces"],
    instructions: [
      "Hervir la avena con la leche 5 min",
      "Añadir plá tano en rodajas",
      "Decorar con nueces picadas",
    ],
  },
  {
    id: uuidv4(),
    title: "Yogur con fruta",
    mealType: "Merienda",
    ingredients: ["Yogur Griego", "Manzana", "Semillas"],
    instructions: [
      "Cortar la manzana en cubos",
      "Mezclar el yogur con la manzana y las semillas",
    ],
  },
  {
    id: uuidv4(),
    title: "Bowl de pollo mediterráneo",
    mealType: "Almuerzo",
    ingredients: [
      "Pechuga de pollo",
      "Arroz",
      "Tomate",
      "Pepino",
      "Aceite de oliva",
    ],
    instructions: [
      "Cocinar el arroz en agua y sal",
      "Cocinar la pechuga de pollo a la plancha con especias",
      "Cortar las verduras",
      "Mezclar todo",
    ],
  },
  {
    id: uuidv4(),
    title: "Hummus + zanahoria",
    mealType: "Merienda",
    ingredients: ["Hummus", "Zanahoria"],
    instructions: [
      "Pelar y cortar la zanahoria en bastones",
      "Servir con hummus",
    ],
  },
  {
    id: uuidv4(),
    title: "Ternera con brócoli salteado",
    mealType: "Cena",
    ingredients: ["Ternera", "Brócoli", "Aceite de oliva"],
    instructions: [
      "Sofreír brócoli con aceite de oliva",
      "Cocinar ternera a la plancha",
    ],
  },
  {
    id: uuidv4(),
    title: "Requesón",
    mealType: "Merienda",
    ingredients: ["Requesón"],
  },
  // Martes
  {
    id: uuidv4(),
    title: "Tortilla de espinacas",
    mealType: "Desayuno",
    ingredients: ["Huevos", "Espinacas", "Tostada integral"],
    instructions: [
      "Batir huevos",
      "Cocinar espinacas 1-2 min",
      "Añadir huevo y hacer tortilla",
      "Tostar pan",
    ],
  },
  {
    id: uuidv4(),
    title: "Fruta y frutos secos",
    mealType: "Merienda",
    ingredients: ["Fruta", "Frutos secos"],
  },
  {
    id: uuidv4(),
    title: "Wrap de pollo",
    mealType: "Almuerzo",
    ingredients: ["Tortilla integral", "Pollo", "Lechuga", "Tomate", "Yogur"],
    instructions: [
      "Hacer pollo a la plancha con sal, pimienta",
      "Cortar verduras",
      "Mezclar yogur con limón y sal",
      "Rellenar wrap",
    ],
  },
  {
    id: uuidv4(),
    title: "Yogur con avena",
    mealType: "Merienda",
    ingredients: ["Yogur", "Avena"],
  },
  {
    id: uuidv4(),
    title: "Salmón al horno",
    mealType: "Cena",
    ingredients: ["Salmón", "Calabacín", "Zanahoria", "Limón"],
    instructions: [
      "Horno 180°",
      "Poner salmón + verduras + aceite + limón",
      "Hornear 15-18 min",
      "Sean añade arroz cocido",
    ],
  },
  {
    id: uuidv4(),
    title: "Chocolate negro",
    mealType: "Merienda",
    ingredients: ["Chocolate negro"],
  },
  // Miércoles
  {
    id: uuidv4(),
    title: "Yogur bowl con avena",
    mealType: "Desayuno",
    ingredients: ["Yogur", "Avena", "Frutos rojos"],
    instructions: ["Mezclar todos los ingredientes", "Dejar reposar 3-5 min"],
  },
  {
    id: uuidv4(),
    title: "Plátano y nueces",
    mealType: "Merienda",
    ingredients: ["Plátano", "Nueces"],
  },
  {
    id: uuidv4(),
    title: "Pasta con pollo",
    mealType: "Almuerzo",
    ingredients: ["Pasta integral", "Pollo", "Verduras"],
    instructions: ["Cocer pasta", "Saltear pollo y verduras", "Mezclar"],
  },
  {
    id: uuidv4(),
    title: "Hummus y pepino",
    mealType: "Merienda",
    ingredients: ["Hummus", "Pepino"],
  },
  {
    id: uuidv4(),
    title: "Hamburguesa magra con ensalada",
    mealType: "Cena",
    ingredients: ["Carne magra", "Lechuga", "Tomate", "Pepino", "Aceite"],
    instructions: ["Hacer hamburguesa a la plancha", "Servir con ensalada"],
  },
  // Jueves
  {
    id: uuidv4(),
    title: "Tostada con aguacate y huevo",
    mealType: "Desayuno",
    ingredients: ["Pan integral", "Aguacate", "Huevo"],
    instructions: [
      "Tostar pan",
      "Cocinar huevo a la plancha o hervido",
      "Poner aguacate",
    ],
  },
  {
    id: uuidv4(),
    title: "Manzana y almendras",
    mealType: "Merienda",
    ingredients: ["Manzana", "Almendras"],
  },
  {
    id: uuidv4(),
    title: "Chili de pavo",
    mealType: "Almuerzo",
    ingredients: ["Pavo molido", "Tomate triturado", "Frijoles"],
    instructions: [
      "Sofreír cebolla",
      "Añadir pavo y cocinar",
      "Añadir tomate + frijoles + especias",
      "Cocinar 15 min",
      "Sean añade arroz cocido",
    ],
  },
  {
    id: uuidv4(),
    title: "Yogur natural",
    mealType: "Merienda",
    ingredients: ["Yogur natural"],
  },
  {
    id: uuidv4(),
    title: "Tortilla de espinacas",
    mealType: "Cena",
    ingredients: ["Huevos", "Espinacas"],
    instructions: ["Cocinar en sartén antiadherente"],
  },
  // Viernes
  {
    id: uuidv4(),
    title: "Avena con pera y nueces",
    mealType: "Desayuno",
    ingredients: ["Avena", "Leche", "Pera"],
    instructions: ["Cocer avena", "Añadir pera en trozos"],
  },
  {
    id: uuidv4(),
    title: "Yogur y semillas",
    mealType: "Merienda",
    ingredients: ["Yogur", "Semillas"],
  },
  {
    id: uuidv4(),
    title: "Arroz con pollo",
    mealType: "Almuerzo",
    ingredients: ["Arroz integral", "Pollo", "Verduras"],
    instructions: ["Cocer arroz", "Saltear pollo y verduras"],
  },
  {
    id: uuidv4(),
    title: "Ternera con calabacín",
    mealType: "Cena",
    ingredients: ["Ternera", "Calabacín"],
    instructions: [
      "Cortar calabacín en rodajas",
      "Hacer a la plancha",
      "Hacer carne",
    ],
  },
  // Sábado
  {
    id: uuidv4(),
    title: "Huevos revueltos",
    mealType: "Desayuno",
    ingredients: ["Huevos", "Tostada integral"],
    instructions: ["Cocinar huevos removiendo"],
  },
  {
    id: uuidv4(),
    title: "Wrap de pavo",
    mealType: "Almuerzo",
    ingredients: ["Tortilla integral", "Pavo", "Verduras"],
    instructions: [
      "Hacer pavo a la plancha",
      "Cortar verduras",
      "Mezclar yogur con limón",
      "Rellenar",
    ],
  },
  {
    id: uuidv4(),
    title: "Salmón con patata",
    mealType: "Cena",
    ingredients: ["Salmón", "Patata", "Ensalada"],
    instructions: [
      "Hornear salmón 15-18 min",
      "Cocer patata",
      "Preparar ensalada",
    ],
  },
  // Domingo
  {
    id: uuidv4(),
    title: "Pancakes de avena",
    mealType: "Desayuno",
    ingredients: ["Avena molida", "Huevo", "Leche"],
    instructions: [
      "Triturar avena",
      "Mezclar con huevo y leche",
      "Hacer tortitas en sartén antiadherente",
      "Servir con fruta",
    ],
  },
  {
    id: uuidv4(),
    title: "Yogur con miel",
    mealType: "Merienda",
    ingredients: ["Yogur", "Miel"],
  },
  {
    id: uuidv4(),
    title: "Pollo al horno",
    mealType: "Almuerzo",
    ingredients: ["Pollo", "Especias", "Verduras"],
    instructions: [
      "Horno 180°",
      "Pollo con sal, pimienta, ajo, limón",
      "Hornear 25-30 min",
      "Cocer arroz",
      "Preparar ensalada",
    ],
  },
  {
    id: uuidv4(),
    title: "Tortilla con verduras",
    mealType: "Cena",
    ingredients: ["Huevos", "Verduras"],
    instructions: ["Cocinar en sartén"],
  },
];

export const initialWeekDays: DayDataProps[] = [
  {
    dayKey: "monday",
    title: "Lunes",
    meals: [
      {
        recipeId: recipes[0]?.id,
        title: "Avena cremosa",
        mealType: "Desayuno",
      },
      {
        recipeId: recipes[1]?.id,
        title: "Yogur con fruta",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[2]?.id,
        title: "Bowl de pollo mediterráneo",
        mealType: "Almuerzo",
      },
      {
        recipeId: recipes[3]?.id,
        title: "Hummus + zanahoria",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[4]?.id,
        title: "Ternera con ensalada",
        mealType: "Cena",
      },
      {
        recipeId: recipes[5]?.id,
        title: "Requesón",
        mealType: "Merienda",
      },
    ],
  },
  {
    dayKey: "tuesday",
    title: "Martes",
    meals: [
      {
        recipeId: recipes[6]?.id,
        title: "Tortilla de espinacas",
        mealType: "Desayuno",
      },
      {
        recipeId: recipes[7]?.id,
        title: "Fruta y frutos secos",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[8]?.id,
        title: "Wrap de pollo",
        mealType: "Almuerzo",
      },
      {
        recipeId: recipes[9]?.id,
        title: "Yogur con avena",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[10]?.id,
        title: "Salmón al horno",
        mealType: "Cena",
      },
      {
        recipeId: recipes[11]?.id,
        title: "Chocolate negro",
        mealType: "Merienda",
      },
    ],
  },
  {
    dayKey: "wednesday",
    title: "Miércoles",
    meals: [
      {
        recipeId: recipes[12]?.id,
        title: "Yogur bowl con avena",
        mealType: "Desayuno",
      },
      {
        recipeId: recipes[13]?.id,
        title: "Plátano y nueces",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[14]?.id,
        title: "Pasta con pollo",
        mealType: "Almuerzo",
      },
      {
        recipeId: recipes[15]?.id,
        title: "Hummus y pepino",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[16]?.id,
        title: "Hamburguesa magra con ensalada",
        mealType: "Cena",
      },
      {
        recipeId: recipes[5]?.id,
        title: "Requesón",
        mealType: "Merienda",
      },
    ],
  },
  {
    dayKey: "thursday",
    title: "Jueves",
    meals: [
      {
        recipeId: recipes[17]?.id,
        title: "Tostada con aguacate y huevo",
        mealType: "Desayuno",
      },
      {
        recipeId: recipes[18]?.id,
        title: "Manzana y almendras",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[19]?.id,
        title: "Chili de pavo",
        mealType: "Almuerzo",
      },
      {
        recipeId: recipes[20]?.id,
        title: "Yogur natural",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[21]?.id,
        title: "Tortilla de espinacas",
        mealType: "Cena",
      },
      {
        recipeId: recipes[11]?.id,
        title: "Chocolate negro",
        mealType: "Merienda",
      },
    ],
  },
  {
    dayKey: "friday",
    title: "Viernes",
    meals: [
      {
        recipeId: recipes[22]?.id,
        title: "Avena con pera y nueces",
        mealType: "Desayuno",
      },
      {
        recipeId: recipes[23]?.id,
        title: "Yogur y semillas",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[24]?.id,
        title: "Arroz con pollo",
        mealType: "Almuerzo",
      },
      {
        recipeId: recipes[7]?.id,
        title: "Fruta y frutos secos",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[25]?.id,
        title: "Ternera con calabacín",
        mealType: "Cena",
      },
      {
        recipeId: recipes[5]?.id,
        title: "Requesón",
        mealType: "Merienda",
      },
    ],
  },
  {
    dayKey: "saturday",
    title: "Sábado",
    meals: [
      {
        recipeId: recipes[26]?.id,
        title: "Huevos revueltos",
        mealType: "Desayuno",
      },
      {
        recipeId: recipes[13]?.id,
        title: "Plátano y nueces",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[27]?.id,
        title: "Wrap de pavo",
        mealType: "Almuerzo",
      },
      {
        recipeId: recipes[9]?.id,
        title: "Yogur con avena",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[28]?.id,
        title: "Salmón con patata",
        mealType: "Cena",
      },
      {
        recipeId: recipes[11]?.id,
        title: "Chocolate negro",
        mealType: "Merienda",
      },
    ],
  },
  {
    dayKey: "sunday",
    title: "Domingo",
    meals: [
      {
        recipeId: recipes[29]?.id,
        title: "Pancakes de avena",
        mealType: "Desayuno",
      },
      {
        recipeId: recipes[30]?.id,
        title: "Yogur con miel",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[31]?.id,
        title: "Pollo al horno",
        mealType: "Almuerzo",
      },
      {
        recipeId: recipes[32]?.id,
        title: "Hummus y zanahoria",
        mealType: "Merienda",
      },
      {
        recipeId: recipes[33]?.id,
        title: "Tortilla con verduras",
        mealType: "Cena",
      },
      {
        recipeId: recipes[5]?.id,
        title: "Requesón",
        mealType: "Merienda",
      },
    ],
  },
];
