import React from 'react';
import {connect} from 'react-redux'
import {Todo , fecthTodos , deleteTodoActionf} from '../actions/'
import {storeState} from '../reducers/index'


interface AppProps{
  todos: Todo[],
  fetchtodos: Function;
  deleteTodo: typeof deleteTodoActionf,
}
interface AppState { 
  fetching: boolean
}


class _App extends React.Component<AppProps, AppState> { 
    constructor(props: AppProps){
      super(props)
    this.state = {fetching: false}

}
componentDidUpdate(prevProps: AppProps): void { 
  if(!prevProps.todos.length && this.props.todos.length ) { 
    this.setState({fetching: false})
  }
}


onButtonClick = (): void =>  {
this.props.fetchtodos()
this.setState({fetching: true})
}
onTodoClick = (id: number): void => {
  this.props.deleteTodo(id);
};
renderList(): JSX.Element[] { 

  return this.props.todos.map((todo: Todo) => { 
      return ( <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
      {todo.title}
    </div>)
  })


}

render() { 
  return (
    <div>
      <button onClick ={ this.onButtonClick}> 
        Fetch
      </button>
      {this.state.fetching ? "loading" : null}

      {this.renderList()}
    </div>
      );
    }
    }


    const mapStateToProps= ({todos}: storeState): {todos: Todo[]} => { 
      return {todos}
      }
      
      export const App = connect(mapStateToProps , {fecthTodos, deleteTodoActionf})(_App)