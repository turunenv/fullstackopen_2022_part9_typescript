import express from "express";
import patientService from "../services/patientService";
import  toNewPatient from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

router.get("/:id", (req, res) => {
  const patient = patientService.getPatientById(req.params.id);
  if (!patient) {
    res.sendStatus(404);
  } else {
    res.json(patient);
  }
})

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
      let errorMessage = "Something went wront.";
      if (error instanceof Error) {
        errorMessage += " Error: " + error.message;
      }

      res.status(400).send(errorMessage);
  }
  

})

export default router;