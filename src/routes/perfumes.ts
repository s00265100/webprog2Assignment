import { Router } from "express";
import { PerfumeController } from "../controllers/perfumes";
import { validate } from "../middleware/validate.middleware";
import { createPerfumeZSchema } from "../models/perfumes";

const router = Router();
const perfumeController = new PerfumeController();

router.get("/", perfumeController.getPerfumes);

router.get("/:id", perfumeController.getPerfumeById);

router.post(
  "/",
  validate(createPerfumeZSchema),
  perfumeController.createPerfume
);

router.put(
  "/:id",
  validate(createPerfumeZSchema),
  perfumeController.updatePerfume
);

router.delete("/:id", perfumeController.deletePerfume);

export default router;