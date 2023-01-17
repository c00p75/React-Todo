import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    task: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Input field blank")
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." value={this.state.task} name="task" onChange={this.onChange} />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo