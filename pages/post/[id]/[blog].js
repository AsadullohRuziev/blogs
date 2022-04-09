import React from 'react'
import Home from '../../index'
import { useRouter } from 'next/router'



const Blog = () => {
    const router = useRouter()
    const {id, blog } = router.query
  return (
    <div>
        <Home/>
        <h1>Post : {id}</h1>
        <h3>Blog : {blog}</h3>
    </div>
  )
}

export default Blog