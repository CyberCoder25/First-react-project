import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
   const [posts, setposts]=useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((info) => {
          setposts(info.data)
          console.log(info.data);
        })
    }, [])
  return (
      <main>
      <section className='bannerSection'>
        <div className="banner"></div>
      </section>
      <h2 className="gradientText">POSTS</h2>
      <aside className="post">
          {
           // posts.map-is gareshec ganvixile.
           posts.slice(0, 6).map((element) => (
           <div className='postDiv' key={element.id}>
            {/* asoebad davyavi */}
             <Link to={`/posts/${element.id}`}>{element.title.length > 20 ? element.title.slice(0, 5) : element.title}</Link>
             {/* sityvebad davyavi */}
             <p>{element.body.split(" ").length > 7 ? element.body.split(" ").slice(0, 15).join(" ") : element.body}</p>
           </div>
             ))
             }
      </aside>
    </main>
  )
}

export default Home