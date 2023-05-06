import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createTag(req, res);
  } else if (req.method === "GET") {
    return await readTags(req, res);
  } else if (req.method === "DELETE") {
    return await deleteTag(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readTags(req: NextApiRequest, res: NextApiResponse) {
  try {
    const tags = await prisma.tag.findMany();
    return res.status(200).json({ data: tags, success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error getting tags", success: false });
  }
}

async function createTag(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newTag = await prisma.tag.create({
      data: {
        name: body.name,
      },
    });
    return res.status(200).json({ data: newTag, success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating tag", success: false });
  }
}

async function deleteTag(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    await prisma.tag.delete({
      where: {
        id: 6,
      },
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error deleting tag", success: false });
  }
}
