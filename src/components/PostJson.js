import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function PostJson() {
    const [posts, setposts] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((info) => {
          setposts(info.data)
          console.log(info.data);
        })
    }, [])
  return (
    <div>{
    // posts.map(...) ლუპავს ყველა პოსტს და აჩვენებს სათაურს და ტექსტს.
    posts.slice(0, 2).map((element) => (
      // key={post.id} აუცილებელია React-ში სიის ელემენტებისთვის.
    <div key={element.id}>
      <Link to={`/posts/${element.id}`}>{element.title.length > 5 ? element.title.slice(0, 5) : element.title}</Link>
      <p>{element.body.split(" ").length > 7 ? element.body.split(" ").slice(0, 7).join(" ") : element.body}</p>
    </div>
      ))
      }
  </div>
  )
}

export default PostJson