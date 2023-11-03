import React from 'react'

const FuturesBox = ({fafaClass, title, description}) => {
  return (
    <a className="box-content" href="/">
        <i className={fafaClass}></i>
        <h4>{title}</h4>
        <p>{description}</p>
    </a>
  )
}

export default FuturesBox