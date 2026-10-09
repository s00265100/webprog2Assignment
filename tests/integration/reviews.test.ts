import request from "supertest";
import { app } from "../../src/app";

describe("Review API", () => {
  let reviewId: string;

  it("should create a review", async () => {
    const response = await request(app)
      .post("/api/v1/reviews")
      .send({
        perfumeId: "6ac8cc243334d05f923753af",
        reviewerName: "Mansura",
        rating: 5,
        comment: "Really nice perfume"
      });

    expect(response.status).toBe(201);
    expect(response.body.reviewerName).toBe("Mansura");

    reviewId = response.body._id;
  });

  it("should delete the review", async () => {
    const response = await request(app)
      .delete(`/api/v1/reviews/${reviewId}`);

    expect(response.status).toBe(200);
  });
});