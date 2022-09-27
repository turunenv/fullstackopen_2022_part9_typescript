import express from "express";
const app = express();

app.get("/hello", (_req, res) => {
  res.status(200).send("Hello Full Stack!");
})

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
}) 