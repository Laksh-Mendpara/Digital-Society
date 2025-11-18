import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the dist/public directory
app.use(express.static(path.join(__dirname, "../dist/public")));

// API routes (add your routes here)
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Serve index.html for all other routes (SPA fallback)
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/index.html"));
});

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export default app;
