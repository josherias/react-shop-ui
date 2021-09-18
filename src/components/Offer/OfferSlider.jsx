import React from "react";
import { offers } from "../../data";
import OfferItem from "./OfferItem";
import SliderComponent from "../common/Slider";

function OfferSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    loop: true,

    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <SliderComponent settings={settings}>
      {offers.map((offer) => (
        <OfferItem key={offer.id} img={offer.img} title={offer.title} />
      ))}
    </SliderComponent>
  );
}

export default OfferSlider;
