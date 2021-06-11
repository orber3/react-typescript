import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

export interface storeState{
todos: Todo[]

}

export const reducers  = combineReducers<storeState>({

todos: todosReducer

})