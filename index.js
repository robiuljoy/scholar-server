const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

// MIDDLE WEAR
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("simple crud server is running");
});

app.listen(port, () => {
  console.log(`Simple Crud server is running on Port ${port}`);
});
