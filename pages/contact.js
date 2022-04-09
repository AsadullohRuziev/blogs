import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
      <>
      <div>Contact</div>
      <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
            <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
    </>
  )
}

export default Contact