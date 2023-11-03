import React from 'react'
import SectionTiltle from '../Generics/SectionTiltle'
import Button from '../Generics/Button'
import FuturesBox from './FuturesBox'

const FuturesSection = () => {
  
    const futureBoxs = [
        {fafaClass: "fa-regular fa-handshake", title: "Business Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {fafaClass: "fa-sharp fa-regular fa-lightbulb-on", title: "Startup Business", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {fafaClass: "fa-regular fa-display-chart-up-circle-dollar", title: "Financial Advice", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {fafaClass: "fa-regular fa-cube", title: "Risk Management", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
        
    ]
  
    return (
    <div className="futures">
       <div className="container section-padding">
            <div className="futures-text-block">
                <SectionTiltle title="Futures" description="Our Accounting is trusted by thousand of companies" />
                <Button type="yellow" title="Learn More" url="/services" />
            </div>
            
            <div className="futures-boxes">
                {
                    futureBoxs.map((future, index)=>(
                    <FuturesBox key={index} fafaClass={future.fafaClass} title={future.title} description={future.description}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FuturesSection