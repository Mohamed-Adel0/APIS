const express = require("express");
const app = new express();
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const ProcutsRoutes = require("./Routes/ProductsRoutes.js");
const path = require("path");

dotenv.config();
app.listen(process.env.PORT, () => {
  console.log("Server Is Running");
});

mongoose.connect(process.env.LocalHost).then(() => {
  console.log("DB Connected");
});

app.use(express.static(path.join(__dirname, "image")));
app.use(cors());
app.use(express.json());
app.use(ProcutsRoutes);
