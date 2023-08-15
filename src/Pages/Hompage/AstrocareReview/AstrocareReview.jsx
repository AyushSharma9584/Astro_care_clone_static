import React from 'react'
import "./AstrocareReview.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AstrocareData } from './AstrocareData';
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

export const AstrocareReview = () => {
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
          slidesToShow: 1,
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
      <div className="part6containerdiv">

        <div className="part6container">
          <Slider {...settings}>
          {
                AstrocareData.map((el)=>{
                  return( <div className="slider_box_3">
                       <div className="slider_img_3">
                        <img src={el.image_3} alt="" />
                       </div>
                       <div className="slider_heading_3">
                        <h2>{el.heading_3}</h2>
                       </div>
                       <div className="slider_subheading_3">
                        <p>{el.subheading}</p>
                       </div>
                       <div className="desc_3">
                        <p>{el.desc_3}</p>
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
