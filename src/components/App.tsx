import React from 'react';


interface appProps { 
  color?: string
}

class App extends React.Component<appProps> { 
state = { counter: 0 }

  onIncrement = (): void => { 
    this.setState({ counter: this.state.counter + 1})

  }
  
  onDecrement = (): void => { 
    this.setState({ counter: this.state.counter - 1})

  }





render() { 
  return (
    <div>
      <button onClick={this.onIncrement}> 
        inc
      </button>
      
      <button onClick={this.onDecrement} > 
        dec
      </button>
    {this.state.counter}
    </div>
      );
    }
    }

export default App; 
