import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

function SinglePosts() {
    const {id}=useParams()
    const [post, setpost]=useState({})
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((info)=>{
          console.log(info.data);
          setpost(info.data)
      }) 
      }, [id])
  return (
    <div className='singlePostContainer'>
      <div className='singlePostContent' key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to="/home" className='backLink'>Back to Home</Link>
      </div>
    </div>
  )
}

export default SinglePosts