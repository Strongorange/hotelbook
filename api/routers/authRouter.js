import express from "express";

const authRouter = express.Router();

authRouter.route("/").get((req, res) => res.send("hello"));
authRouter.route("/register").get((req, res) => res.send("register"));

export default authRouter;
