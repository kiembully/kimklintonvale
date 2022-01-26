import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouStyle from './carousel.module.scss';
import Image from 'next/image';

// img 
import fiveWriter from '../../public/projects/five-writer.png'
import cheapestessayNext from '../../public/projects/cheapestessay.png'
import cheapestessayAngu from '../../public/projects/cheapestessay-angular.jpg'

// mui 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const projects = [
    {
      name: 'Cheapestessay',
      url: 'https://cheapestessay-next-dev-kim.vercel.app/',
      thumbnail: '../../public/projects/cheapestessay.png',
      framework: 'NextJs',
      status: 'Ongoing'
    },
    {
      name: 'Five Writer',
      url: 'https://five-writer.vercel.app/',
      thumbnail: '../../public/projects/five-writer.png',
      framework: 'NextJs',
      status: 'Ongoing'
    },
    {
      name: 'Cheapestessay',
      url: 'https://cheapest-essay-1c1d1.web.app/',
      thumbnail: '../../public/projects/five-writer.png',
      framework: 'Angular',
      status: 'Ongoing'
    },
  ]

const Carousel = (props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        loop: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                }
            }
        ]
    };
    
    return (
        <div className={carouStyle.carouOuter}>
            <Slider {...settings}>
            <div className={carouStyle.carouselItem}>
                <div className={carouStyle.itemWrap}>
                    <Image className={carouStyle.thumbnail} src={fiveWriter} width={320} height={200} alt='Five Writer Thumbnail' />
                </div>
            </div>
            <div className={carouStyle.carouselItem}>
                <div className={carouStyle.itemWrap}>
                    <Image className={carouStyle.thumbnail} src={cheapestessayNext} width={320} height={200} alt='Five Writer Thumbnail' />
                </div>
            </div>
            <div className={carouStyle.carouselItem}>
                <div className={carouStyle.itemWrap}>
                    <Image className={carouStyle.thumbnail} src={cheapestessayAngu} width={320} height={200} alt='Five Writer Thumbnail' />
                </div>
            </div>
            </Slider>
        </div>
    );
}

export default Carousel;