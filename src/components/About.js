import React from 'react'
import aboutImg from '../assets/images/about.png'
import SectionTiltle from './generics/SectionTiltle'
import Button from './generics/Button'

const About = () => {
  return (
    <div className="about">
        <div className="container section-padding">
            <div className="img-container">
                <img src={aboutImg} alt="a woman is going"/>
                <div className="quote">
                    <p id="samantha">Samantha Brown, <span className="colored-word">Founder</span> </p>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p> 
                </div>    
            </div>
            <div className="content">
                <SectionTiltle title="About Company" description="We Are Business Consulting & Credit Repair Experts" />
               
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam officiis quas assumenda esse obcaecati? 
                    Ex esse error voluptates iure vel totam eos. <br></br> <br></br> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Omnis esse quasi incidunt adipisci accusantium libero provident 
                    voluptate amet. 
                </p>
                
                <div className="buttons">
                    <Button type="black" title="Learn More" url="/about" />
                    
                    <a className="btn-play" href="/play">
                        <i id="video-icon" className="fa-thin fa-circle-play"></i>
                        <span>Intro Video</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About