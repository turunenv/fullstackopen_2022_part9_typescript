import express from "express";
import { calculateBmi } from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";

const app = express();

app.use(express.json());

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

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { daily_exercises, target } = req.body;
  
  //check it the request body had the correct attributes
  if (!daily_exercises || !target) {
    return res.status(400).json({ error: "missing parameters" });
  }

  //function for checking whether a value is a number or convertible to a number
  function isNumber (value: undefined) {
    return !isNaN(Number(value));
  }
  //check that the given parameters where of the correct type
  const validExercises = Array.isArray(daily_exercises) && daily_exercises.every(val => isNumber(val));
  if (!isNumber(target) || !validExercises) {
    return res.status(400).json({ error: "malformatted parameters" });
  }
  
  const exerciseResult = calculateExercises(daily_exercises, target);

  return res.status(200).json(exerciseResult);
});


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
}); 
