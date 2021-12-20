import Image from 'next/image';
import myAvatar from '../../public/profile.png'
import profileStyles from './profile.module.scss'
import Link from 'next/link';

const Profile = () => {
    return (
        <div className={profileStyles.profile}>
          <div className={profileStyles.avatarWrap}>
            <Image src={myAvatar} width={575} height={575} priority alt='My Avatar Photo' />
          </div>
          <div className={profileStyles.profileDesc}>
              <p>My Profile</p>
              <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
              <Link href='/profile'><a>Explore Me</a></Link>
          </div>
        </div>
    );
}

export default Profile;