import request from "supertest";
import { app } from "../../src/app";

describe("Perfume API", () => {
  let perfumeId: string;

  it("should create a perfume", async () => {
    const response = await request(app)
      .post("/api/v1/perfumes")
      .send({
        name: "Libre Test",
        brand: "YSL",
        scentType: "Floral",
        price: 100,
        description: "Test perfume",
        gender: "Women",
        rating: 4.5
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Libre Test");

    perfumeId = response.body._id;
  });

  it("should get the created perfume", async () => {
    const response = await request(app)
      .get(`/api/v1/perfumes/${perfumeId}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Libre Test");
  });

  it("should delete the perfume", async () => {
    const response = await request(app)
      .delete(`/api/v1/perfumes/${perfumeId}`);

    expect(response.status).toBe(200);
  });

  it("should not find the deleted perfume", async () => {
    const response = await request(app)
      .get(`/api/v1/perfumes/${perfumeId}`);

    expect(response.status).toBe(404);
  });
});