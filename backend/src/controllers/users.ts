import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import User from "../models/user";

/**
 * @description Register a new user
 * @param req
 * @param res
 * @param next
 */
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Email is already exists!" });
    }

    user = new User(req.body);
    await user.save();

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });

    res.sendStatus(StatusCodes.OK);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong!" });
  }
};
