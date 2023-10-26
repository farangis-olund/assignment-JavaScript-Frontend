import React from 'react'
import { Link } from 'react-router-dom'
const ArticleBox = ({articleId, imgSrc, imgAlt, date, month, title, description, category}) => {
  // console.log(key)
  return (
    <Link to={`/newsdetails/${articleId}`} className="box" >
        <div className="img-content">
            <img src={imgSrc} alt={imgAlt}/>
            <div className="calendar"><span>{date}</span> {month}</div>
        </div>
        
        <p className="subtitle">{category}</p>    
        <h4>{title}</h4>
        <p>{description}</p>
    </Link>
  )
}

export default ArticleBox