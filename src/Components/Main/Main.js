import React from "react";
import Hero from "../Hero/Hero";
import FilteredProducts from "../FilteredProducts/FilteredProducts";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="px-6">
      <Hero />
      <FilteredProducts />
      <Footer />
    </div>
  );
};

export default Main;
