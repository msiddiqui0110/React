import './App.css';
import Employee from './components/employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('Dev')
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ?
      <>
      <input 
        type='text' 
        onChange={(e) => {setRole(e.target.value)}} />
        <Employee name= "Junaid" role="Software Dev"/>
        <Employee name="Abby" role={role}/>
        <Employee name="John" role="Software Eng"/>
        </>
        : <p> You cannot see the Employees</p>
      }
    </div>
  );
}

export default App;