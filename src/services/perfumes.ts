import { PerfumeModel, IPerfume } from "../models/perfumes";
import { HydratedDocument } from "mongoose";

export class PerfumeService {

  async getAllPerfumes(): Promise<IPerfume[]> {
    return await PerfumeModel.find().lean();
  }

  async getPerfumeById(id: string): Promise<IPerfume | null> {
    return await PerfumeModel.findById(id).lean();
  }

  async createPerfume(
    perfumeData: IPerfume
  ): Promise<HydratedDocument<IPerfume>> {
    const perfume = new PerfumeModel(perfumeData);
    return await perfume.save();
  }

  async updatePerfume(
    id: string,
    perfumeData: Partial<IPerfume>
  ): Promise<IPerfume | null> {
    return await PerfumeModel.findByIdAndUpdate(
      id,
      perfumeData,
      { returnDocument: "after" }
    ).lean();
  }

  async deletePerfume(id: string): Promise<IPerfume | null> {
    return await PerfumeModel.findByIdAndDelete(id).lean();
  }
}