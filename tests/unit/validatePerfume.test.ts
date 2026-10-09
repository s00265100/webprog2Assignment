import { createPerfumeZSchema } from "../../src/models/perfumes";

const validPerfume = {
  name: "Libre",
  brand: "YSL",
  scentType: "Floral",
  price: 110,
  description: "Floral and warm fragrance",
  gender: "Women",
  rating: 4.5
};

describe("Test Perfume Validation", () => {
  it("should pass for valid perfume data", () => {
    expect(() =>
      createPerfumeZSchema.parse(validPerfume)
    ).not.toThrow();
  });

  it("should fail when name is missing", () => {
    expect(() =>
      createPerfumeZSchema.parse({
        ...validPerfume,
        name: undefined
      })
    ).toThrow();
  });

  it("should fail when brand is missing", () => {
    expect(() =>
      createPerfumeZSchema.parse({
        ...validPerfume,
        brand: undefined
      })
    ).toThrow();
  });

  it("should fail when price is negative", () => {
    expect(() =>
      createPerfumeZSchema.parse({
        ...validPerfume,
        price: -10
      })
    ).toThrow();
  });

  it("should fail when rating is above 5", () => {
    expect(() =>
      createPerfumeZSchema.parse({
        ...validPerfume,
        rating: 8
      })
    ).toThrow();
  });
});