import React from 'react'

const ProjectCaseBoxs = ({imgsSrc, imgAlt, title}) => {
  return (
    <a class="project" href="/project">
        <img src={imgsSrc} alt={imgAlt}/>
        <h4>{title}</h4>
        <div class="readmore"> Read more <i class="fa-regular fa-arrow-up-right"></i></div>
    </a>
  )
}

export default ProjectCaseBoxs