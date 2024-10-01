import "./index.css";
// import Employee from "./components/employee";
// import { useState } from "react";
// import AddEmployee from "./components/AddEmployee";
// import { v4 as uuidv4 } from "uuid";
// import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Customers" element={<Customers />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
