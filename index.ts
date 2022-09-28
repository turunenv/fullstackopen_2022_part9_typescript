import express from "express";
import { calculateBmi } from "./bmiCalculator";

const app = express();

app.get("/hello", (_req, res) => {
  res.status(200).send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  try {
    const { height, weight } = req.query;
  
    //validate the query string parameters
    if (!height || !weight || Number.isNaN(Number(height)) || Number.isNaN(Number(weight))) {
      throw Error;
    } 

    const bmi = calculateBmi(Number(height), Number(weight));
    res.status(200).json({ height, weight,  bmi });
  } catch {
      res.status(400).json({ error: "malformatted parameters" });
  }
});


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
}); 
