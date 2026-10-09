import { ReviewModel, IReview } from "../models/reviews";
import { HydratedDocument } from "mongoose";

export class ReviewService {

  async getReviewsByPerfumeId(perfumeId: string): Promise<IReview[]> {
    return await ReviewModel.find({ perfumeId }).lean();
  }

  async createReview(reviewData: IReview): Promise<HydratedDocument<IReview>> {
    const review = new ReviewModel(reviewData);
    return await review.save();
  }

  async deleteReview(id: string): Promise<IReview | null> {
    return await ReviewModel.findByIdAndDelete(id).lean();
  }
}