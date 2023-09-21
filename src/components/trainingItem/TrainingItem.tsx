import "./trainingitem.css";
import { FormStateType } from "../../types/types";

export default function TrainingItem({ props }: { props: FormStateType }) {
  return (
    <li className="list__item">
      <div className="item__date">{props.date}</div>
      <div className="item__dist">{props.dist}</div>
      <div className="item__actions">
        <span className="actions__edit">&#9998;</span>
        <span className="actions__delete"> &#10006;</span>
      </div>
    </li>
  );
}
