import React, { Component } from "react";
import PropTypes from "prop-types";

import AddImage from "../../assets/add.png";

class AddTask extends Component {
  state = {
    desc: "",
  };
  render() {
    return (
      <div className="row mt-3">
        <div className="col-md-10">
          <input
            className="form-control"
            type="text"
            onChange={(event) => this.setState({ desc: event.target.value })}
          />
        </div>

        <div className="col-md-2">
          <img
            style={{ width: `30px` }}
            src={AddImage}
            alt="add"
            onClick={() =>
              this.props.handleAdd({
                id: Date.now(),
                description: this.state.desc,
                done: false,
              })
            }
          />
        </div>
      </div>
    );
  }
}

AddTask.propTypes = {
  handleAdd: PropTypes.func,
};

export default AddTask;
