import React from 'react'
import imgLogotype from '../assets/images/logotype.svg'
import { NavLink, Link } from 'react-router-dom'
import SocialMedia from './generics/SocialMedia'

const Header = () => {
  return (
    <header>
        <div className="container">
            <Link to="/"><img src={imgLogotype} alt="logo"/> </Link> 
            <button className="menu-bar">
                <i className="fa-regular fa-bars"></i>
            </button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <i className="fa-sharp fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        
                        <div className="content-box">
                            <i className="fa-regular fa-envelope"></i>
                            info@crito.com
                        </div>
                        
                        <div className="content-box last">
                            <i className="fa-regular fa-location-dot"></i>
                             Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                        
                    </div>
                    <SocialMedia />
                </div>
                <div className="main-menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Service</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </nav>
                    <Link to="/login" className="login-btn btn-yellow">Login <i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
            
        </div>
    </header>
  )
}

export default Header