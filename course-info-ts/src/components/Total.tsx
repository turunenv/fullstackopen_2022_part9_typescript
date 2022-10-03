import { ContentProps } from "../types";

const Total = (props: ContentProps) => {
  const total = props.courseParts.reduce((acc, cur) => acc += cur.exerciseCount, 0);

  return <p>{`Number of exercises: ${total}`}</p>
}

export default Total;