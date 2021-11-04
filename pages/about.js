import utilStyles from '../styles/utils.module.css'
import Head from 'next/head';
import Link from 'next/link'

const about = () => {
    return (
        <>
        <Head>
            <title>About</title>
        </Head>
        <div className={utilStyles.container}>
            <h1>About Me</h1>
            <p>This page is About Page</p>
            <Link href='/'><a>Back to home.</a></Link>
        </div>
        </>
    );
}

export default about;