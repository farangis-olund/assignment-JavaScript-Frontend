import React from 'react'
import { Link } from 'react-router-dom'
const TeamMember = ({imgSrc, imgAlt, memberName, memberPosition}) => {
  return (
    <Link to="/services" className="member">
        <img src={imgSrc} alt={imgAlt}/>
        <h4>{memberName}</h4>
        <p>{memberPosition}</p>
    </Link>
  )
}

export default TeamMember