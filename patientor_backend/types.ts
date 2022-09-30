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

//type for new patient that does not have id set up yet
export type NewPatient = Omit<Patient, "id">;

//type that excludes the social security number of the patient
export type NonSensitivePatient = Omit<Patient, "ssn">;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}