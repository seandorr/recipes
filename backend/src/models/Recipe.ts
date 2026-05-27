import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    mealType: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
    },
    ingredients: {
      type: [String],
      required: true,
    },
    instructions: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true },
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
