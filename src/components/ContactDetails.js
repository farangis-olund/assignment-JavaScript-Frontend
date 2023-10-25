import React from 'react'

const ContactDetails = () => {
  return (
    <div className="contact-detail">
        <div className="container section-padding">
            <div className="box">
                <i className="fa-solid fa-circle-location-arrow"></i>
                <div className="content">
                    <h4>Visit us</h4>
                    <p>Sveavägen 31</p>
                    <p>111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="box">
                <i className="fa-solid fa-circle-phone"></i>
                <div className="content">
                    <h4>Call us</h4>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="box">
                <i className="fa-solid fa-circle-envelope"></i>
                <div className="content">
                    <h4>Email us</h4>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ContactDetails