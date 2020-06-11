const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));