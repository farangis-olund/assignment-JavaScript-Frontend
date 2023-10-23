import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <a href={url} className="box-content">
        <div className="left-content">
            <i className="fa-light fa-dash"></i> 
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
        <div className="right-content"><i className="right-content fa-solid fa-circle-arrow-right"></i></div>    
    </a>    
  )
}

export default ServiceBox