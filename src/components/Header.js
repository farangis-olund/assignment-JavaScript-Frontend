import React from 'react'
import imgLogotype from '../assets/images/logotype.svg'
import { NavLink, Link } from 'react-router-dom'
import SocialMedia from './generics/SocialMedia'

const Header = () => {
  return (
    <header>
        <div class="container">
            <Link to="/"><img src={imgLogotype} alt="logo"/> </Link> 
            <button class="menu-bar">
                <i class="fa-regular fa-bars"></i>
            </button>
            <div class="menu">
                <div class="top-menu">
                    <div class="contact-information">
                        <div class="content-box">
                            <i class="fa-sharp fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        
                        <div class="content-box">
                            <i class="fa-regular fa-envelope"></i>
                            info@crito.com
                        </div>
                        
                        <div class="content-box last">
                            <i class="fa-regular fa-location-dot"></i>
                             Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                        
                    </div>
                    <SocialMedia />
                </div>
                <div class="main-menu">
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Service</NavLink>
                        <NavLink to="/news">News</NavLink>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </nav>
                    <Link to="/login" class="login-btn btn-yellow">Login <i class="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
            
        </div>
    </header>
  )
}

export default Header