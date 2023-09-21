import { Dispatch, useState } from "react";
import moment from "moment";
import { FormStateType, ListStateType } from "../../types/types";
import TrainingForm from "../trainingForm/TrainingForm";
import TrainingList from "../trainingList/TrainingList";

export default function TrainingCounter() {
  const [trainingList, setList] = useState<FormStateType[]>([]);

  const createTask = (arg: FormStateType) => {
    setList((prevList) => [...prevList, arg]);
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
      <TrainingForm callback={createTask} />
      <TrainingList props={list} />
    </div>
  );
}

/*
const task = {
      date: arg.date,
      dist: arg.dist,
      timestamp: new Date(
        moment(`${arg.date}`, "DD.MM.YYYY").format("YYYY.MM.DD")
      ).getTime(),
    };*/
