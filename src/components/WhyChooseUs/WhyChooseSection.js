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
    <div class="why-choose-us">
       <div class="container section-padding">
            <div class="content">
                <SectionTiltle title="Why choose u" description="Why We Are The Best Business Consulting Agency" />
                
                <div class="boxes">
                    {
                       boxContent.map((box, index)=>(
                        <WhyChooseBoxs key={index} fafaClass={box.fafaClass} title={box.title} description={box.description}/>
                    ))}
            </div>
            </div>
            
            <img src={img} alt="two women is talking"/>
        </div>
        
        <div class="backround-box"></div>   
    </div>
  )
}

export default WhyChooseSection