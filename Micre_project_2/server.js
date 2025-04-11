import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import itemRoutes from "./itemRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", itemRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
