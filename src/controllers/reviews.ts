import { Request, Response } from "express";
import { ReviewService } from "../services/reviews";

export const reviewService = new ReviewService();

export class ReviewController {
/**
 * @openapi
 * /reviews/perfume/{perfumeId}:
 *   get:
 *     summary: Get reviews for a perfume
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: perfumeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reviews retrieved successfully
 */
  getReviewsByPerfumeId = async (req: Request, res: Response): Promise<void> => {
    const perfumeId = Array.isArray(req.params.perfumeId)
      ? req.params.perfumeId[0]
      : req.params.perfumeId;

    const reviews = await reviewService.getReviewsByPerfumeId(perfumeId);

    res.status(200).json(reviews);
  };
/**
 * @openapi
 * /reviews:
 *   post:
 *     summary: Create a new review
 *     tags:
 *       - Reviews
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateReviewInput'
 *     responses:
 *       201:
 *         description: Review created successfully
 *       400:
 *         description: Bad request
 */
  createReview = async (req: Request, res: Response): Promise<void> => {
    const review = await reviewService.createReview(req.body);

    res.status(201).json(review);
  };
/**
 * @openapi
 * /reviews/{id}:
 *   delete:
 *     summary: Delete a review
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Review deleted successfully
 *       404:
 *         description: Review not found
 */
  deleteReview = async (req: Request, res: Response): Promise<void> => {
    const id = Array.isArray(req.params.id)
      ? req.params.id[0]
      : req.params.id;

    const review = await reviewService.deleteReview(id);

    if (!review) {
      res.status(404).json({
        message: "Review not found"
      });
      return;
    }

    res.status(200).json({
      message: "Review deleted successfully"
    });
  };
}