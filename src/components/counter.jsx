import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    // ****** Without De-structuring :
    // return this.state.count === 0 ? 'Zero' : this.state.count;

    // ****** With De-structuring :
    // const { count } = this.state;
    // return count === 0 ? 'Zero' : count;

    // ****** Return JSX-expression from Here :
    // JSX Expressions are just like normal JavaScript-objects
	  // 1. You can return them from a "function",
	  // 2. you can pass them to a "function",
	  // 3. you can also use them as a "value of a constant" or a "variable"
    const { count } = this.state;
    const x = <h1>Zero</h1>; // <--- here we can Define a constant and set it to JSX-expression.
    return count === 0 ? <h1>Zero</h1> : count; 
  }
}

export default Counter;
