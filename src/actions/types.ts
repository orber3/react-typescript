
import { deleteTodoAction, fetchTodosAction } from "./todos";

export enum ActionTypes { 
  fecthTodos,
  deleteTodo,
}
export type Action = fetchTodosAction | deleteTodoAction