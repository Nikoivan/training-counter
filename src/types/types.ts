export type FormStateType = {
  date: string;
  dist: number;
};

export type InputType = {
  date?: string;
  dist?: number;
};

export type ListStateType = {
  date: string;
  dist: number;
  timestamp: number;
};

export type ClickHandlerType = { callback: (arg: FormStateType) => void };
