import { Request, Response } from "express";
import Recipe from "../models/Recipe";

export const getAllRecipes = async (_: Request, res: Response) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error in getAllRecipes controller", error);
    res.status(500).json({ message: "Error fetching recipes", error });
  }
};

export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (error) {
    console.error("Error in getRecipeById controller", error);
    res.status(500).json({ message: "Error fetching recipe", error });
  }
};

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const { title, mealType, ingredients, instructions } = req.body;
    const recipe = new Recipe({
      title,
      mealType,
      ingredients,
      instructions,
    });
    const savedNote = await recipe.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createRecipe controller", error);
    res.status(500).json({ message: "Error creating recipe", error });
  }
};

export const updateRecipe = async (req: Request, res: Response) => {
  try {
    const { title, mealType, ingredients, instructions } = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      {
        title,
        mealType,
        ingredients,
        instructions,
      },
      { new: true },
    );
    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error("Error in updateRecipe controller", error);
    res.status(500).json({ message: "Error updating recipe", error });
  }
};

export const deleteRecipe = async (req: Request, res: Response) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted successfuly" });
  } catch (error) {
    console.error("Error in deleteRecipe controller", error);
    res.status(500).json({ message: "Error deleting recipe", error });
  }
};
