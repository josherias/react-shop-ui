import React from "react";
import styled from "styled-components";
import { device } from "../../responsive";
import SliderComponent from "../common/Slider";
import ProductItem from "./ProductItem";

import { ProductContext } from "../../context";
import { useContext } from "react";

const Title = styled.h3`
  font-size: 20px;
  color: #04253a;
  margin-top: 40px;
  margin-bottom: 20px;

  @media ${device.mobile} {
    margin-top: 20px;
  }
`;

function NewProductSlider() {
  const context = useContext(ProductContext);
  const { products } = context;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    loop: true,
    nav: false,

    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          nav: false,
        },
      },
    ],
  };

  return (
    <>
      <Title>New Products</Title>
      <SliderComponent settings={settings}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            img={product.img}
            title={product.title}
            id={product.id}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </SliderComponent>
    </>
  );
}

export default NewProductSlider;
