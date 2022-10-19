import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelsController.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.route("/").post(createHotel);
//UPDATE
hotelsRouter.route("/:id").put(updateHotel);
//DELETE
hotelsRouter.route("/:id").delete(deleteHotel);
//GET
hotelsRouter.route("/:id").get(getHotel);
//GET ALL
hotelsRouter.route("/").get(getAllHotels);

export default hotelsRouter;
