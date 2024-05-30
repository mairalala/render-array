import './App.css';
import Persons from './Components/Persons';
import { useState } from 'react';

function App() {
  const[persons, setPersons]= useState( [
    {
        id:1,
        name: "laura ramirez",
        role: "Frontend Developer",
        img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
        id:2,
        name: "luis",
        role: "Backend Developer",
        img: "https://bootdey.com/img/Content/avatar/avatar6.png",
    },
    {
        id:3,
        name: "floro",
        role: "UI/UX Designer",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
]);
  return (
    <div className='App'>
      <div className='container'>
        <Persons persons={persons} setPersons={setPersons}/>
      </div>
    </div>
  );
}

export default App;
