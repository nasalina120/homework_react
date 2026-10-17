import React, { Component } from "react";

export default class MouseTracker extends Component {
  state = {
    x: 0,
    y: 0,
  };

  mousemove = (event) => {
    this.setState({ x: event.clientX, y: event.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.mousemove);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mousemove);
  }

  render() {
    return this.props.render(this.state);
  }
}
