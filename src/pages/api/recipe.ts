import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createRecipe(req, res);
  } else if (req.method === "GET") {
    return await readRecipes(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readRecipes(req: NextApiRequest, res: NextApiResponse) {
  try {
    const recipes = await prisma.recipe.findMany();
    return res.status(200).json(recipes, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error getting recipes", success: false });
  }
}

async function createRecipe(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newRecipe = await prisma.recipe.create({
      data: {
        title: body.title,
        tags: body.tags,
      },
    });
    return res.status(200).json(newRecipe, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating recipe", success: false });
  }
}
