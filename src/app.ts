import express, { Application } from "express";
import perfumeRoutes from "./routes/perfumes";

export const app: Application = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  res.json({
    message: "hello from Mansura"
  });
});

app.use("/api/v1/perfumes", perfumeRoutes);