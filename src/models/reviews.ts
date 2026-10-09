import { Schema, model } from "mongoose";
import { z } from "zod";

export interface IReview {
  perfumeId: string;
  reviewerName: string;
  rating: number;
  comment: string;
}

const reviewSchema = new Schema<IReview>(
  {
    perfumeId: { type: String, required: true },
    reviewerName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true }
  },
  { timestamps: true }
);

export const ReviewModel = model<IReview>("Review", reviewSchema);
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateReviewInput:
 *       type: object
 *       required:
 *         - perfumeId
 *         - reviewerName
 *         - rating
 *         - comment
 *       properties:
 *         perfumeId:
 *           type: string
 *           example: 6ac8cc243334d05f923753af
 *         reviewerName:
 *           type: string
 *           example: Mansura
 *         rating:
 *           type: number
 *           example: 5
 *         comment:
 *           type: string
 *           example: Really nice perfume
 */
export const createReviewZSchema = z.object({
  perfumeId: z.string().min(1),
  reviewerName: z.string().min(1),
  rating: z.number().min(1).max(5),
  comment: z.string().min(1)
});