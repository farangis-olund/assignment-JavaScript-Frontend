import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import OurServices from '../components/OurServices'
import BottomFooter from '../components/BottomFooter'

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div>
        <OurServices />  
      </div>
      <Footer />
      <BottomFooter />
    </div>
  )
}

export default Home