// import React, { useState, useEffect } from "react";
// import "../allcss/Home.css";
// import { NavLink } from "react-router-dom";
// import { FaTimes } from "react-icons/fa";

// import C2 from "../assets/C2.jpg";
// import C3 from "../assets/C3.jpg";
// import C4 from "../assets/C4.jpg";
// import C5 from "../assets/C5.jpg";
// import star from "../assets/star.png";
// import icon1 from "../assets/icon1.png";
// import icon2 from "../assets/icon2.png";
// import icon3 from "../assets/icon3.avif";

// import video1 from "../assets/video-1.mp4";





// const Hero = () => {
//   const product = { name: "फर्टिलिटी फ़ॉर्मूला", price: 999, image: C2 };

 
//  const [showVideo, setShowVideo] = useState(false);



//   return (
//     <div className="hero-page">
      
      

    
//       <h6 className="centerline">"नैनोटेक परिशुद्धता के साथ उन्नत प्रजनन क्षमता"</h6>

//       <div className="home-container">
//         <div className="img1">
//           <img src={C2} alt="main product" />
//         </div>

//         <div className="home-txt">
//           <h1>प्राकृतिक रूप से गर्भधारण करने के लिए फर्टिलिटी फ़ॉर्मूला</h1>
//           <div className="rating">
//             <img src={star} alt="star" />
//             <span>(1139 Customer Reviews)</span>
//           </div>
//           <p>
//             पुत्रवेदा द्वारा फर्टिलिटी फॉर्मूला प्रजनन प्रणाली को मजबूत करता है,
//             गर्भावस्था के स्वास्थ्य को बढ़ाता है, अंडे की गुणवत्ता में सुधार करता है।
//           </p>

//           <h3 className="usage-title">उपभोग</h3>
//           <div className="usage-row">
//             <div className="usage-item">
//               <img src={icon1} alt="twice daily" />
//               <span>दिन में दो बार</span>
//             </div>
//             <div className="usage-item">
//               <img src={icon2} alt="after dinner" />
//               <span>रात के खाने के बाद 2 गोलियाँ</span>
//             </div>
//             <div className="usage-item">
//               <img src={icon3} alt="duration" />
//               <span>बेहतर परिणाम के लिए 3 महीने</span>
//             </div>
//           </div>

//           <NavLink to="/ecommerce" state={product}>
//             <button className="buy-btn">Buy Now</button>
//           </NavLink>
//         </div>
//       </div>

//       {/* <div>
//        <video  className="video">
        
//         <source src={video1} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       </div> */}

//       <div className="video-section">
//         {
//           showVideo && (
//             <div className="video-wrapper">
//           <button 
//             className="close-btn"
//             onClick={() => setShowVideo(false)}
//           >
//             <FaTimes />
//           </button>

//           <video autoPlay muted loop className="hero-video">
//             <source src={video1} type="video/mp4" />
//           </video>
//         </div>
//           )}

        

//       </div>

     
//     </div>
//   );
// };

// export default Hero;







import React, { useState } from "react";
import "../allcss/Home.css";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";
import C4 from "../assets/C4.jpg";
import C5 from "../assets/C5.jpg";
import star from "../assets/star.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.avif";
import video1 from "../assets/video-1.mp4";

const Hero = () => {
  const product = { name: "फर्टिलिटी फ़ॉर्मूला", price: 999, image: C2 };

  // ✅ Video should show first time
  const [showVideo, setShowVideo] = useState(true);

  return (
    <div className="hero-page">

      <h6 className="centerline">
        "नैनोटेक परिशुद्धता के साथ उन्नत प्रजनन क्षमता"
      </h6>

      <div className="home-container">
        <div className="img1">
          <img src={C2} alt="main product" />
        </div>

        <div className="home-txt">
          <h1>प्राकृतिक रूप से गर्भधारण करने के लिए फर्टिलिटी फ़ॉर्मूला</h1>

          <div className="rating">
            <img src={star} alt="star" />
            <span>(1139 Customer Reviews)</span>
          </div>

          <p>
            पुत्रवेदा द्वारा फर्टिलिटी फॉर्मूला प्रजनन प्रणाली को मजबूत करता है,
            गर्भावस्था के स्वास्थ्य को बढ़ाता है, अंडे की गुणवत्ता में सुधार करता है।
          </p>

          <h3 className="usage-title">उपभोग</h3>

          <div className="usage-row">
            <div className="usage-item">
              <img src={icon1} alt="twice daily" />
              <span>दिन में दो बार</span>
            </div>

            <div className="usage-item">
              <img src={icon2} alt="after dinner" />
              <span>रात के खाने के बाद 2 गोलियाँ</span>
            </div>

            <div className="usage-item">
              <img src={icon3} alt="duration" />
              <span>बेहतर परिणाम के लिए 3 महीने</span>
            </div>
          </div>

          <NavLink to="/ecommerce" state={product}>
            <button className="buy-btn">Buy Now</button>
          </NavLink>
        </div>
      </div>

    
     {showVideo && (
  <div className="video-wrapper">
    <FaTimes
      className="close-btn"
      onClick={() => setShowVideo(false)}
    />

    <video autoPlay muted loop className="hero-video">
      <source src={video1} type="video/mp4" />
    </video>
  </div>
)}


    </div>
  );
};

export default Hero;
