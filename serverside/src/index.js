const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const adminAuth = require("./middleware/adminMiddleware");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/admin", adminAuth, adminRoute);

const PORT = process.env.PORT; // Importing the port number from env file
app.listen(PORT, () => {
  console.log(`Listening to port${PORT}`);
  require("../db"); // This means that we are including this db.js file into index.js
});
