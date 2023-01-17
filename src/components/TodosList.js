import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render(){
    return(
      <ul>
        {this.props.todos.map(i => (
          <TodoItem key={i.id} todo={i} handleChangeProps={this.props.handleChangeProps} deleteTodoProps={this.props.deleteTodoProps}/>
          )
        )}
      </ul>
    )
  }
} 

export default TodosList;