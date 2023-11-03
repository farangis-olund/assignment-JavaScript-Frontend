import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)
  useEffect(()=>{
    const handlScroll = () => {
        if (window.scrollY > 150)
            setShowButton(true)
        else 
            setShowButton (false)
    }

    window.addEventListener('scroll', handlScroll)
    return ()=> {
        window.removeEventListener('scroll', handlScroll)
    }
  }, [])
  const scrollToTop = () => {
    window.scrollTo({top: '0', behavior: "smooth"})
  }
    return (
        showButton && (
            <button onClick={scrollToTop} className='scrollToTopButton'><i class="fa-solid fa-arrow-up"></i></button>
        )
    )
}

export default ScrollToTop