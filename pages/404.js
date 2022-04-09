import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        },5000)
    },[])
  return (
    <div>
        <Head>
            <title>Error</title>
        </Head>
        <h1>ERROR</h1>
        <Link href="/">
            <a>Go to Home</a>
        </Link>
    </div>
  )
}

export default NotFound