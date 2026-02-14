import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../allcss/Ecommerce.css";
import "../allcss/Product.css";


import pump from "../assets/pump.jpeg";
import pump1 from "../assets/pump1.jpeg";
import pump2 from "../assets/pump2.jpeg";
import b1 from "../assets/b1.png";
import b4 from "../assets/b4.png";
import b3 from "../assets/b3.png";
import b5 from "../assets/b5.png";


import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

const AllProducts = () => {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(pump1);

  const orderNow = (product) => {
    navigate("/order", { state: product });
  };

  const products = [
    {
      img: p1,
      name: "Herbal Product",
      price: 499,
      desc: "पुरुषों के लिए 30 कैप्सूल, महिलाओं के लिए 60 कैप्सूल"
    },
    {
      img: p2,
      name: "Natural Supplement",
      price: 699,
      desc: "Energy & immunity booster"
    },
    {
      img: p3,
      name: "Organic Boost",
      price: 899,
      desc: "100% organic health support"
    },
  ];

  return (
    <>


      <div className="ec-container">

        <div className="ec-card">
          <div className="ec-image-box">
            <img src={activeImage} className="ec-main-image" alt="Water Pump" />
            <div className="ec-thumbnails">
              <img src={pump1} onClick={() => setActiveImage(pump1)} alt="" />
              <img src={pump2} onClick={() => setActiveImage(pump2)} alt="" />
              <img src={pump} onClick={() => setActiveImage(pump)} alt="" />
            </div>
          </div>

          <div className="ec-info">
            <h3>Ling vardhak vacuum pump </h3>
            <p className="ec-desc" >Ling vardha vacuum pump ke fayde
              <br />
              1 ling ka size 7 se 8 inch badhta hai
              <br />
              2 sex timing 25 se 30 minut hota Hai
              <br />
              3 swapnadosh band hota Hai ling mein achcha tanav aata Hai
              <br />
              4 result mein dekhna chalu hota hai</p>
            <p className="ec-price">₹1499</p>
            <button
              className="ec-btn"
              onClick={() =>
                orderNow({
                  name: "Ling vardhak vacuum pump",
                  price: 1499,
                  image: activeImage,
                })
              }
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="ec-card">
          <div className="ec-image-box">
            <img src={b1} className="ec-main-image" alt="Single Pump" />
          </div>
          <div className="ec-info">
            <h3>Aayurveda Capsule for Man</h3>
            <p className="ec-desc">Durable • Easy install • Long life</p>
            <p className="ec-price">₹1499</p>
            <button
              className="ec-btn"
              onClick={() =>
                orderNow({
                  name: "Aayurveda Capsule for Man",
                  price: 1499,
                  image: b1,
                })
              }
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="ec-card">
          <div className="ec-image-box">
            <img src={b4} className="ec-main-image" alt="Combo Pack" />
          </div>
          <div className="ec-info">
            <h3>Aayurveda Capsule for woman</h3>
            <p className="ec-desc">this capsule only for woman</p>
            <p className="ec-price">₹1999</p>
            <button
              className="ec-btn"
              onClick={() =>
                orderNow({
                  name: "Aayurveda Capsule for woman",
                  price: 1999,
                  image: b4,
                })
              }
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="ec-card">
          <div className="ec-image-box">
            <img src={b5} className="ec-main-image" alt="Advanced Combo" />
          </div>
          <div className="ec-info">
            <h3>Pump + Aayurveda Combo Capsule</h3>
            <p className="ec-desc">Heavy duty • High flow</p>
            <p className="ec-price">₹2499</p>
            <button
              className="ec-btn"
              onClick={() =>
                orderNow({
                  name: "Pump + Aayurveda Combo Capsule",
                  price: 2499,
                  image: b5,
                })
              }
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="ec-card">
          <div className="ec-image-box">
            <img src={b3} className="ec-main-image" alt="Mini Combo" />
          </div>
          <div className="ec-info">
            <h3>Aayurveda Combo Capsule Man or Woman</h3>
            <p className="ec-desc">Compact • Low power</p>
            <p className="ec-price">₹1999</p>
            <button
              className="ec-btn"
              onClick={() =>
                orderNow({
                  name: "Aayurveda Combo Capsule Man or Woman",
                  price: 1999,
                  image: b3,
                })
              }
            >
              Buy Now
            </button>
          </div>
        </div>

      </div>



      
      
    </>
  );
};

export default AllProducts;
