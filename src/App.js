import './index.css';
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
        onChange={(e) => {setRole(e.target.value)
        }} />

        <div className='flex flex-wrap justify-center'>
          <Employee 
            Name= "Junaid" 
            Role="Software Engineer" 
            Img="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww" />
          <Employee 
            Name="Stephanie" 
            Role="Sales" 
            Img="https://plus.unsplash.com/premium_photo-1673957923985-b814a9dbc03d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww" />
          <Employee 
            Name="Johnson" 
            Role="Business Analyst" 
            Img="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
          <Employee 
            Name= "Gale" 
            Role="Project Manager" 
            Img="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
          <Employee 
            Name="Monica" 
            Role="Business Dev Manager"
            Img="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
          <Employee 
            Name="John" 
            Role="Scrum Master" 
            Img="https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
          <Employee 
            Name= "Ashley" 
            Role="Web Developer" 
            Img="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
          <Employee 
            Name="Abby" 
            Role="Software Architecture"
            Img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        </>
        : <p> You cannot see the Employees</p>
      }
    </div>
  );
}

export default App;