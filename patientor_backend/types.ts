export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

//type that excludes the social security number of the patient
export type nonSensitivePatient = Omit<Patient, "ssn">;