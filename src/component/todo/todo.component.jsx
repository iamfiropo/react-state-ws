import React from "react";
import PropTypes from "prop-types";

import DeleteImage from "../../assets/delete.png";
import DoneImage from "../../assets/done.png";

import "./todo.style.css";

const Todo = ({ task, handleDone, handleDelete }) => {
  return (
    <div className="row">
      <div className="col-md-8">
        <span className={task.done ? "done" : "un-done"}>{task.description}</span>
      </div>
      <div className="col-md-1 justify-content-center">
        <img
          style={{ width: `25px` }}
          src={DoneImage}
          alt="done"
          onClick={() => handleDone(task.id)}
        />
      </div>
      <div className="col-md-1 justify-content-center">
        <img
          style={{ width: `25px` }}
          src={DeleteImage}
          alt="edit"
          onClick={() => handleDelete(task.id)}
        />
      </div>
    </div>
  );
};

Todo.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number,
  done: PropTypes.bool,
};

export default Todo;
