import { CoursePart } from "../types";

const Total = ({ courseParts }: { courseParts: CoursePart[] }) => {
  const total = courseParts.reduce((acc, cur) => acc += cur.exerciseCount, 0);

  return <p>{`Number of exercises: ${total}`}</p>
}

export default Total;