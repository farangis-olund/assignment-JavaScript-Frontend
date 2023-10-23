import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from './generics/SocialMedia'

const BottomFooter = () => {
  return (
    <div className="bottom-footer">
       
        <div className="container">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <SocialMedia />
        </div> 
   
    </div>
  )
}

export default BottomFooter