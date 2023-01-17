import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { Card } from './Card/Card';

function NextArrow(props){
    const { className, style, onClick} = props;
    return(
        <div className="arr-right"  onClick={onClick} />
    )
}
function PrevArrow(props){
    const { className, style, onClick} = props;
    return(
        <div className="arr-left"  onClick={onClick} />
    )
}


function Carousel(props){
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

    return(
        <>
            <Slider {...settings}>
                {props.base.map((el, index) => <Card key={index} info={el}/>)}
            </Slider>
        </>
    )
}


export {Carousel}