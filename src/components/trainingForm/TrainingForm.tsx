import { FormEvent, ChangeEvent, useState, Dispatch } from "react";
import {
  FormStateType,
  FormSetStateType,
  FormUseStateType,
} from "../../types/types";

export default function TrainingForm({
  props,
}: {
  props: {
    formState: FormStateType;
    setStateForm: (arg: FormStateType) => FormStateType;
  };
}) {
  const { formState, setStateForm } = props;
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const changeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setStateForm((prevForm: FormStateType) => ({ ...prevForm, [name]: value }));
    console.log(formState);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__date-wrap">
        <label htmlFor="input-date" className="form__label"></label>
        <input
          onChange={changeHandler}
          className="form__input-date"
          id="input-date"
          name="date"
          value={formState.date}
        />
      </div>
      <div className="form__dist-wrap">
        <label htmlFor="input-dist" className="form__label"></label>
        <input
          onChange={changeHandler}
          type="text"
          className="form__input-dist"
          id="input-dist"
          name="dist"
          value={formState.dist === 0 ? "" : formState.dist}
        />
      </div>
      <div className="form__btn-wrap">
        <button>OK</button>
      </div>
    </form>
  );
}
