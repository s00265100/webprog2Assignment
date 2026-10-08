import { Request, Response } from "express";
import { PerfumeService } from "../services/perfumes";

const perfumeService = new PerfumeService();

export class PerfumeController {

  getPerfumes = async (_req: Request, res: Response): Promise<void> => {
    const perfumes = await perfumeService.getAllPerfumes();

    res.status(200).json(perfumes);
  };

  getPerfumeById = async (req: Request, res: Response): Promise<void> => {
    const perfume = await perfumeService.getPerfumeById(req.params.id);

    if (!perfume) {
      res.status(404).json({
        message: "Perfume not found"
      });
      return;
    }

    res.status(200).json(perfume);
  };

  createPerfume = async (req: Request, res: Response): Promise<void> => {
    const perfume = await perfumeService.createPerfume(req.body);

    res.status(201).json(perfume);
  };

  updatePerfume = async (req: Request, res: Response): Promise<void> => {
    const perfume = await perfumeService.updatePerfume(
      req.params.id,
      req.body
    );

    if (!perfume) {
      res.status(404).json({
        message: "Perfume not found"
      });
      return;
    }

    res.status(200).json(perfume);
  };

  deletePerfume = async (req: Request, res: Response): Promise<void> => {
    const perfume = await perfumeService.deletePerfume(req.params.id);

    if (!perfume) {
      res.status(404).json({
        message: "Perfume not found"
      });
      return;
    }

    res.status(200).json({
      message: "Perfume deleted successfully"
    });
  };
}