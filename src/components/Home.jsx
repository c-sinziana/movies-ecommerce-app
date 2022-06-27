import React from "react";

import Slider from "./Slider/Slider.jsx";
import Categories from "./Categories/Categories.jsx";
import ProductsList from "./ProductsList/ProductsList.jsx";
import Newsletter from "./Newsletter/Newsletter.jsx";
import Footer from "./Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Slider direction="left" />
      <Categories />
      <ProductsList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
