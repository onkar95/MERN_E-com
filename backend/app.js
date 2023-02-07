const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require('cors');

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/.env" });
}

const corsOptions = {
  origin: 'https://main--scintillating-brigadeiros-f08220.netlify.app',
  // origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));



app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://main--scintillating-brigadeiros-f08220.netlify.app");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
