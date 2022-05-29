const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const cors = require("cors");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const helmet = require("helmet");
// const csp = require("helmet-csp");
const path = require("path");

// config path
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const phoneRoutes = require("./routes/phone-routes");
const userRoutes = require("./routes/user-routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

app.use("/api/phones", phoneRoutes);
app.use("/api/user", userRoutes);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", " true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   "https://gadgetinfo-mern-stack.herokuapp.com",
  //   "http://127.0.0.1:800",
  //   " https://res.cloudinary.com/"
  // );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["*", "gap:"],
      connectSrc: [
        "http://127.0.0.1:8000/",
        "https://gadgetinfo-mern-stack.herokuapp.com",
      ],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: [
        "'self'",
        "https://fonts.googleapis.com",
        "https://use.fontawesome.com",
        "https://fonts.gstatic.com",
        "'unsafe-inline'",
      ],
      fontSrc: [
        "'self'",
        "https://fonts.google.com/",
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://use.fontawesome.com",
      ],
      imgSrc: ["*", "data:", "blob:", "https://res.cloudinary.com"],
      // imgSrc: ["'self'", "data:", "https://res.cloudinary.com", "http://www.w3.org/2000/svg"],
      // baseUri: ["'self'"],
    },
  })
);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleware);

var port = process.env.PORT || 8000;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("connected to database");
    });
  })
  .catch((e) => {
    console.log(e);
  });
