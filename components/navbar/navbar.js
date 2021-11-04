import Link from 'next/link';
import styles from './navbar.module.css'
import { useRouter } from 'next/router'

const Navbar = () => {

    // handles header's visibility
    function handleHeader() {
        const router = useRouter();
        return (router.pathname != '/404')
    }

    return (
        handleHeader() ?
        <div className={styles.flexContainer}>
           <span className={styles.fillSpace}><Link href='/'><a>About Me</a></Link> </span>
           <span className={styles.fillSpace}><Link href='/'><a>Projects</a></Link> </span>
           <span className={styles.fillSpace}><Link href='/'><a>Academic</a></Link> </span>
           <span className={styles.fillSpace}><Link href='/application'><a>Application</a></Link> </span>
        </div>
        : <></>
    );
}

export default Navbar;