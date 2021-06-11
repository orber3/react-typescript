import axios from 'axios'
import {Dispatch} from 'redux'
import { ActionTypes } from './types'
const url = 'https://jsonplaceholder.typicode.com/todos'

interface Todo{
  id:number;
  title:string;
  completed:boolean,


}




export const fecthTodos = () => { 

  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)

      dispatch({
        type: ActionTypes.fecthTodos,
        payload: response.data
      })
  }


}