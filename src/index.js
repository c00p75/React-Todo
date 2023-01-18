import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';
//stylesheet
import "./functionBased/App.css"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TodoContainer/>
  </React.StrictMode>
  );
