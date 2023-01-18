import React, { useState, useEffect  } from "react";
import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const getInitialTodos = () => {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }
  const [todos, setTodos] = useState(getInitialTodos())

  const handleChange = (id) => {
    setTodos(prevState => 
      prevState.map(i => {
        if(i.id === id){
          return {
            ...i,
            completed: !i.completed,
          }
        }
        return i;
    }))
  }

  const delTodo = id => {
    setTodos([
        ...todos.filter(i => {
          return i.id !== id;
        }),
      ]);
    };

  const addTodoItem = task => {
    const newTodo = {
      id: uuidv4(),
      title: task,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(i => {
        if (i.id === id) {
          i.title = updatedTitle
        }
        return i
      }),
    )
  }

  useEffect(() => {
    console.log('Storing')
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos])

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  )
}

export default TodoContainer;