import React from 'react'

const Category = ({title, postCount}) => {
  return (
    <div className='category'>
        <h5>{title} - </h5>
        <p>{postCount} Posts</p>
    </div> 
  )
}

export default Category