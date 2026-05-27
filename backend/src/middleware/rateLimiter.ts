import { Request, Response } from "express";
import rateLimit from "../config/upstash";

const rateLimiter = async (_: Request, res: Response, next: Function) => {
  try {
    // TODO: Use a unique key for each user (auth) or IP address to track their request count
    const { success } = await rateLimit.limit("my-limit-key");
    if (!success) {
      return res
        .status(429)
        .json({ message: "Too many requests, please try again later" });
    }
    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
