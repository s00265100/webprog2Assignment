import { createReviewZSchema } from "../../src/models/reviews";

const validReview = {
  perfumeId: "6ac8cc243334d05f923753af",
  reviewerName: "Mansura",
  rating: 5,
  comment: "Really nice perfume"
};

describe("Test Review Validation", () => {
  it("should pass for valid review data", () => {
    expect(() =>
      createReviewZSchema.parse(validReview)
    ).not.toThrow();
  });

  it("should fail when reviewer name is missing", () => {
    expect(() =>
      createReviewZSchema.parse({
        ...validReview,
        reviewerName: ""
      })
    ).toThrow();
  });

  it("should fail when rating is above 5", () => {
    expect(() =>
      createReviewZSchema.parse({
        ...validReview,
        rating: 8
      })
    ).toThrow();
  });

  it("should fail when comment is missing", () => {
    expect(() =>
      createReviewZSchema.parse({
        ...validReview,
        comment: ""
      })
    ).toThrow();
  });
});