import React from 'react'
import SubManuBar from '../components/SubManuBar'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'
import GoogleMapSection from '../components/GoogleMapSection'

const Contacts = () => {
  return (
    <main>
        <SubManuBar url="/Contacts" page="Contacts" title="Let's Connect" />
        <ContactDetails/>
        <ContactForm/>
        <GoogleMapSection />
     </main>
    
  )
}

export default Contacts