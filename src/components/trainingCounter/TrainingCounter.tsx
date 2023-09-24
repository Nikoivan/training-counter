import { useState, ChangeEvent } from "react";
import moment from "moment";
import { FormStateType } from "../../types/types";
import checkDublicate from "../../functions/checkdublicate";
import TrainingForm from "../trainingForm/TrainingForm";
import TrainingList from "../trainingList/TrainingList";

export default function TrainingCounter() {
  const [trainingList, setList] = useState<FormStateType[]>([]);
  const [formState, setFormState] = useState({
    date: "",
    dist: 0,
  });

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    if (!/^[0-9.]+$/.test(value) && value !== "") {
      return;
    }
    setFormState((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const createItem = (arg: FormStateType) => {
    setList((prevList) => [...checkDublicate(prevList, arg)]);
    setFormState({
      date: "",
      dist: 0,
    });
  };

  const deleteItem = (arg: string) => {
    setList((prevList) => [...prevList.filter((el) => el.date !== arg)]);
  };

  const editItem = (arg: string) => {
    const item = trainingList.find((el) => el.date === arg);
    if (item) {
      setFormState(item);
    }
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
          formUseState: { formState, changeHandler },
        }}
      />
      <TrainingList props={{ list, callbacks: { editItem, deleteItem } }} />
    </div>
  );
}
