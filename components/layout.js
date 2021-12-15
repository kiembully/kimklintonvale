import Head from 'next/head'
import styles from './layout.module.scss'
import { useRouter } from 'next/router'

// components 
import Navigation from './Navigation'
import Footer from './Footer/footer'

export default function Layout({children, pageMeta}) {
    const router = useRouter()
    const meta = {
        title: 'Kim - ' + capitalizeFirstLetter((router.pathname).replace(/\//g, "")),
        description: 'I completely wrote my personal website using React/Next.js.',
        keywords: 'Personal Website',
        type: 'website',
        url: 'http://localhost:3000' + router.pathname,
        ...pageMeta
    }
    function capitalizeFirstLetter(string) {
        return (string !== '') ? string.charAt(0).toUpperCase() + string.slice(1) : 'Home';
    }
    
  return (
    <div className={styles.container}>
        <Head>
            <title>{meta.title}</title>
            <meta name='keywords' content={meta.keywords}></meta>
            <meta name='description' content={meta.description}></meta>
            <meta property="og:url" content={meta.url} />
        </Head>
        <Navigation />
        <div className={styles.main}>
            <main>
                {children}
            </main>
        </div>
        <Footer />
    </div>
  )
}