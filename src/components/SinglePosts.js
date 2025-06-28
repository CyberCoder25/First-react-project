import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

function SinglePosts() {
    const {id} = useParams()
    const [post, setpost] = useState({})
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((info)=>{
          console.log(info.data);
          setpost(info.data)
      }) 
      }, [id])
  return (
    <div>
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to="/">Back to posts</Link>
      </div>
    </div>
  )
}

export default SinglePosts