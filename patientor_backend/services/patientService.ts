import patients from "../data/patients";
import { NonSensitivePatient, NewPatient, Patient } from "../types";
import { v1 as uuid } from "uuid";

const getNonSensitivePatients = (): Array<NonSensitivePatient> => {
 return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
 }));
}

const addPatient = (patientInfo: NewPatient): Patient => {
  const id = uuid();
  const newPatient = {
    id,
    ...patientInfo,
  };
  patients.push(newPatient);

  return newPatient;
}



export default {
  getNonSensitivePatients,
  addPatient,
}
