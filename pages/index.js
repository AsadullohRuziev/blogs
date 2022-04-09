import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import style from '../styles/Test.module.css'


export default function Home() {
  return (
    <>
      <div className={style.box}>
        <h1 className={style.title}>Asadulloh</h1>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
      </div>
    </>
  )
}
