import React, {useEffect, useState} from 'react';
import './careers.css';
import { Backpack, PaintBucket } from "phosphor-react";
import Avatar from '@mui/material/Avatar';
import axios from 'axios';

const Careers = () => {

    const [careersData,setCareers] = useState([]);
    const fetchCareers = async () =>{

    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)" 
    }
    
    let reqOptions = {
      url: "https://c13-app-back-sm.herokuapp.com/api/careers",
      method: "GET",
      headers: headersList,
    }
    
    let response = await axios.request(reqOptions);
    setCareers(response.data.careers);

  }

  useEffect(() => {
    fetchCareers()
  }, [])
  
  return (
    
    careersData.length===0?<h1>No hay carreras</h1>: careersData.map(Career => (

    <div className='container-principal-div'>

        <h1><Backpack size={32} />Aprender</h1>
        <div className="cardCareers">

          <div className='career-div-container'>

            <div className="program-card-container-div">

              <div className='card-image-container-program'>

                <img  className="Img-program" src='https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="Holi"/>

              </div>

              <div  className='card-info-container-program'>

                <h4 className='NameProgram'><PaintBucket size={32}/>FrontEnd</h4>

                <p className='description'>Descripción</p>
                <div className='skills'>
                  skills
                </div>
                <div className='container-info-container-theacher'>
                  <Avatar alt="Jemy Sharp" src="/static/images/avatar/1.jpg" />
                  <h5 className='theacher'>Jhonier Mosquera</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )) 
  )
}

export default Careers