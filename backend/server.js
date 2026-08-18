import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "TradeBot API is running"
  });
});

app.listen(PORT, () => {
  console.log(`TradeBot server running on port ${PORT}`);
});
