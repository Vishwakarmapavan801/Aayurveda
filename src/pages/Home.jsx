



import React from "react";
import Hero from "./Hero";
import Product from "./Product";
// import  Ecommerce from './Ecommerce'
import About from "./About";


import Contact from "./Contact";


const Home = () => {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>


         <section id="product">
        <Product />
      </section>


       {/* <section id="Ecommerce">
        <Ecommerce />
      </section> */}

      <section id="about">
        <About />
      </section>

   

          

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
