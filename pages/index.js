import Link from 'next/link'
import { data } from "../data/data"
import Cards from "../components/cards"

export default function Home() {
  return (
    <>
      <div className="jn">
        <Cards/>
        {/* <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
            <Link href="/post/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
            <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
            <li>
            <Link href="/error">
                <a>Error</a>
              </Link>
            </li>
          </ul> */}
      </div>
    </>
  )
}
