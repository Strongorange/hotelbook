import express from "express";

const roomsRouter = express.Router();

roomsRouter.route("/").get((req, res) => res.send("hello"));

export default roomsRouter;
