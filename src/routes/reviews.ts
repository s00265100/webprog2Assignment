import { Router } from "express";
import { ReviewController } from "../controllers/reviews";
import { validate } from "../middleware/validate.middleware";
import { createReviewZSchema } from "../models/reviews";

const router = Router();
const reviewController = new ReviewController();

router.get("/perfume/:perfumeId", reviewController.getReviewsByPerfumeId);

router.post(
  "/",
  validate(createReviewZSchema),
  reviewController.createReview
);

router.delete("/:id", reviewController.deleteReview);

export default router;