import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 10, // get converted to "pixels"
    fontWeight: "bold",
  }

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        {/* Apply "styles" Property for Styling : */}
        {/* <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span> */}

        {/* Apply "Inline-Styles" for Styling : */}
        <span style={{ fontSize: 80}} className="badge badge-primary m-2">{this.formatCount()}</span> 
        <button className="btn btn-secondary btn-sm ">Increment</button>
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
