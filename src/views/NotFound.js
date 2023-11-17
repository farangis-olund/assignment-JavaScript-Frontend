import React from 'react'
import ErrorImg from '../assets/images/404Page.jpg'

const NotFound = () => {
 
  return (
  <div className='notFound'>
    <main className='container'>
        <h1> 404 Page Not Found </h1>
        <img src = {ErrorImg} alt='Error'/>
    </main>
  </div>
  )
}

export default NotFound