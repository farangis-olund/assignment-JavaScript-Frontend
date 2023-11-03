import React from 'react'
import ServiceBox from './ServiceBox'
import SectionTiltle from '../Generics/SectionTiltle'
import Button from '../Generics/Button'
import imgDecorationLinesRight from '../../assets/images/background-lines-right.svg'
const OurServices = () => {
  
  const services =[
    {title: "Business Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/businessadvice"},
    {title: "Sturtup Business", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/startUpbusiness"},
    {title: "Financial Advice", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url: "/services/financialadvice"},
    {title: "Risk Management", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.", url : "/services/riskmanagement"}
 ]
  
  return (
    <section className="services">
        <div className="container section-padding">
           <SectionTiltle title="Our Services" description="We Provide The Best Service For Consulting" />

            <div className="services-boxes">
              { services.map((service, index) => (
                  <ServiceBox key={index} title={service.title} description={service.description} url={service.url}/>
                ))}
              
               
            </div>
            
            <div className="content-center" >
                <Button url="services.html" title="Browse Services" />
            </div>
        </div>
        
        <img className="decoration" src={imgDecorationLinesRight} alt="decor-img" />  
    </section>
  )
}

export default OurServices