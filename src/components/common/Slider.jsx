import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  width: 100%;
  margin: 10px 0px;
`;

function SliderComponent({ settings, children }) {
  return (
    <Container>
      <Slider {...settings}>{children}</Slider>
    </Container>
  );
}

export default SliderComponent;
