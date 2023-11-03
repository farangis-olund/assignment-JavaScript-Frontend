import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [position, setPosition] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=> setPosition(window.scrollY))
    return ()=> window.removeEventListener('scroll', ()=>{})
    
  }, [])
  const scrollToTop = () => {
    window.scrollTo({top: '0', behavior: "smooth"})
  }
    return (
        <button onClick={scrollToTop} className= {`scrollToTopButton ${position < 100 ? 'hide' : ''}`}><i className="fa-solid fa-arrow-up"></i></button>
    )
}

export default ScrollToTop