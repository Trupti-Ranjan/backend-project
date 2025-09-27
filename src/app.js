import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // by using the cookieParcer we can access the cookies from the user browser and set the cookies in the browser so that we can preform some task

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // Here we handel the json formate date get from the frontend

app.use(express.urlencoded({ extended: true, limit: "16kb" })); // here we handel the data get from the frontend through the url

app.use(express.static("public")); // its use for the static file like image, favicon that is stored in the public folder thats why we pass the oublic inside the static

app.use(cookieParser());

export { app };
