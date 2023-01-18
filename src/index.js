import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './functionBased/components/TodoContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import Navbar from "./functionBased/components/Navbar"

//stylesheet
import "./functionBased/App.css"

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes> 
        <Route exact path="/" element={<TodoContainer/>}></Route>
        <Route path="/about" element={ <About /> } ></Route>
        <Route path="*" element={ <NotMatch /> }></Route>
      </Routes>
    </Router>
  </React.StrictMode>
  );
