import React from "react";
import PropTypes from "prop-types";

import "./todo.style.css";
import DeleteImage from "../../assets/delete.png";
import DoneImage from "../../assets/done.png";

const Todo = (props) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <span className={props.task.done ? "done" : "un-done"}>{props.task.description}</span>
      </div>
      <div className="col-md-1 justify-content-center">
        <img
          style={{ width: `25px` }}
          src={DoneImage}
          alt="done"
          onClick={() => props.handleDone(props.task.id)}
        />
      </div>
      <div className="col-md-1 justify-content-center">
        <img
          style={{ width: `25px` }}
          src={DeleteImage}
          alt="edit"
          onClick={() => props.handleDelete(props.task.id)}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  done: PropTypes.bool,
};

export default Todo;
