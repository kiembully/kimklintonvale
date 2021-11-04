import Layout from '../components/layout'
import '../styles/global.css'

export default function App({ Component, pageProps, href }) {
  return <Layout><Component {...pageProps} /></Layout>
}