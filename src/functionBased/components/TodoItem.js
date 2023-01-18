import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {    
  const [editing, setEditing] = useState(false)

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const handleEditing = () => {
    setEditing(true)
  };

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing( false )
    }
  };


  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }
  const { completed, id, title } = props.todo;

  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])
  
  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => props.handleChangeProps(id)}
          className={styles.checkbox}
        />
        <button onClick = {() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input 
        type="text" 
        className={styles.textInput} 
        style={editMode} 
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
  </li>)
};

export default TodoItem;