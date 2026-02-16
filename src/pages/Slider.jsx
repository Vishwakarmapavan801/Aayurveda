import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../allcss/Slider.css";

import pump from "../assets/pump.jpeg";
import b1 from "../assets/b1.png";
import b3 from "../assets/b3.png";
// import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";

export default function SimpleSlider() {
  const navigate = useNavigate();

  const orderNow = (product) => {
    navigate("/order", { state: product });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        
        <img src={pump} alt="pump" className="spump" />
        <button
          className="spump-btn"
          onClick={() =>
            orderNow({ name: "Penis Pump", price: 2499, image: pump })
          }
        >
          Buy now
        </button>
      </div>

      <div>
      
        <img src={b1} alt="b1" className="s1" />
        <button
          className="b1-btn"
          onClick={() =>
            orderNow({ name: "Aayurveda Capsule", price: 1499, image: b1 })
          }
        >
          Buy now
        </button>
      </div>

      <div>
       
        <img src={b3} alt="b3" className="s2" />
        <button
          className="b2-btn"
          onClick={() =>
            orderNow({ name: "Combo Pack Capsule  Man or WoMan", price: 1999, image: b3 })
          }
        >
          Buy now
        </button>
      </div>

      {/* <div>
     
        <img src={b4} alt="b4" className="s3" />
        <button
          className="b3-btn"
          onClick={() =>
            orderNow({ name: "Energy Formula", price: 1699, image: b4 })
          }
        >
          Buy now
        </button>
      </div> */}

      <div>
        
        <img src={b5} alt="b5" className="s4" />
        <button
          className="b4-btn"
          onClick={() =>
            orderNow({ name: "Pump + Capsule", price: 2499, image: b5 })
          }
        >
          Buy now
        </button>
      </div>
    </Slider>
  );
}
