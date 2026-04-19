export type IRecipe = {
  title: string;
  image: string;
  tags?: string[];
};

export const recipes: IRecipe[] = [
  {
    title: "Breakfast bagel",
    image: "breakfast_bagel",
    tags: ["breakfast"],
  },
  {
    title: "Broccoli beef",
    image: "broccoli_beef",
    tags: ["lunch", "dinner"],
  },
];
