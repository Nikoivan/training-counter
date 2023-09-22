import { FormStateType } from "../types/types";

export default function checkDublicate(
  prevList: FormStateType[],
  arg: FormStateType
) {
  const copy = prevList.find((el) => el.date === arg.date);
  if (copy) {
    console.log(copy);
    copy.dist = copy.dist + arg.dist;
    return prevList;
  } else {
    return [...prevList, arg];
  }
}
