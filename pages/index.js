import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
            <Link href="/blog">
                <a>About</a>
              </Link>
            </li>
            <li>
            <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
      </div>
    </>
  )
}
