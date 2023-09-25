const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());
const dbConfig = require("./config/dbConfig");
const usersRoute = require("./routes/usersRoute");

app.use("/api/users", usersRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
