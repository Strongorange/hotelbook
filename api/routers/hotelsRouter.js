import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotel,
} from "../controllers/hotelsController.js";
import { verifAdmin } from "../utils/verifyToken.js";

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.route("/").all(verifAdmin).post(createHotel).get(getAllHotels);
//UPDATE
hotelsRouter.route("update/:id").all(verifAdmin).put(updateHotel);
//DELETE
hotelsRouter.route("delete/:id").all(verifAdmin).delete(deleteHotel);
//GET
hotelsRouter.route("/find/:id").get(getHotel);
//GET ALL

hotelsRouter.route("/countByCity").get(countByCity);
hotelsRouter.route("/countByType").get(countByType);

export default hotelsRouter;
