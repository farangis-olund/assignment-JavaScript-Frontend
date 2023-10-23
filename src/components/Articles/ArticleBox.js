import React from 'react'

const ArticleBox = ({imgSrc, imgAlt, date, month, title, description}) => {
  return (
    <a class="box" href="#">
        <div class="img-content">
            <img src={imgSrc} alt={imgAlt}/>
            <div class="calendar"><span>{date}</span> {month}</div>
        </div>
        
        <p class="subtitle">Business</p>    
        <h4>{title}</h4>
        <p>{description}</p>
    </a>
  )
}

export default ArticleBox