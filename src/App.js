import './index.css';
import Employee from './components/employee';
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState('Dev')
  const [employees, setEmployees] = useState([
  {            
    name: "Junaid",
    role: "Software" ,
    img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww",
    id: 1
  },
  {
    name:"Steph",
    role:"Sales" ,
    img:"https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww" ,
    id: 2
  },
  {
    name:"Johnson",
    role:"Business",
    img:"https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 3
  },
  {
    name: "Gale",
    role:"Project", 
    img:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 4
  },
  {
    name:"Monica",
    role:"Biz  Manager",
    img:"https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 5
  },
  {
    name:"John" ,
    role:"Scrum" ,
    img:"https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 6
  },
  {
    name: "Ashley" ,
    role:"Web Dev" ,
    img:"https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    id: 7
  },
  {
    name:"Abby" ,
    role:"Software",
    img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 8
  }])
function updateEmployee(id,newName,newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return {...employee, name: newName, role: newRole}
      }
      return employee
    })
    setEmployees(updatedEmployees)
}
function newEmployee(name, role, img){
   const newEmployee = {
    id: uuidv4(),
    name: name,
    role: role,
    img: img,
  }
  setEmployees([...employees, newEmployee])
}

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
      <>
      <input 
        type='text' 
        onChange={(e) => {setRole(e.target.value)
        }} />

        <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
             return ( 
             
            <Employee 
              key = {employee.id}
              id = {employee.id}
              name = {employee.name}
              role = {employee.role}
              img = {employee.img} 
              updateEmployee={updateEmployee} />)
              
          })}
        </div>
        <AddEmployee  
          newEmployee = {newEmployee}/>
        </>
        : <p> You cannot see the Employees</p>
      }
    </div>
  );
}

export default App;