// import React, { useState } from "react";
// import "../allcss/Ecommerce.css";

// import pump from "../assets/pump.jpeg";
// import pump1 from "../assets/pump1.jpeg";
// import pump2 from "../assets/pump2.jpeg";
// import pppp from "../assets/pppp.jpeg";
// import combo from "../assets/combo.png";
// import combo2 from "../assets/combo2.png";
// import combo1 from "../assets/combo1.png";

// const Ecommerce = () => {
//   const [activeImage, setActiveImage] = useState(pump1);

//   return (
//     <div className="ec-container">
//       {/* CARD 1 */}
//       <div className="ec-card">
//         <div className="ec-image-box">
//           <img src={activeImage} alt="pump" className="ec-main-image" />

//           <div className="ec-thumbnails">
//             <img src={pump1} onClick={() => setActiveImage(pump1)} />
//             <img src={pump2} onClick={() => setActiveImage(pump2)} />
//             <img src={pump} onClick={() => setActiveImage(pump)} />
//           </div>
//         </div>

//         <div className="ec-info">
//           <h3 className="ec-title">Water Pump</h3>
//           <p className="ec-desc">
//             High efficiency • Low noise • 1 Year Warranty
//           </p>
//           <p className="ec-price">₹ 1299</p>
//           <button className="ec-btn">Buy Now</button>
//         </div>
//       </div>

//       {/* CARD 2 */}
//       <div className="ec-card">
//         <div className="ec-image-box">
//           <img src={pppp} alt="single pump" className="ec-main-image" />
//         </div>

//         <div className="ec-info">
//           <h3 className="ec-title">Single Pump</h3>
//           <p className="ec-desc">
//             Durable body • Easy install • Long life motor
//           </p>
//           <p className="ec-price">₹ 999</p>
//           <button className="ec-btn">Buy Now</button>
//         </div>
//       </div>

//       {/* CARD 3 */}
//       <div className="ec-card">
//         <div className="ec-image-box">
//           <img src={combo} alt="combo pack" className="ec-main-image" />
//         </div>

//         <div className="ec-info">
//           <h3 className="ec-title">Combo Pack</h3>
//           <p className="ec-desc">
//             Pump + Pipe • Best for home use
//           </p>
//           <p className="ec-price">₹ 1999</p>
//           <button className="ec-btn">Buy Now</button>
//         </div>
//       </div>

//       {/* CARD 4 */}
//       <div className="ec-card">
//         <div className="ec-image-box">
//           <img src={combo2} alt="advanced combo" className="ec-main-image" />
//         </div>

//         <div className="ec-info">
//           <h3 className="ec-title">Advanced Combo</h3>
//           <p className="ec-desc">
//             Heavy duty • High water flow
//           </p>
//           <p className="ec-price">₹ 2499</p>
//           <button className="ec-btn">Buy Now</button>
//         </div>
//       </div>

//       {/* CARD 5 */}
//       <div className="ec-card">
//         <div className="ec-image-box">
//           <img src={combo1} alt="mini combo" className="ec-main-image" />
//         </div>

//         <div className="ec-info">
//           <h3 className="ec-title">Mini Combo</h3>
//           <p className="ec-desc">
//             Compact • Low power • Ideal for small homes
//           </p>
//           <p className="ec-price">₹ 1599</p>
//           <button className="ec-btn">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ecommerce;








import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../allcss/Ecommerce.css";

import pump from "../assets/pump.jpeg";
import pump1 from "../assets/pump1.jpeg";
import pump2 from "../assets/pump2.jpeg";
import pppp from "../assets/pppp.jpeg";
import combo from "../assets/combo.png";
import combo1 from "../assets/combo1.png";
import combo2 from "../assets/combo2.png";

const Ecommerce = () => {
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(pump1);

  const orderNow = (product) => {
    navigate("/order", { state: product });
  };

  return (
    <div className="ec-container">

      {/* PRODUCT 1 */}
      <div className="ec-card">
        <div className="ec-image-box">
          <img src={activeImage} className="ec-main-image" />
          <div className="ec-thumbnails">
            <img src={pump1} onClick={() => setActiveImage(pump1)} />
            <img src={pump2} onClick={() => setActiveImage(pump2)} />
            <img src={pump} onClick={() => setActiveImage(pump)} />
          </div>
        </div>

        <div className="ec-info">
          <h3>Water Pump</h3>
          <p className="ec-desc">High efficiency • Low noise • 1 Year Warranty</p>
          <p className="ec-price">₹1299</p>
          <button
            className="ec-btn"
            onClick={() =>
              orderNow({
                name: "Water Pump",
                price: 1299,
                image: activeImage,
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* PRODUCT 2 */}
      <div className="ec-card">
        <div className="ec-image-box">
          <img src={pppp} className="ec-main-image" />
        </div>
        <div className="ec-info">
          <h3>Single Pump</h3>
          <p className="ec-desc">Durable • Easy install • Long life</p>
          <p className="ec-price">₹999</p>
          <button
            className="ec-btn"
            onClick={() =>
              orderNow({
                name: "Single Pump",
                price: 999,
                image: pppp,
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* PRODUCT 3 */}
      <div className="ec-card">
        <div className="ec-image-box">
          <img src={combo} className="ec-main-image" />
        </div>
        <div className="ec-info">
          <h3>Combo Pack</h3>
          <p className="ec-desc">Pump + Pipe • Best for homes</p>
          <p className="ec-price">₹1999</p>
          <button
            className="ec-btn"
            onClick={() =>
              orderNow({
                name: "Combo Pack",
                price: 1999,
                image: combo,
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* PRODUCT 4 */}
      <div className="ec-card">
        <div className="ec-image-box">
          <img src={combo2} className="ec-main-image" />
        </div>
        <div className="ec-info">
          <h3>Advanced Combo</h3>
          <p className="ec-desc">Heavy duty • High flow</p>
          <p className="ec-price">₹2499</p>
          <button
            className="ec-btn"
            onClick={() =>
              orderNow({
                name: "Advanced Combo",
                price: 2499,
                image: combo2,
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* PRODUCT 5 */}
      <div className="ec-card">
        <div className="ec-image-box">
          <img src={combo1} className="ec-main-image" />
        </div>
        <div className="ec-info">
          <h3>Mini Combo</h3>
          <p className="ec-desc">Compact • Low power</p>
          <p className="ec-price">₹1599</p>
          <button
            className="ec-btn"
            onClick={() =>
              orderNow({
                name: "Mini Combo",
                price: 1599,
                image: combo1,
              })
            }
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
