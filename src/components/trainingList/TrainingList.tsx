import "./traininglist.css";
import { FormStateType } from "../../types/types";
import TrainingItem from "../trainingItem/TrainingItem";

export default function TrainingList({
  props,
}: {
  props: {
    list: FormStateType[] | [];
    callbacks: {
      editItem: (arg: string) => void;
      deleteItem: (arg: string) => void;
    };
  };
}) {
  return (
    <>
      <div className="traininglist__header">
        <span className="header__date">Дата (ДД.ММ.ГГ)</span>
        <span className="header__dist">Пройдено км</span>
        <span className="header__actions">Действия</span>
      </div>
      <ul className="traininglist__list">
        {props.list.map((el, id) => (
          <TrainingItem
            key={id}
            props={{ item: el, callbacks: props.callbacks }}
          />
        ))}
      </ul>
    </>
  );
}
