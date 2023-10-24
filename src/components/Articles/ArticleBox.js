import React from 'react'

const ArticleBox = ({imgSrc, imgAlt, date, month, title, description}) => {
  return (
    <a className="box" href="/articles">
        <div className="img-content">
            <img src={imgSrc} alt={imgAlt}/>
            <div className="calendar"><span>{date}</span> {month}</div>
        </div>
        
        <p className="subtitle">Business</p>    
        <h4>{title}</h4>
        <p>{description}</p>
    </a>
  )
}

export default ArticleBox