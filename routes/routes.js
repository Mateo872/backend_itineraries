import { Router } from "express";
import {
  getItineraries,
  getItinerary,
  createItinerary,
  deleteItinerary,
  updateItinerary,
} from "../controllers/itineraries.controllers";

const router = Router();

router.route("/itineraries").get(getItineraries).post(createItinerary);
router
  .route("/itineraries/:id")
  .put(updateItinerary)
  .delete(deleteItinerary)
  .get(getItinerary);

export default router;
