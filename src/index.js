import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './components/TodoContainer';
//stylesheet
import "./App.css"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TodoContainer/>
  </React.StrictMode>
  );
