import { todoState } from "../atoms/TodoState";
import { selector } from "recoil";

export const getTotaltodoCount = selector({
    key: 'getTotaltodoCount', 
    get: ({get}) => {
      const todos = get(todoState);
  
      return todos.length;
    },
  });