import patients from "../data/patients";
import { nonSensitivePatient } from "../types";

const getNonSensitivePatients = (): Array<nonSensitivePatient> => {
 return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
 }));
}

export default {
  getNonSensitivePatients,
}
