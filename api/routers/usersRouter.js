import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { verifAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const usersRouter = express.Router();

//verifyToken 이 이상없다면 verifyToken 함수의 마지막 next() 가 (req,res,next) 부분을 실행시킴
usersRouter
  .route("/checkauthentication")
  .get(verifyToken, (req, res, next) => res.send("인증됨"));

usersRouter
  .route("/checkuser/:id")
  .get(verifyUser, (req, res, next) => res.send("인증됨 유저 삭제가능"));

usersRouter
  .route("/checkadmin/:id")
  .get(verifAdmin, (req, res, next) =>
    res.send("어드민임 모든 계정 삭제 가능")
  );

//CREATE
usersRouter.route("/").all(verifAdmin).post(createUser);
//UPDATE
usersRouter.route("/:id").all(verifyUser).put(updateUser);
//DELETE
usersRouter.route("/:id").all(verifyUser).delete(deleteUser);
//GET
usersRouter.route("/:id").all(verifyUser).get(getUser);
//GET ALL
usersRouter.route("/").all(verifAdmin).get(getAllUsers);

export default usersRouter;
