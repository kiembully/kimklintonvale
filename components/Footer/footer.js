import Link from 'next/link';
import footerStyles from '../../styles/footer.module.scss'

const Footer = () => {
    return (
        <div className={footerStyles.footerWrap}>
            <Link href='mailto:kimklintonvale@gmail.com'><a>Email: kimklintonvale@gmail.com</a></Link>
            <span>Copyright 2021 (C)</span>
            <Link href='https://github.com/kiembully/kimklintonvale'><a>View source on GitHub</a></Link>
        </div>
    );
}

export default Footer;