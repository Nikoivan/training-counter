import "./trainingform.css";
import { FormEvent, ChangeEvent, useState } from "react";
import { FormStateType, ClickHandlerType } from "../../types/types";

export default function TrainingForm({ callback }: ClickHandlerType) {
  const [formState, setStateForm] = useState<FormStateType>({
    date: "",
    dist: "",
  });

  const clickHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      formState.date === "" ||
      formState.dist === "" ||
      !/^[0-9]{2}.[0-9]{2}.[0-9]{4}$/.test(formState.date)
    ) {
      return;
    }
    callback({ date: formState.date, dist: +formState.dist });
    setStateForm(() => ({
      date: "",
      dist: "",
    }));
  };

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    if (!/^[0-9.]+$/.test(value) && value !== "") {
      return;
    }
    setStateForm((prevForm: FormStateType) => ({ ...prevForm, [name]: value }));
  };

  return (
    <form className="form">
      <div className="form__date-wrap">
        <label htmlFor="input-date" className="form__label">
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          onChange={changeHandler}
          className="form__input"
          id="input-date"
          name="date"
          value={formState.date}
        />
      </div>
      <div className="form__dist-wrap">
        <label htmlFor="input-dist" className="form__label">
          Пройдено км
        </label>
        <input
          onChange={changeHandler}
          type="text"
          className="form__input"
          id="input-dist"
          name="dist"
          value={formState.dist}
        />
      </div>
      <div className="form__btn-wrap">
        <button className="btn" onClick={clickHandler}>
          OK
        </button>
      </div>
    </form>
  );
}
