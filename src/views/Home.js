import React from 'react'
import OurServices from '../components/Services/OurServices'
import GetUpdate from '../components/GetUpdate'
import ArticlesNews from '../components/Articles/ArticlesNews'
import TeamSection from '../components/Team/TeamSection'
import TestimonaialSection from '../components/Testimonial/TestimonaialSection'
import ShowCase from '../components/ShowCase'
import Partners from '../components/Partners'
import FuturesSection from '../components/Futures/FuturesSection'
import About from '../components/About'
import ProjectCaseSection from '../components/ProjectCases/ProjectCaseSection'
import WhyChooseSection from '../components/WhyChooseUs/WhyChooseSection'

const Home = () => {
  return (
    
    <>  
    <main>
        <ShowCase/>
        <Partners/>
        <FuturesSection/>
        <About/>
        <OurServices/>
        <WhyChooseSection/>
        <ProjectCaseSection/>  
        <TeamSection />
        <TestimonaialSection/>
        <ArticlesNews sectionDescription="Get Every Single Articles & News" articleAmount={3}/>
        <GetUpdate />
      </main>
    </>
  )
}

export default Home