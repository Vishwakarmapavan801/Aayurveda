import React from "react";
import "../allcss/Home.css";

import C2 from "../assets/C2.jpg";
import C3 from "../assets/C3.jpg";
import C4 from "../assets/C4.jpg";
import C5 from "../assets/C5.jpg";

import star from "../assets/star.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.avif";

const Hero = () => {
  return (
    <>
      <h6 className="centerline">
        "नैनोटेक परिशुद्धता के साथ उन्नत प्रजनन क्षमता"
      </h6>

      <div className="home-container">
        <div className="img1">
          <img src={C2} alt="product" />
        </div>

        <div className="home-txt">
          <h1>प्राकृतिक रूप से गर्भधारण करने के लिए फर्टिलिटी फ़ॉर्मूला</h1>

          <div className="rating">
            <img src={star} alt="rating" />
            <span>(1139 Customer Reviews)</span>
          </div>

          <p>
            पुत्रवेदा द्वारा फर्टिलिटी फॉर्मूला प्रजनन प्रणाली को मजबूत करता है,
            गर्भावस्था के स्वास्थ्य को बढ़ाता है, अंडे की गुणवत्ता में सुधार करता है,
            गर्भाशय की परत का समर्थन करता है।
          </p>

          <h3 className="usage-title">उपभोग</h3>

          <div className="usage-row">
            <div className="usage-item">
              <img src={icon1} alt="icon" />
              <span>दिन में दो बार</span>
            </div>

            <div className="usage-item">
              <img src={icon2} alt="icon" />
              <span>रात के खाने के बाद 2 गोलियाँ</span>
            </div>

            <div className="usage-item">
              <img src={icon3} alt="icon" />
              <span>बेहतर परिणाम के लिए 3 महीने</span>
            </div>
          </div>

          <button className="buy-btn">Buy Now</button>
        </div>
      </div>

      <h1 className="about-heading">Nature's Purity, Science's Precision</h1>

      <div className="card-grid">
        <div className="card">
          <img src={C2} alt="Pure Nature" className="about-img" />
          <h3>Pure Nature</h3>
          <p>100% natural source ingredients</p>
        </div>

        <div className="card">
          <img src={C3} alt="Clean Process" className="about-img" />
          <h3>Clean Process</h3>
          <p>Scientifically tested process</p>
        </div>

        <div className="card">
          <img src={C4} alt="Advanced Formula" className="about-img" />
          <h3>Advanced Formula</h3>
          <p>Nano technology based boost</p>
        </div>

        <div className="card">
          <img src={C5} alt="Safe Packaging" className="about-img" />
          <h3>Safe Packaging</h3>
          <p>Protected & hygienic packing</p>
        </div>
      </div>

      <div className="card-grid">
        <div className="card info-card">
          <h3>Nature-Sourced</h3>
          <p>Ingredients directly sourced from nature.</p>
        </div>

        <div className="card info-card">
          <h3>Aqueous Extraction</h3>
          <p>Water-based clean extraction method.</p>
        </div>

        <div className="card info-card">
          <h3>Nano-Potent Boost</h3>
          <p>Enhanced absorption with nano tech.</p>
        </div>

        <div className="card info-card">
          <h3>Protected Packaging</h3>
          <p>Ensures freshness and safety.</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
