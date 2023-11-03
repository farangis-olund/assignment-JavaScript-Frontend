import React from 'react'

const Post = ({description, date}) => {
  return (
    <div className='post' >
        <a href='/'>
          <p className='description'>{description}</p>
          <p className='date'>{date}</p>
        </a>
        
    </div>
  )
}

export default Post