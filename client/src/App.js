import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from "./pages/Create"
import Home from "./pages/Home"
import Edit from "./pages/Edit"
import EmployeeSearch from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <Link to="/create">Add Employee</Link>
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        
  
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/create" element={<EmployeeForm/>}></Route>
          <Route path="/edit/:id" element={<Edit/>}></Route>
          <Route path="/search" element={<EmployeeSearch/>}></Route>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; 