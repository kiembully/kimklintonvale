import homeStyles from '../styles/home.module.scss'
// mui 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Avatar from '@mui/material/Avatar';
// components 
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
// native 


export default function Home() {
  return (
    <>
    <section className={homeStyles.homeWrap}>
      <span>
        <label>[Your Self Introduction]</label>
        <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </h1>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contact Me Via Email</Button>
          <Button variant="text"><DownloadIcon /> Download My CV</Button>
        </Stack>
      </span>
      <span>
        <Banner />
      </span>
    </section>

    <section className={homeStyles.carouselWrap}>
      <Carousel />
    </section>
    </>
  )
}