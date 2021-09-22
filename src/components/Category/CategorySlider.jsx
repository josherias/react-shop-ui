import SliderComponent from "../common/Slider";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { device } from "../../responsive";
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

function CategorySlider() {
  const context = useContext(ProductContext);
  const { categories } = context;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    loop: true,
    nav: false,

    autoplay: true,
    autoplaySpeed: 2000,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <Title>Categories</Title>
      <SliderComponent settings={settings}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            img={category.img}
            title={category.title}
          />
        ))}
      </SliderComponent>
    </>
  );
}

export default CategorySlider;
