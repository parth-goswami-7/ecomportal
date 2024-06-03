import React from 'react' 
import HeroSection from '../components/common/HeroSection'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./../styles/Slider.scss" 
import { Carousel } from 'react-responsive-carousel';
import Features from './Features';
import img1 from "./../assets/images/Slider/image1.jpg"
import img2 from './../assets/images/Slider/image2.jpg'
import img3 from './../assets/images/Slider/image3.jpg'
import img4 from './../assets/images/Slider/image4.jpg'
//import Slider from 'react-slick';
//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';


//import img from '../assets/images/Slider/image1.png'

const Home = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // };
    return (
    <>     
        <div style={{position:"relative", zIndex:"-1"}}>
        <Carousel showThumbs={false} autoPlay={true} interval={5000} infiniteLoop={true} showStatus={false}>
                <img src={img1} alt='img1' className='mainslider'/>
                <img src={img2} alt='img2' className='mainslider'/>
                <img src={img3} alt='img3' className='mainslider'/>
                <img src={img4} alt='img4' className='mainslider'/>                
        </Carousel>           
        </div>      
        {/* <HeroSection/> */}
        <Features/>
    </>
  )
}

export default Home