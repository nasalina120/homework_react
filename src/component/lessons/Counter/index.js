import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  addCounter = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("first", this.state.count);
  };

  DecCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.DecCounter}>-</button>
      </>
    );
  }
}

export default Counter;
