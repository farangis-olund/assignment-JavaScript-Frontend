import React from 'react'
import img from '../../assets/images/why-choose-us.jpg'
import SectionTiltle from '../generics/SectionTiltle'
import WhyChooseBoxs from './WhyChooseBoxs'

const WhyChooseSection = () => {
     const boxContent = [
            {fafaClass: "fa-regular fa-thumbs-up", title: "Process Excellence", description: "Lorem, ipsum dolor sit amet consectetur."},
            {fafaClass: "fa-sharp fa-regular fa-hexagon", title: "Strategic Planning", description: "Lorem, ipsum dolor sit amet consectetur."},
            {fafaClass: "fa-sharp fa-regular fa-pen-paintbrush", title: "Experience Design", description: "Lorem, ipsum dolor sit amet consectetur."},
            {fafaClass: "fa-regular fa-head-side-gear", title: "Artificial Inteligence", description: "Lorem, ipsum dolor sit amet consectetur."}
        
        ]
      
    return (
    <div className="why-choose-us">
       <div className="container section-padding">
            <div className="content">
                <SectionTiltle title="Why choose us" description="Why We Are The Best Business Consulting Agency" />
                
                <div className="boxes">
                    {
                       boxContent.map((box, index)=>(
                        <WhyChooseBoxs key={index} fafaClass={box.fafaClass} title={box.title} description={box.description}/>
                    ))}
            </div>
            </div>
            
            <img src={img} alt="two women is talking"/>
        </div>
        
        <div className="backround-box"></div>   
    </div>
  )
}

export default WhyChooseSection