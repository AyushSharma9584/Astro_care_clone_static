import React from 'react'
import "./OurAstrologer.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { OurAstrologerdata } from './OurAstrologerdata';
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
      style={{ ...style, display: "block",background:"black",border:"5px solid black",borderRadius:"50%",width:"40px",height:"40px",padding:"5.1px" }}
      onClick={onClick}
    />
  );
}

export const OurAstrologer = () => {
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
      <div className="part7containerdiv">

        <div className="part7container">
          <Slider {...settings}>
          {
                OurAstrologerdata.map((el)=>{
                  return( <div className="slider_box_7">
                       <div className="slider_img_7">
                        <img src={el.image_7} alt="" />
                       </div>
                       <div className="slider_heading_7">
                        <h2>{el.heading_7}</h2>
                       </div>
                       <div className="desc_7">
                        <p>{el.desc_7}</p>
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
