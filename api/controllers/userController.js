import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (e) {
    next(e);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (e) {
    next(e);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (e) {
    next(e);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};
