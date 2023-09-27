import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createInstruction(req, res);
  } else if (req.method === "GET") {
    return await readInstruction(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readInstruction(req: NextApiRequest, res: NextApiResponse) {
  try {
    const instructions = await prisma.instruction.findMany();
    return res.status(200).json({ data: instructions, success: true });
  } catch (error) {
    console.error("Request error", error);
    res
      .status(500)
      .json({ error: "Error getting instructions", success: false });
  }
}

async function createInstruction(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newInstruction = await prisma.instruction.create({
      data: {
        description: body.description,
      },
    });
    return res.status(200).json({ data: newInstruction, success: true });
  } catch (error) {
    console.error("Request error", error);
    res
      .status(500)
      .json({ error: "Error creating instruction", success: false });
  }
}
