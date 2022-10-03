import { ContentProps } from "../types";

const Content = (props : ContentProps) => {
  return (
    <div>
      {props.courseParts.map((part, i) => {
        return <p key={i}>{`${part.name} ${part.exerciseCount}`}</p>
      })}
    </div>
  )
}

export default Content;