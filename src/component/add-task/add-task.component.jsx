import React, { Component } from "react";
import PropTypes from "prop-types";

import AddImage from "../../assets/add.png";

class AddTask extends Component {
  state = {
    desc: "",
  };

  handleChange = (event) => {
    this.setState({ desc: event.target.value })
  }

  render() {
    const { length, handleAdd } = this.props;

    const task = {
      id: length + 1,
      description: this.state.desc,
      done: false,
    };
    
    return (
      <div className="row mt-3">
        <div className="col-md-10">
          <input
            className="form-control"
            type="text"
            onChange={(event) => this.handleChange(event)}
          />
        </div>

        <div className="col-md-2">
          <img
            style={{ width: `30px` }}
            src={AddImage}
            alt="add"
            onClick={() => handleAdd(task)}
          />
        </div>
      </div>
    );
  }
}

AddTask.propTypes = {
  length: PropTypes.number,
  handleAdd: PropTypes.func,
};

export default AddTask;
