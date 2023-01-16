import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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


function Carousel({filterItems}){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
      const arr = []
      const Cards = () =>{
          for(let i = 1; i < 9; i++){
              let type = ''
              i%2==0 ? type = "discount" : type = "new"
              arr.push(
                  <Card key={i} number = {i} type={type}/>
              )

          }
          return(arr)
        }

        filterItems(arr)

    return(
        <>
            <Slider {...settings}>
                {Cards()}
            </Slider>
        </>
    )
}


export {Carousel}