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
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/Employees" element={<Employees />} />
          <Route path="/Dictionary" element={<Dictionary />} />
          <Route path="/Definition/:search" element={<Definition />} />
          <Route path="/Customers" element={<Customers />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
