const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const app = express();

require("dotenv").config();

// database connections

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to DB"))
  .catch(() => console.log("Error connecting to MONGO"));

// setup middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    createParentPath: true,
  })
);

// routes
app.use("/api/events", require("./routes/events.js"));

// listen to server in a port;
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running...", port);
});
