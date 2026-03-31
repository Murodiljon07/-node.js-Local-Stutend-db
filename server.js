import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("./data/students.json", "utf-8", (err, data) => {
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
