import React from 'react'

const Category = ({title, postCount}) => {
  return (
    <a href='/' className='category'>
        <h5>{title} - </h5>
        <p>{postCount} Posts</p>
    </a> 
  )
}

export default Category