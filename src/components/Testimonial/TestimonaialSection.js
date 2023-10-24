import React from 'react'
import SectionTiltle from '../generics/SectionTiltle'
import cassandra from '../../assets/images/cassandra-warren.png'
import amanda from '../../assets/images/amanda-tulling.png'
import jack from '../../assets/images/jack-mcDogglas.png'
import Testimonial from './Testimonial'
import Button from '../generics/Button'

const TestimonaialSection = () => {
  const testimonials =[
    {imgSrc: cassandra, imgAlt: "Cassandra Warren", name: "Cassandra Warren", title: "Business Manager, Dorfus", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"},
    {imgSrc: amanda, imgAlt: "Amanda Tulling", name: "Amanda Tulling", title: "Senior Developer, Square", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"},
    {imgSrc: jack, imgAlt: "Jack McDogglas", name: "Jack McDogglas", title: "Key Account Manager, Gobona", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"},
  ]
  
  return (
    <div className="testimonial">
       <div className="container section-padding">
            <SectionTiltle title="Testimonial" description="What Our Client Says" />
           
            <div className="boxes">
                { testimonials.map((testimonial, index)=>(
                    <Testimonial key={index} imgSrc={testimonial.imgSrc}
                    imgAlt={testimonial.imgAlt}
                    name={testimonial.name}
                    title={testimonial.title}
                    description={testimonial.description} />))}
          </div>
            
            <div className="content-center">
              <Button type="black" url="/reviews" title="All Reviews" />
            </div>
        </div>
    </div>
  )
}

export default TestimonaialSection