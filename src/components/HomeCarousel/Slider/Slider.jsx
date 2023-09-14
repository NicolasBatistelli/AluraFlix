import React from "react";
import Slider from "react-slick";
import "../Slider/slick.css"; 
import "../Slider/slick-theme.scss";
import data from '../../../mock.json'
import MovieCard from '../VideoCard/VideoCard'

export const ResponsiveSlider = () => {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        <div>
          <Slider {...settings}>
            {data.map((movie) => <MovieCard movie={movie}/>)}
          </Slider>
        </div>
      );
    }