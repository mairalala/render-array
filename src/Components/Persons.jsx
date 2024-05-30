import React from 'react'
import { useState } from 'react'
import Person from './Person';

const Persons = () => {

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
            id:1,
            name: "floro",
            role: "UI/UX Designer",
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
        },
    ]
        
    );

  return (
    <div>
        <h2>IT Team</h2>
        <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-row'>
            {persons.map((person)=> {
            return(
                <div>
                    <Person
                    key={person.id}
                    name= {person.name}
                    role={person.role}
                    img={person.img}
                     />
                </div>
            ) 
        })}
        </div>
        </div>
        
    </div>
  )
}

export default Persons