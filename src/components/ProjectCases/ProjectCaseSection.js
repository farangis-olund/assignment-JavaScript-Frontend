import React from 'react'
import SectionTiltle from '../generics/SectionTiltle'
import case1 from '../../assets/images/case1.png'
import case2 from '../../assets/images/case2.png'
import case3 from '../../assets/images/case3.png'
import case4 from '../../assets/images/case4.png'
import ProjectCaseBoxs from './ProjectCaseBoxs'
import Button from '../generics/Button'

const ProjectCaseSection = () => {
  const cases = [
    {imgSrc: case1, imgAlt: "hand with business newspaper", title: "Grow your business"},
    {imgSrc: case2, imgAlt: "pink color laptop", title: "Why your client needs a responsive website"},
    {imgSrc: case3, imgAlt: "keabord with office supplies", title: "Educate your employees to get better results"},
    {imgSrc: case4, imgAlt: "computer with business Inteligence in the screen", title: "Business Insights is a important piece of your business"}
  ]
    return (
    <div className="project-case">
       <div className="container section-padding">
            <SectionTiltle title="Project & Case studies" description="Let's Looks Our Global Projects" />
            
            <div className="cases">
                {
                    cases.map (( projectCase, index) => (
                        <ProjectCaseBoxs key={index} 
                        imgsSrc={projectCase.imgSrc} 
                        imgAlt={projectCase.imgAlt}
                        title={projectCase.title} />  
                    ))
                }
            </div>
            <div className="content-center">
                <Button type="black" title="All Recent Projects" url="/services" />
            </div>
        </div>
    </div>
  )
}

export default ProjectCaseSection