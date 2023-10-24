import React from 'react'

const WhyChooseBoxs = ({fafaClass, title, description}) => {
  return (
    <a class="box" href="/services">
        <div class="circle"><i class={fafaClass}></i></div>
        <div class="box-content">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </a>
  )
}

export default WhyChooseBoxs