import React, {useEffect, useState, useContext} from 'react'
import { themeContext } from '../../App';
import axios from 'axios';
import './News.css'

const News = () => {

  const [newsData,setNews] = useState([]);
  const { theme, setTheme } = useContext(themeContext);
  const fetchNews = async () =>{

    let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)" 
    }

    let reqOptions = {
      url: "https://c13-app-back-sm.herokuapp.com/api/novelties?lot=adf",
      method: "GET",
      headers: headersList,
    }

    let response = await axios.request(reqOptions);
    setNews(response.data.novelties);
    console.log(theme)
  }

  useEffect(() => {
    fetchNews()
  }, [])
  

  return (
    <div className="contedorNews">
   

     {
     newsData.length===0?<h1>No hay Noticias</h1>: newsData.map(newInfo => (

      <div className="cardNews" key={newInfo.id}>

        <div className="divImgNews">
            <img className='imgNews' src={newInfo.img} alt={newInfo.title}/>
        </div>

        <div className="contentNews">
            <h3 className='titleNews' id='titleNews'>{newInfo.title}</h3>

            <p className='descriptionNews' id='descriptionNews'>
                {newInfo.description}
            </p>
            
            <div className='datesUs'>
                <p className='dataNews fi'>{newInfo.createdAt}</p>
                <p className='author fi'>{newInfo.user.username}</p>
            </div>
        </div>

      </div>
    
    ))
    }
    </div>
  )
}

export default News