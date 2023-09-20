export type FormStateType = {
  date: string;
  dist: number;
};

export type FormSetStateType = (args: FormStateType) => FormStateType;

export type FormUseStateType = [
  formState: FormStateType,
  setStateForm: FormSetStateType
];

export type TrainingFormProps = {
  props: { formState: FormStateType; setStateForm: FormSetStateType };
};
