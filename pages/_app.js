import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/err.css';
import '../styles/scss/cards.scss'
import '../styles/footer.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
