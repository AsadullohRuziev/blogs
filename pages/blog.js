import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
      <>
      <div>Blog</div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
          <Image src='/beach.jpg' width={500} height={400} />
    </>
  )
}

export default Blog
