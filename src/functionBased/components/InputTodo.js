import React, { useState } from "react"

const InputTodo = props => {
  const [task, setTask] = useState("")

  const onChange = e => { setTask(e.target.value) };

  const handleSubmit = e => {
    e.preventDefault();
    if (task.trim()) {
      props.addTodoProps(task)
      setTask("")
    } else {
      alert("Input field blank")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text" placeholder="Add Todo..." 
        value={task} 
        name="task" 
        onChange={onChange}
        className="input-text"
        />
      <button className="input-submit">Submit</button>
    </form>
  )
}
export default InputTodo