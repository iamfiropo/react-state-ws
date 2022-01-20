import React, { Component } from "react";

class Test extends Component {
  state = {
    value: 78
  };

  componentDidMount() {
    this.handleClick();
  }

  handleClick = () => {
    this.setState({ value: this.state.value + 22 });
  };
  render() {
    return (
      <div>
      {this.state.value}
      </div>
    );
  }
}

export default Test;
