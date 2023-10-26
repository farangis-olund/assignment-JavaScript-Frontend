import React from 'react'

const Post = ({description, date}) => {
  return (
    <div className='post' >
        <p className='description'>{description}</p>
        <p className='date'>{date}</p>
    </div>
  )
}

export default Post