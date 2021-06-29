const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// routes
const contactFormRoute = require("./routes/contact-form");

dotenv.config();

const app = express();
app.use(cors());

/**
 * database configuration
 */

mongoose
  .connect(process.env.DATABASE_STRING, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database successfully");
  });

/**
 * Middleware
 */
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

/**
 * Route Middleware
 */

app.use("/api/v1/contactForms", contactFormRoute);

app.use("*", (req, res, next) => {
  res.status(400).json({
    status: "error",
    message: `The requested url ${req.originalUrl} doesnot exist`,
  });
});

// listening port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening to port ${PORT}`);
});
