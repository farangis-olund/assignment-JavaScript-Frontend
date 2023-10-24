import React from 'react'
import Button from './generics/Button'
import decor from '../assets/images/background-lines.svg'
import showcaseImg from '../assets/images/showcase-image.svg'

const ShowCase = () => {
  return (
    <div className="showcase">
        <div className="container">
            <div className="content">
                <h1>We provide The Best business solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                <div className="content-center">
                    <Button type="yellow" title="Get Consulting" url="/consulting" />
                    <Button title="Learn More" url="/services" />
                </div>
           </div>
            <img src={showcaseImg} alt="image of the man"/>
        </div>
        <img className="decoration" src={decor} alt=""/>
    </div>
  )
}

export default ShowCase