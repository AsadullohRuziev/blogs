import style from '../styles/Test.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <div className={style.box}>
        <h1 className={style.title}>Asadulloh</h1>
          <ul>
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
          </ul>
      </div>
    </>
  )
}
