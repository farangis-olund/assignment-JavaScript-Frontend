import React from 'react'
import { NavLink } from 'react-router-dom'
import decor from '../assets/images/background-lines.svg'

const SubManuBar = ({url, page, title}) => {
  return (
    <div className="showcase showcase-contacts">
        <div className="container">
           <nav className="nav-contact">
                <NavLink to="/">Home</NavLink>
                <NavLink to={url}>{page}</NavLink> 
            </nav>
            <h2 id="showcase-text">{title}</h2>
        </div>
        <div className="decoration">
            <img src={decor} alt=""/>
        </div>
    </div>
  )
}

export default SubManuBar