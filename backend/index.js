import express from "express";
import cors from "cors";
import listRouter from "./routes/list.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT;

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes to use
app.use("/list", listRouter);

// Connection to the database and listen if successful
try {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(
      `Server is connected to the database and listening on port ${PORT}`
    );
  });
} catch (error) {
  console.log(error);
}

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the MERN backend" });
});

export default app;
