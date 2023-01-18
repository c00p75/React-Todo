import React from "react"
import TodoItem from "./TodoItem"

const TodosList = props => {
  return (
    <ul>
      {props.todos.map(i => (
        <TodoItem
          key={i.id}
          todo={i}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  )
}
export default TodosList