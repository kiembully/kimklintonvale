// css 
import navStyles from '../../styles/nav.module.scss'
// mui 
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArticleIcon from '@mui/icons-material/Article';
// native 
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TopMenu = () => {
    const [value, setValue] = useState(0);
    const router = useRouter();
    const onLink = (href) => {
        router.push(href);
    };
    
    return (
        <>
        <div className={navStyles.webNav}>
            <ul className={navStyles.navWrap}>
                <li><Link href='/'><a>Brand</a></Link></li>
                <li className={navStyles.liFlex}></li>
                <li><Link href='/profile'><a>Profile</a></Link></li>
                <li><Link href='/portfolio'><a>Portfolio</a></Link></li>
                <li><Link href='/contact'><a>Contact</a></Link></li>
            </ul>
        </div>

        <div className={navStyles.mobNav}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        >
            <BottomNavigationAction onClick={() => onLink("/")} label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction onClick={() => onLink("/profile")} label="Profile" icon={<PersonIcon />} />
            <BottomNavigationAction onClick={() => onLink("/portfolio")} label="Portfolio" icon={<ArticleIcon />} />
            <BottomNavigationAction onClick={() => onLink("/contact")} label="Contact" icon={<ContactPageIcon />} />
        </BottomNavigation>
        </div>
        </>
    );
}

export default TopMenu;