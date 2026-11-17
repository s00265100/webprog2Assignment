import express, { Application } from "express";
import perfumeRoutes from "./routes/perfumes";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';
import reviewRoutes from "./routes/reviews";
import cors from 'cors';

export const app: Application = express();
app.use(cors());
app.use(express.json());

app.use(
  '/api-docs',
  swaggerUi.serve,
  
  swaggerUi.setup(swaggerSpec)
);
app.get("/ping", (_req, res) => {
  res.json({
    message: "hello from Mansura"
  });
});

app.use("/api/v1/perfumes", perfumeRoutes);
app.use("/api/v1/reviews", reviewRoutes);