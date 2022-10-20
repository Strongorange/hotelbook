import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelsController.js";
import { verifAdmin } from "../utils/verifyToken.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.route("/").all(verifAdmin).post(createHotel);
//UPDATE
hotelsRouter.route("/:id").all(verifAdmin).put(updateHotel);
//DELETE
hotelsRouter.route("/:id").all(verifAdmin).delete(deleteHotel);
//GET
hotelsRouter.route("/:id").get(getHotel);
//GET ALL
hotelsRouter.route("/").get(getAllHotels);

export default hotelsRouter;
