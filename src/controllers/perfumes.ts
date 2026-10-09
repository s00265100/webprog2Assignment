import { Request, Response } from "express";
import { PerfumeService } from "../services/perfumes";

const perfumeService = new PerfumeService();

$ref: '#/components/schemas/CreatePerfumeInput'

export class PerfumeController {

  /**
 * @openapi
 * /perfumes:
 *   get:
 *     summary: Retrieve all perfumes
 *     tags:
 *       - Perfumes
 *     responses:
 *       200:
 *         description: Successfully retrieved perfumes
 *       500:
 *         description: Internal server error
 */

  getPerfumes = async (_req: Request, res: Response): Promise<void> => {
    const perfumes = await perfumeService.getAllPerfumes();

    res.status(200).json(perfumes);
  };

  /**
 * @openapi
 * /perfumes/{id}:
 *   get:
 *     summary: Get a perfume by ID
 *     tags:
 *       - Perfumes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Perfume found
 *       404:
 *         description: Perfume not found
 *       500:
 *         description: Internal server error
 */

  getPerfumeById = async (req: Request, res: Response): Promise<void> => {
   const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

         const perfume = await perfumeService.getPerfumeById(id);
    if (!perfume) {
      res.status(404).json({
        message: "Perfume not found"
      });
      return;
    }

    res.status(200).json(perfume);
  };
/**
 * @openapi
 * /perfumes:
 *   post:
 *     summary: Create a new perfume
 *     tags:
 *       - Perfumes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePerfumeInput'
 *     responses:
 *       201:
 *         description: Successfully created perfume
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
  createPerfume = async (req: Request, res: Response): Promise<void> => {
    const perfume = await perfumeService.createPerfume(req.body);

    res.status(201).json(perfume);
  };
/**
 * @openapi
 * /perfumes/{id}:
 *   put:
 *     summary: Update a perfume
 *     tags:
 *       - Perfumes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePerfumeInput'
 *     responses:
 *       200:
 *         description: Perfume updated
 *       400:
 *         description: Bad request
 *       404:
 *         description: Perfume not found
 */
  updatePerfume = async (req: Request, res: Response): Promise<void> => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const perfume = await perfumeService.updatePerfume(
      id,
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

 /**
 * @openapi
 * /perfumes/{id}:
 *   delete:
 *     summary: Delete a perfume
 *     tags:
 *       - Perfumes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Perfume deleted
 *       404:
 *         description: Perfume not found
 */
  deletePerfume = async (req: Request, res: Response): Promise<void> => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const perfume = await perfumeService.deletePerfume(id);

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