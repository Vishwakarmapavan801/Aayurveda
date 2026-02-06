// import React from "react";
// import "../allcss/Product.css";

// import p1 from "../assets/p1.jpg";
// import p2 from "../assets/p2.jpg";
// import p3 from "../assets/p3.jpg";

// const Product = () => {
//   const products = [
//     {
//       img: p1,
//       name: "Herbal Product",
//       price: "₹499",
//     },
//     {
//       img: p2,
//       name: "Natural Supplement",
//       price: "₹699",
//     },
//     {
//       img: p3,
//       name: "Organic Boost",
//       price: "₹899",
//     },
//   ];

//   return (
//     <div className="product-page">
//       <h1 className="product-title">Our Products</h1>
    

//       <div className="product-grid">
//         {products.map((item, index) => (
//           <div className="product-card" key={index}>
//             <img src={item.img} alt={item.name} />
//             <h3>{item.name}</h3>
//               <p>पुरुषों के लिए 30 कैप्सूल
// महिलाओं के लिए 60 कैप्सूल
// incl. Of All Taxes
// </p>
//             <p className="price">{item.price}</p>
//             <button>Buy Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;



import React from "react";
import { useNavigate } from "react-router-dom";
import "../allcss/Product.css";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

const Product = () => {
  const navigate = useNavigate();

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

  const handleBuyNow = (product) => {
    navigate("/order", {
      state: {
        image: product.img,
        name: product.name,
        price: product.price
      }
    });
  };

  return (
    <div className="product-page">
      <h1 className="product-title">Our Products</h1>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>

            <p>
              {item.desc}<br />
              incl. of all taxes
            </p>

            <p className="price">₹ {item.price}</p>

            <button onClick={() => handleBuyNow(item)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
