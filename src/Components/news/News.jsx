import React, {useEffect, useState} from 'react'
import './News.css'

const News = () => {

  const [News,setNews] = useState([]);
  const fetchNews = async () =>{

    let response = await fetch(`https://crudcrud.com/api/${process.env.REACT_APP_KEY_CRUD}/news`);

    let data = await response.json();
     setNews(data.results);
  }

  useEffect(() => {
    fetchNews()
  }, [])
  

  return (
    
    News.map(News => (

    <div className="conenedorNews">

      <div className="cardNews" key={News.id}>

        <div className="divImgNews">
            <img className='imgNews' src={News.imagen} alt={News.title}/>
        </div>

        <div className="contentNews">
            <h3 className='titleNews' id='titleNews'>{News.title}</h3>

            <p className='descriptionNews' id='descriptionNews'>
                {News.descripcion}
            </p>
            
            <div className='datesUs'>
                <p className='dataNews fi'>{News.date}</p>
                <p className='author fi'>{News.autor}</p>
            </div>
        </div>

      </div>
    </div>
    ))
    
  )
}

export default News