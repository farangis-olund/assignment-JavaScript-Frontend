import React from 'react'
import imgDecoration from '../assets/images/background-wavy-lines.svg'
const GetUpdate = () => {
  return (
    <div className="get-update">
      
        <div className="container section-padding">
            <div className="section-title">
                <h2>Get News Updates By Signup</h2>
            </div>
            
            <div className="content-center">
                <input className="input-transparent" type="text" placeholder="username@domain.com"/>
                <a className="btn-yellow" href="services.html">Subscribe <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    
        <img className="decoration" src={imgDecoration} alt="decor-img"/>   
   
    </div>
  )
}

export default GetUpdate