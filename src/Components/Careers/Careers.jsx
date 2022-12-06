import React, {useEffect, useState} from 'react';
import './careers.css';
import { PaintBucket } from "phosphor-react";
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
      url: "https://c13-app-back.up.railway.app/api/careers",
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
    

    <div className="contenedor-general-div">
    
    {
      careersData.length===0?<h1>No hay carreras</h1>: careersData.map(Career => (

    <div className='container-principal-div'>

        <div className="cardCareers">

          <div className='career-div-container'>

            <div className="program-card-container-div">

              <div className='card-image-container-program'>

                <img  className="Img-program" src={Career.img} alt="Holi"/>

              </div>

              <div  className='card-info-container-program'>

                <h4 className='NameProgram'><PaintBucket size={32}/>{Career.name}</h4>

                <p className='description'>{Career.description}</p>
                <div className='skills'>
                  skills
                </div>
                <div className='container-info-container-theacher'>
                  <Avatar alt={Career.user.username} src="/static/images/avatar/1.jpg" />
                  <h5 className='theacher'>{Career.user.username}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )) 
    }
    
    </div>
  )
}

export default Careers