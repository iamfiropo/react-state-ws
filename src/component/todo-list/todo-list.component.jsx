import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../todo/todo.component';

const TodoList = (props) => {
  return (
    <div>
      {
        props.todos.map((task, key) => (
          <Todo 
            task={task}
            key={key}
            handleDelete={props.handleDelete}
            handleDone={props.handleDone}
          />
        ))
      }
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.object,
  handleDelete: PropTypes.func,
  handleDone: PropTypes.func
}

export default TodoList