import { FormStateType } from "../types/types";

export default function checkDublicate(
  prevList: FormStateType[],
  arg: FormStateType
) {
  const copy = prevList.find((el) => el.date === arg.date);
  if (copy) {
    const newItem = { date: arg.date, dist: arg.dist + copy.dist };
    const newList = prevList.filter((el) => el.date !== arg.date);
    newList.push(newItem);
    return newList;
  }
  return [...prevList, arg];
}
