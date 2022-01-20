import React, { Component } from "react";
import "./App.css";

import TodoList from "./component/todo-list/todo-list.component";
import AddTask from "./component/add-task/add-task.component";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        description: "Buy Tabac !",
        done: false,
      },
      {
        id: 2,
        description: "Buy more Tabac !",
        done: false,
      },
      {
        id: 3,
        description: "Save the world !",
        done: false,
      },
    ],
  };


  handleAdd = (task) => this.setState({ tasks: [...this.state.tasks, task] });
  
  handleDone = (id) => {  
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    })};

    handleDelete = (id) =>
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1>Here is a list of what you should do</h1>
        </div>
        <TodoList
          todos={this.state.tasks}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
        />
        <AddTask length={this.state.tasks.length} handleAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
