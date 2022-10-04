// new types
export interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
  }

interface CoursePartWithDescription extends CoursePartBase {
  description: string;
}
  
export interface CourseNormalPart extends CoursePartWithDescription {
    type: "normal";
}
  
export interface CourseProjectPart extends CoursePartBase {
    type: "groupProject";
    groupProjectCount: number;
}
  
export interface CourseSubmissionPart extends CoursePartWithDescription {
    type: "submission";
    exerciseSubmissionLink: string;
}

export interface CoursePartSpecial extends CoursePartWithDescription {
    type: "special";
    requirements: string[];
}
  
export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CoursePartSpecial;