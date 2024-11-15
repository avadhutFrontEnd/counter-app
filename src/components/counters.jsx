import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Handling the Delete "Event" :
  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            // instead of passing "value" and "id" as separate "props". we will simply pass the "counter" object itself, this object  includes everything we need to know about the counter, and also, in the  future we add a new property to this "counter" object, we don't have  to come back here and modify this code. Our "counter" object is  carrying all the data about a counter. 
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
