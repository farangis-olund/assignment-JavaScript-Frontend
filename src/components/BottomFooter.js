import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from './generics/SocialMedia'

const BottomFooter = () => {
  return (
    <div class="bottom-footer">
       
        <div class="container">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <SocialMedia />
        </div> 
   
    </div>
  )
}

export default BottomFooter