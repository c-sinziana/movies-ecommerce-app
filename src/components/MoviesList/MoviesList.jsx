import React from "react";

import Announcement from "../Announcement/Announcement";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar.jsx";
import Newsletter from "../Newsletter/Newsletter";
import ProductsList from "../ProductsList/ProductsList";

const MoviesList = () => {
  return (
    <div className="container">
      <Navbar />
      <Announcement />
      <h2 className="title">Movies List</h2>
      <div className="filterContainer">
        <filterText>Filter movies:</filterText>
        <select className="select">
          <option>Horror</option>
          <option>Comedy</option>
          <option>Thriller</option>
          <option>Romance</option>
          <option>History</option>
        </select>
        <div className="filterContainer2">
          <filterText>Sort movies:</filterText>
          <select className="select">
            <option>Newest</option>
            <option>Oldest</option>
            <option>Most liked</option>
          </select>
        </div>
      </div>
      <ProductsList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default MoviesList;
