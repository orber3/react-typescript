import { ActionTypes, Action, Todo,  } from "../actions"




export const todosReducer = 
(state: Todo[] = [] ,
action: Action ) => { 


  switch(action.type) { 

    case ActionTypes.fecthTodos:
      return action.payload
  
    case ActionTypes.deleteTodo:
    return state.filter((todo: Todo) => todo.id !== action.payload)

      default: 
      return state
  
  }

  }


