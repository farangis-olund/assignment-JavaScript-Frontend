import React from 'react'

const WhyChooseBoxs = ({fafaClass, title, description}) => {
  return (
    <a className="box" href="/services">
        <div className="circle"><i className={fafaClass}></i></div>
        <div className="box-content">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </a>
  )
}

export default WhyChooseBoxs