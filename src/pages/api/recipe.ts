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
  } else if (req.method === "DELETE") {
    return await deleteRecipe(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readRecipes(req: NextApiRequest, res: NextApiResponse) {
  try {
    const recipes = await prisma.recipe.findMany({
      include: { tags: true, instructions: true, ingredients: true },
    });
    return res.status(200).json({ data: recipes, success: true });
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
        tags: {
          create: [
            {
              name: "test",
            },
          ],
        },
        instructions: {
          create: [
            {
              description: "test",
            },
          ],
        },
        ingredients: {
          create: [
            {
              name: "apple",
              quantity: 1,
              unit: "unit",
            },
          ],
        },
      },
    });
    return res.status(200).json({ data: newRecipe, success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating recipe", success: false });
  }
}

async function deleteRecipe(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    await prisma.recipe.delete({
      where: {
        id: 2,
      },
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error deleting recipe", success: false });
  }
}
