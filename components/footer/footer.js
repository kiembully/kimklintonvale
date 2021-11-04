import styles from './footer.module.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.center}>
            <hr/>
            <Link href='https://github.com/kiembully/kimklintonvale'><a>View source on Git</a></Link>
            <br/>
            Copyright 2021 | Kim Vale
        </div>
    );
}

export default Footer;