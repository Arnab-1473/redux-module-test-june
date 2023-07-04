import React from 'react'
import { useSelector } from 'react-redux'

const DetailsPage = () => {
  const {post} = useSelector((state) => state.details);

  if (!post) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='details'>
      <h2>Details Page For Post With ID - {post.id}</h2>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
      <h2>User Id : {post.userId} </h2>
      <h3>Title : {post.title} </h3>
      <span>Body : {post.body} </span>
    </div>
  )
}

export default DetailsPage
