import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/itinerary", itineraryRoutes);
app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.send("AI Travel Guide Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
