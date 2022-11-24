import React, {useEffect, useState} from 'react'
import './careers.css'


const Careers = () => {

  const [careersData,setCareers] = useState([]);
  const fetchCareers = async () =>{

    let response = await fetch(`https://crudcrud.com/api/${process.env.REACT_APP_KEY_CRUD}/Carrers`);

    let data = await response.json();
     setCareers(data)

  }

  useEffect(() => {
    fetchCareers()
  }, [])
  
  return (
    
    careersData.length===0?<h1>No hay carreras</h1>: careersData.map(Career => (

        <div className="card">
          <div className="face front">
            <img
              src={Career.image}
              alt={Career.name}
            />
    
            <h3>{Career.name}</h3>
          </div>
          <div className="face back">
            <h3>{Career.name}</h3>
            <p>{Career.teacher}</p>
            <p>{Career.skill}</p>
            <div className="link">
              <p>{Career.descripcion}</p>
            </div>
          </div>
        </div>
          ))
    
     
  )
}

export default Careers