import React from 'react'
import { NavLink } from 'react-router-dom'
const Menu = ({closeMenu}) => {
  return (
    <>
      <NavLink to="/" onClick={closeMenu}>Home</NavLink>
      <NavLink to="*" onClick={closeMenu}>Service</NavLink>
      <NavLink to="/news" onClick={closeMenu}>News</NavLink>
      <NavLink to="/contacts" onClick={closeMenu}>Contacts</NavLink>
    </>
    
  )
}

export default Menu