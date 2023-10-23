import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OurServices from '../components/Services/OurServices'
import BottomFooter from '../components/BottomFooter'
import GetUpdate from '../components/GetUpdate'
import ArticlesNews from '../components/Articles/ArticlesNews'

const Home = () => {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <ArticlesNews />
        <OurServices/>  
        <GetUpdate />
      </main>
      <Footer/>
      <BottomFooter/>
    </div>
  )
}

export default Home