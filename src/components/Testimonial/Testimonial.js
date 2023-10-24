import React from 'react'

const Testimonial = ({imgSrc, imgAlt, name, title, description}) => {
    
    const stars = Array(5).fill(null);
    
    return (
        <a href="/testimonial" className="box">
            <div className="stars">
                {stars.map((_, index) => (
                    <i key={index} className="fa-solid fa-star"></i>
                ))}
            </div>
            
            <p>{description}</p>
            
            <div className="customer">
                <img src={imgSrc} alt={imgAlt}/>
                
                <div className="content">
                    <h4>{name}</h4>
                    <p className="red-section-title">{title}</p>
                </div>
            </div>
        </a>
    )
}

export default Testimonial