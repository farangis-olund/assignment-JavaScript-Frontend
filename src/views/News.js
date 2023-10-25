import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'
import SubManuBar from '../components/SubManuBar'
import ArticlesNews from '../components/Articles/ArticlesNews'
import GetUpdate from '../components/GetUpdate'
const News = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <SubManuBar url="/News" page="News" title="News & Articles" />
        <ArticlesNews sectionDescription="Our News & Articles" articleAmount={9}/>
        <GetUpdate/>
      </main>
      
      <Footer/>
      <BottomFooter/>
    </div>
  )
}

export default News