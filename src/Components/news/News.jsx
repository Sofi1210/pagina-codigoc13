import React, {useEffect, useState} from 'react'
import './News.css'

const News = () => {

  const [newsData,setNews] = useState([]);
  const fetchNews = async () =>{

    let response = await fetch(`https://crudcrud.com/api/${process.env.REACT_APP_KEY_CRUD}/news`);

    let data = await response.json();
     setNews(data.results);
  }

  useEffect(() => {
    fetchNews()
  }, [])
  

  return (
    
    newsData.map(newInfo => (

    <div className="conenedorNews">

      <div className="cardNews" key={newInfo.id}>

        <div className="divImgNews">
            <img className='imgNews' src={newInfo.imagen} alt={newInfo.title}/>
        </div>

        <div className="contentNews">
            <h3 className='titleNews' id='titleNews'>{newInfo.title}</h3>

            <p className='descriptionNews' id='descriptionNews'>
                {newInfo.descripcion}
            </p>
            
            <div className='datesUs'>
                <p className='dataNews fi'>{newInfo.date}</p>
                <p className='author fi'>{newInfo.autor}</p>
            </div>
        </div>

      </div>
    </div>
    ))
    
  )
}

export default News