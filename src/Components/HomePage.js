
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../Actions/apiActions';
import { addToDetailsPage } from '../Actions/detailsAction';

const HomePage = () => {
  const {loading, posts, error} = useSelector(state => state.posts);
  // console.log(loading, posts, error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  function handleCard(post) {
    dispatch(addToDetailsPage(post));
    navigate(`/item/${post.id}`);
  }
  if(loading) {
    return (

<div class="loading">
  <h1>Loading</h1>
  <div class="ball"></div>
  <div class="ball"></div>
  <div class="ball"></div>
</div>

    )
  }
  if(error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className='home-container'>
      {
      posts && posts.map((post) => {
        return(
          <div className='post' key={post.id} onClick={() => handleCard(post)}>
            <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title}/>
            <p> User Id : {post.id}</p>
            <p> Title : {post.title.slice(0,10)}... </p>
            <p>Body : {post .body.slice(0,50)} </p>
            <p>Read More...</p>
          </div>
        )
      })}
    </div>
  )
}

export default HomePage
