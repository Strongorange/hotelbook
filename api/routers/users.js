import express from "express";

const usersRouter = express.Router();

usersRouter.route("/").get((req, res) => res.send("hello"));

export default usersRouter;
