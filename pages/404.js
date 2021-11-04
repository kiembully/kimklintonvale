import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'

const NotFound = () => {
    return (
        <div>
            <h1 className={utilStyles.heading2Xl}>Oooooops...</h1>
            <h2 className={utilStyles.headingXl}>That page cannot be found.</h2>
            <p className={utilStyles.headingMd}>Go back to <Link href='/'><a className={utilStyles.headingLg}>home</a></Link>.</p>
        </div>
    );
}

export default NotFound;