import Head from 'next/head';
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import apiHelper from '../helper/apiHelper';

const Application = ({users}) => {
    return (
        <>
        <Head>
            <title>Application</title>
        </Head>
        <div>
            <h2 className={utilStyles.heading2Xl}>Next JS - Applied concepts</h2>
            <hr/>
            <div>
                <h2 className={utilStyles.headingXl}>Fetch data from API - LIST</h2>
                <p className={utilStyles.lightText}>Also includes dynamic paths with its data</p>
                {
                    users.map(user => (
                        <div key={user.id} className={utilStyles.list}>
                            <Link href={'/users/' + user.id}>
                                <a className={utilStyles.listItem}>{user.name}</a>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div>
                <h2 className={utilStyles.headingXl}>Sample Login - Using live API</h2>
                <Link href='/login'><a>Login</a></Link>
            </div>
        </div>
        </>
    );
}

export default Application;

export const getStaticProps = async (ctx) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props:{
            users:data
        }
    }
}