import "./trainingitem.css";
import { FormStateType } from "../../types/types";

export default function TrainingItem({
  props,
}: {
  props: {
    item: FormStateType;
    callbacks: {
      editItem: (arg: string) => void;
      deleteItem: (arg: string) => void;
    };
  };
}) {
  return (
    <li className="list__item">
      <div className="item__date">{props.item.date}</div>
      <div className="item__dist">{props.item.dist}</div>
      <div className="item__actions">
        <span
          className="actions__edit"
          onClick={() => props.callbacks.editItem(props.item.date)}
        >
          &#9998;
        </span>
        <span
          className="actions__delete"
          onClick={() => props.callbacks.deleteItem(props.item.date)}
        >
          &#10006;
        </span>
      </div>
    </li>
  );
}
