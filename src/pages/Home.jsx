import React from "react";
import CategorySlider from "../components/Category/CategorySlider";

import OfferSlider from "../components/Offer/OfferSlider";
import ContainerComponent from "../components/common/ContainerComponent ";
import ProductSlider from "../components/Product/ProductSlider";
import Adds from "../components/Adds/Adds";
import NewProductSlider from "../components/Product/NewProductSlider";
import SingleAdd from "../components/Adds/SingleAdd";
import PopularProducts from "../components/Product/PopularProducts";

function Home() {
  return (
    <>
      <OfferSlider />
      <ContainerComponent>
        <CategorySlider />
        <ProductSlider />
        <Adds />
        <NewProductSlider />
        <SingleAdd />
        <PopularProducts />
      </ContainerComponent>
    </>
  );
}

export default Home;
