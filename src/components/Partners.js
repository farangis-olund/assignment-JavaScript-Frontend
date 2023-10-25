import React from 'react'
import paperz from '../assets/images/paperz.svg'
import dorfus from '../assets/images/dorfus.svg'
import martino from '../assets/images/martino.svg'
import square from '../assets/images/square.svg'
import gobona from '../assets/images/gobona.svg'

const Partners = () => {
  
  const partners = [
    {imgSrc: paperz, imgAlt: "paperz"},
    {imgSrc: dorfus, imgAlt: "dorfus"},
    {imgSrc: martino, imgAlt: "martino"},
    {imgSrc: square, imgAlt: "square"},
    {imgSrc: gobona, imgAlt: "gobona"}
  ]
    return (
    <div>
        <div className="container section-padding">
            {
                partners.map((partner, index)=>(
                    <img key={index} src={partner.imgSrc} alt={partner.imgAlt}/>
            ))}
        </div>
    </div>
  )
}

export default Partners