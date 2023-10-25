import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomFooter from '../components/BottomFooter'
// import GoogleMapSection from '../components/GoogleMapSection'
import SubManuBar from '../components/SubManuBar'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

const Contacts = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <main>
        <SubManuBar url="/Contacts" page="Contacts" title="Let's Connect" />
        <ContactDetails/>
        <ContactForm/>
      </main>
      {/* <GoogleMapSection/> */}
      <Footer/>
      <BottomFooter/>
    </div>
  )
}

export default Contacts