import { Schema, model } from "mongoose";
import { z } from "zod";

export interface IPerfume {
  name: string;
  brand: string;
  scentType: string;
  price: number;
  description: string;
  gender: "Men" | "Women" | "Unisex";
  rating: number;
}

const perfumeSchema = new Schema<IPerfume>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    scentType: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    gender: {
      type: String,
      required: true,
      enum: ["Men", "Women", "Unisex"]
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    }
  },
  { timestamps: true }
);

export const PerfumeModel = model<IPerfume>("Perfume", perfumeSchema);
/**
 * @openapi
 * components:
 *   schemas:
 *     CreatePerfumeInput:
 *       type: object
 *       required:
 *         - name
 *         - brand
 *         - scentType
 *         - price
 *         - description
 *         - gender
 *         - rating
 *       properties:
 *         name:
 *           type: string
 *           example: Libre
 *         brand:
 *           type: string
 *           example: YSL
 *         scentType:
 *           type: string
 *           example: Floral
 *         price:
 *           type: number
 *           example: 110
 *         description:
 *           type: string
 *           example: Floral and warm fragrance
 *         gender:
 *           type: string
 *           example: Women
 *         rating:
 *           type: number
 *           example: 4.5
 */
export const createPerfumeZSchema = z.object({
  name: z.string().min(1),
  brand: z.string().min(1),
  scentType: z.string().min(1),
  price: z.number().min(0),
  description: z.string().min(1),
  gender: z.enum(["Men", "Women", "Unisex"]),
  rating: z.number().min(1).max(5)
});