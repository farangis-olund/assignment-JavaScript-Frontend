import React from 'react'
import ErrorImg from '../assets/images/404Page.jpg'
import { Link } from 'react-router-dom'
const NotFound = () => {
 
  return (
  <div className='notFound'>
    <main className='container'>
        <Link to="/" >Go Home</Link>
        <h1> 404 Page Not Found </h1>
        <img src = {ErrorImg} alt='Error img'/>
    </main>
  </div>
  
 
  )
}

export default NotFound