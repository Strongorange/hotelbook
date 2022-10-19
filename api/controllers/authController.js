import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  const { username, password, email, isAdmin } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const newUser = new User({
      username,
      password: hash,
      email,
    });

    await newUser.save();
    res.status(201).send("유저 생성 완료");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return next(createError(404, "유저 없음"));
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return next(createError(400, "비밀번호 / 유저네임 틀림"));
    //클라이언트에서 password 와 isAdmin 확인하지 못 하게 함
    const { password, isAdmin, ...otherDetails } = user._doc;
    res.status(200).json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};
