import React from 'react'
import Slider  from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { data } from '../Data/Data';
import './Slidebar.module.css';

const Slidebar=()=> {
    const settings = {
        dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <div className='box pl-10 pr-20 mx-4'>
        <Slider {...settings}>
        
          {data.map((item)=>(
            <div className='card p-2 m-4' >
                <div className='top'>
                {/* <img className='card-box bg-blend-color-dodge' style = {{
                    height : "12rem", width : "30rem"
                    }} /> */}
                <div className='flex justify-center text-center w-30 h-40 bg-gradient-to-r from-sky-900 to-pink-300'>
                    <h1 className='pt-11 decoration-teal-800 font-bold text-3xl'>{item.title}</h1>
                </div>
                </div>
                {/* <div className='bottom'>
                    <h3>{item.sign}</h3>
                </div> */}
            </div>
          ))}
        </Slider>  
    </div>
  )
}

export default Slidebar

