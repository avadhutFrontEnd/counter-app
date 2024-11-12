import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };

  render() {
// ********** Approach 1 : Ternary operator
    // let classes = "badge m-2 badge-"; 
	  // classes += this.state.count === 0 ? "warning" : "primary";
	  
    return (
      <div>
        {/* <span className={classes}>{this.formatCount()}</span>  */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span> 
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    );
  }

// ********** Approach 2 : Wrap "Ternary operator" Logic in `Method` of Class-component.
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count; 
  }
}

export default Counter;
