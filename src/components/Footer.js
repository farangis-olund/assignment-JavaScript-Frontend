import React from 'react'
import { Link } from 'react-router-dom'
import imgLogotype from '../assets/images/logotype-white.svg'
import imgDecorationLinesRight from '../assets/images/background-lines-white-right.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container section-padding">
            <div className="logo">
                <Link to="/"><img src={imgLogotype} alt="logo"/></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            
            <div className="content">
                <div className="box">
                    <h4>Company</h4>
                    <Link to="#">About</Link>
                    <Link to="#">Futures</Link>
                    <Link to="#">Works</Link>
                    <Link to="#">Careers</Link>
                </div>

                <div className="box">
                    <h4>Help</h4>
                    <Link to="#">Customer Support</Link>
                    <Link to="#">Delivery Details</Link>
                    <Link to="#">Terms & Conditions</Link>
                    <Link to="#">Privacy Policy</Link>
                </div>

                <div className="box">
                    <h4>Resources</h4>
                    <Link to="#">Free eBooks</Link>
                    <Link to="#">Development Tutorial</Link>
                    <Link to="#">How to - Blog</Link>
                    <Link to="#">Youtube Playlist</Link>
                </div>
                    
                <div className="box">
                    <h4>Links</h4>
                    <Link to="#">Free eBooks</Link>
                    <Link to="#">Development Tutorial</Link>
                    <Link to="#">How to - Blog</Link>
                    <Link to="#">Youtube Playlist</Link>
                </div>
            </div>
        
        </div>
        
        <img className="decoration" src={imgDecorationLinesRight} alt="decor-img"/>
    </footer>

   
  )
}

export default Footer