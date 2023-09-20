import { Dispatch, useState } from "react";
import { FormStateType, FormSetStateType } from "../../types/types";
import TrainingForm from "../trainingForm/TrainingForm";

export default function TrainingCounter() {
  const [formState, setStateForm] = useState({
    date: "",
    dist: 0,
  });

  return (
    <div className="counter">
      <TrainingForm props={{ formState, setStateForm }} />
    </div>
  );
}
