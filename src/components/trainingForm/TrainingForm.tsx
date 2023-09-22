import "./trainingform.css";
import { FormEvent, ChangeEvent, useState, Dispatch } from "react";
import { FormStateType } from "../../types/types";

export default function TrainingForm({
  props,
}: {
  props: {
    callback: (arg: FormStateType) => void;
    formUseState: {
      formState: FormStateType;
       function setStateForm(params:FormStateType) { };
  };
}) {
  const { formState, setStateForm } = props.formUseState;

  const clickHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      formState.date === "" ||
      formState.dist === 0 ||
      !/^[0-9]{2}.[0-9]{2}.[0-9]{4}$/.test(formState.date)
    ) {
      return;
    }
    props.callback({ date: formState.date, dist: +formState.dist });

    const empty = {
      date: "",
      dist: 0,
    };
    setStateForm(empty);
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
          value={!formState.dist || formState.dist === 0 ? "" : formState.dist}
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
