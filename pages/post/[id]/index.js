import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import Home from '../../index'



const Post = () => { //postni ichida bloglarga otish u-n 

    const router = useRouter()
    const {id} = router.query
  return (
    <div>
        <Home/>
        <h1> Post : {id}</h1>
        <ul>
            <li>
                <Link href="/post/[id]/[blog]" as={`/post/${id}/1`}>
                    <a>1-Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/post/[id]/[blog]" as={`/post/${id}/2`}>
                    <a>2-Blog</a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Post