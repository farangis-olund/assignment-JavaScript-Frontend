import React, { useState } from 'react'
import imgLogotype from '../assets/images/logotype.svg'
import { Link } from 'react-router-dom'
import SocialMedia from './Generics/SocialMedia'
import Menu from './Generics/Menu'

const Header = () => {
  const [menuOpen, setMenuOpen]= useState(false)
  const closeMenu = () =>  setMenuOpen(false)
  
    return (
    <>
    {menuOpen ? (<nav className='barMenu'><Menu closeMenu={closeMenu}/></nav>) : (<></>)}

    <header>
        <div className="container">
            <Link to="/"><img src={imgLogotype} alt="logo"/> </Link> 
            <button onClick={()=>setMenuOpen(!menuOpen)} className="menu-button">
               {menuOpen ? (<i class="fa-sharp fa-solid fa-xmark"></i>) : (<i className="fa-regular fa-bars"></i>)} 
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
                    <nav><Menu/></nav> 
                    <Link to="/login" className="login-btn btn-yellow">Login <i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>
            </div>
            
        </div>
    </header>
    </>
    
  )
}

export default Header