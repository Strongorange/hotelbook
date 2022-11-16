import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotelsController.js";
import { verifAdmin } from "../utils/verifyToken.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/", verifAdmin, createHotel);
//UPDATE
hotelsRouter.route("update/:id").all(verifAdmin).put(updateHotel);
//DELETE
hotelsRouter.route("delete/:id").all(verifAdmin).delete(deleteHotel);
//GET
hotelsRouter.route("/find/:id").get(getHotel);
//GET ALL
hotelsRouter.route("/").get(getAllHotels);

hotelsRouter.route("/countByCity").get(countByCity);
hotelsRouter.route("/countByType").get(countByType);

hotelsRouter.get("/room/:id", getHotelRooms);

export default hotelsRouter;
