// // IMPORTS
const express = require("express");
const cors = require("cors");
const userAuthRoutes = require("./routes/userAuth.js");

// CONSTANTS
const PORT = process.env.PORT || 8000;

// MIDDLEWARES
const app = express();
app.use(express.json()); // to parse incoming requests with JSON payloads
app.use(cors()); // for cross-origin resource sharing

// ROUTES
app.use("/auth", userAuthRoutes);

// SERVER PORT
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
