import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createIngredient(req, res);
  } else if (req.method === "GET") {
    return await readIngredient(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readIngredient(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ingredients = await prisma.ingredient.findMany();
    return res.status(200).json({ data: ingredients, success: true });
  } catch (error) {
    console.error("Request error", error);
    res
      .status(500)
      .json({ error: "Error getting ingredients", success: false });
  }
}

async function createIngredient(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newIngredient = await prisma.ingredient.create({
      data: {
        name: body.name,
        quantity: body.quantity,
        unit: body.unit,
      },
    });
    return res.status(200).json({ data: newIngredient, success: true });
  } catch (error) {
    console.error("Request error", error);
    res
      .status(500)
      .json({ error: "Error creating ingredient", success: false });
  }
}
