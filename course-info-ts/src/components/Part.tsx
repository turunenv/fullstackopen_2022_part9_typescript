import { CoursePart } from "../types";

const assertNever = (value: never): never => {
  throw new Error(`unhandled union member: ${JSON.stringify(value)}`);
}

const requirementsToString = (req: string[]): string => {
  let requirementStr = "";
  req.forEach(r => requirementStr += `${r}, `)
  return requirementStr.slice(0, requirementStr.length - 2);
}

const Part = ({ part }: { part: CoursePart }) => {
  switch(part.type) {
    case "normal":
      return (
        <div>
            <h3>{part.name} {part.exerciseCount}</h3>
            <p>{part.description}</p>
        </div>
      )
    case "groupProject":
      return (
        <div>
            <h3>{part.name} {part.exerciseCount}</h3>
            <p>project exercises {part.groupProjectCount}</p>
        </div>
      )
    case "submission":
      return (
        <div>
            <h3>{part.name}{part.exerciseCount}</h3>
            <p>{part.description}</p>
            <p>submit to {part.exerciseSubmissionLink}</p>
        </div>
      )
    case "special":
      return (
        <div>
            <h3>{part.name} {part.exerciseCount}</h3>
            <p>{part.description}</p>
            <p>required skills: {requirementsToString(part.requirements)}</p>
        </div>
      )
    default:
      return assertNever(part);
  }
} 

export default Part;