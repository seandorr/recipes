import { Request, Response } from "express";

export const getAllRecipes = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Getting all recipes" });
};

export const getRecipeById = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Getting recipe by ID" });
};

export const createRecipe = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Creating recipe" });
};

export const updateRecipe = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Updating recipe" });
};

export const deleteRecipe = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Deleting recipe" });
};
