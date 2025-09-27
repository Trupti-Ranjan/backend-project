// require("dotenv").config({ path: "/.env" }); // this is one way of import dotenv
import dotenv from "dotenv";
import connectDb from "./db/connection.js";
import app from "./app.js"

dotenv.config({
  path: "/.env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error);
  });

app.on("error", (error) => {
  console.error("App error:", error);
  throw error;
});

// ----------------------------------------------------------
// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     console.log("✅ Database connected");

//     app.on("error", (error) => {
//       console.error("App error:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`🚀 App is listening on port ${process.env.PORT || 3000}`);
//     });
//   } catch (error) {
//     console.error("❌ Error while starting the app:", error);
//     throw error;
//   }
// })();
