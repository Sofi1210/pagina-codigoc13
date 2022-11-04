import React, {useEffect, useState} from 'react'
import './careers.css'


const Careers = () => {

  const [Careers,setCareers] = useState([]);
  const fetchCareers = async () =>{

    let response = await fetch(`https://crudcrud.com/api/${process.env.REACT_APP_KEY_CRUD}/Carrers`);

    let data = await response.json();
     setCareers(data)

  }

  useEffect(() => {
    fetchCareers()
  }, [])
  
  return (
      Careers.map(Careers => (

    <div className="card">
      <div className="face front">
        <img
          src={Careers.image}
          alt={Careers.name}
        />

        <h3>{Careers.name}</h3>
      </div>
      <div className="face back">
        <h3>{Careers.name}</h3>
        <p>{Careers.teacher}</p>
        <p>{Careers.skill}</p>
        <div className="link">
          <p>{Careers.descripcion}</p>
        </div>
      </div>
    </div>
      ))
  )
}

export default Careers