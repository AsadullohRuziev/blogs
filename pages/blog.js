import React from 'react'
import Link from 'next/link'

const blog = () => {
  return (
    <>
        <h1>Blog</h1>
        <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
            <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
    </>
  )
}

export default blog