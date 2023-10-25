import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OurServices from '../components/Services/OurServices'
import BottomFooter from '../components/BottomFooter'
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
    <div className="wrapper">
      <Header/>
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
      <Footer/>
      <BottomFooter/>
    </div>
  )
}

export default Home