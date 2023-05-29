import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

function hashPassword(plainTextPwd: string) {
  bcrypt.hash(plainTextPwd, 10, function (err, hash) {
    if (!err) {
      return hash;
    }
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createUser(req, res);
  } else if (req.method === "GET") {
    return await readUsers(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json({ data: users, success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error getting users", success: false });
  }
}

async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        // password: hashPassword(body.password),
        password: await bcrypt.hash(body.password, 10),
      },
    });
    return res.status(200).json({ data: newUser, success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating user", success: false });
  }
}
