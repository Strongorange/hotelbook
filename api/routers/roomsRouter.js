import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/roomsController.js";

import { verifAdmin } from "../utils/verifyToken.js";

const roomsRouter = express.Router();

//CREATE
roomsRouter.route("/:hotelid").all(verifAdmin).post(createRoom);
//UPDATE
roomsRouter.route("/:id").all(verifAdmin).put(updateRoom);
//DELETE
roomsRouter.route("/:id/:hotelid").all(verifAdmin).delete(deleteRoom);
//GET
roomsRouter.route("/:id").get(getRoom);
//GET ALL
roomsRouter.route("/").get(getAllRooms);

export default roomsRouter;
