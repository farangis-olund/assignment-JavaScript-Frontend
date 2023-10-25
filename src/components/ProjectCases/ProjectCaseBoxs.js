import React from 'react'

const ProjectCaseBoxs = ({imgsSrc, imgAlt, title}) => {
  return (
    <a className="project" href="/project">
        <img src={imgsSrc} alt={imgAlt}/>
        <h4>{title}</h4>
        <div className="readmore"> Read more <i className="fa-regular fa-arrow-up-right"></i></div>
    </a>
  )
}

export default ProjectCaseBoxs