import React from 'react'
import "./Homepart1slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Astrosliderdata } from './Astrosliderdata';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background:"black",border:"5px solid black",borderRadius:"50%",width:"40px",height:"40px",padding:"5.1px" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display: "block",background:"black",border:"5px solid black",borderRadius:"50%",width:"40px",height:"40px",padding:"5.1px" }}

      onClick={onClick}
    />
  );
}

export const AstroservicesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }
    
     
    ]


  };
  return (
    <div>
      <div className="part2containerdiv">

        <div className="part2container">
          <Slider {...settings}>
          {
                Astrosliderdata.map((el)=>{
                  return( <div className="slider_box">
                       <div className="slider_img">
                        <img src={el.image} alt="" />
                       </div>
                       <div className="slider_heading">
                        <h2>{el.heading}</h2>
                       </div>
                       <div className="desc">
                        <p>{el.desc}</p>
                       </div>

                   </div>)
                })
            }

          </Slider>

        </div>
      </div>

    </div>
  )
}
