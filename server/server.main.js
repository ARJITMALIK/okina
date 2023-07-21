import express from "express";
import cors from "cors";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORt || 5000;

app.listen(PORT, (req, res) => {
  console.log(`Server successfully started at port ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("Endpoint hitted");
  res.status(200).json({
    msg: "aight",
  });
});
