import React from 'react'
import "./LatestFromBlog.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LatestFromBlogData } from './LatestFromBlogData';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,display: "block",background:"black",border:"5px solid black",borderRadius:"50%",width:"40px",height:"40px",padding:"5.1px" }}
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

export const LatestFromBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      <div className="part5containerdiv">

        <div className="part5container">
          <Slider {...settings}>
          {
                LatestFromBlogData.map((el)=>{
                  return( <div className="slider_box_as">
                       <div className="slider_img_as">
                        <img src={el.image_as} alt="" />
                       </div>
                       <div className="slider_heading_as">
                        <h2>{el.heading_as}</h2>
                       </div>
                       <div className="desc_as">
                        <p>{el.desc_as}</p>
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
