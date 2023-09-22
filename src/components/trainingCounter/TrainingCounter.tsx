import { Dispatch, useState, useRef } from "react";
import moment from "moment";
import { FormStateType, ListStateType } from "../../types/types";
import checkDublicate from "../../functions/checkdublicate";
import TrainingForm from "../trainingForm/TrainingForm";
import TrainingList from "../trainingList/TrainingList";

export default function TrainingCounter() {
  const [trainingList, setList] = useState<FormStateType[]>([]);
  const [formState, setStateForm] = useState<FormStateType>({
    date: "",
    dist: 0,
  });

  const createItem = (arg: FormStateType) => {
    setList((prevList) => [...checkDublicate(prevList, arg)]);
  };

  const deleteItem = (arg: string) => {
    setList((prevList) => [...prevList.filter((el) => el.date !== arg)]);
  };

  const editItem = (arg: string) => {
    setList((prevList) => [...prevList.filter((el) => el.date !== arg)]);
  };

  let list = trainingList.map((el) => {
    const task = {
      date: el.date,
      dist: el.dist,
      timestamp: new Date(
        moment(`${el.date}`, "DD.MM.YYYY").format("YYYY.MM.DD")
      ).getTime(),
    };
    return task;
  });

  list = list.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="counter">
      <TrainingForm
        props={{
          callback: createItem,
          formUseState: {
            formState,
            setStateForm,
          },
        }}
      />
      <TrainingList props={{ list, callbacks: { editItem, deleteItem } }} />
    </div>
  );
}
