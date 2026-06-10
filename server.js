const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const productRoutes =require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(contactRoutes);
app.use(productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});