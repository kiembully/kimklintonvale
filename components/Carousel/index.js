import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouStyle from './carousel.module.scss';

const Carousel = () => {
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
                <div className={carouStyle.itemWrap}>asd</div>
            </div>
            <div className={carouStyle.carouselItem}>
                <div className={carouStyle.itemWrap}>asd</div>
            </div>
            <div className={carouStyle.carouselItem}>
                <div className={carouStyle.itemWrap}>asd</div>
            </div>
            <div className={carouStyle.carouselItem}>
                <div className={carouStyle.itemWrap}>asd</div>
            </div>
            <div className={carouStyle.carouselItem}>
                <div className={carouStyle.itemWrap}>asd</div>
            </div>
            <div className={carouStyle.carouselItem}>
                <div className={carouStyle.itemWrap}>asd</div>
            </div>
            </Slider>
        </div>
    );
}

export default Carousel;