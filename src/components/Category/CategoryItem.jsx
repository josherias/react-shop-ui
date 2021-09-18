import React from "react";
import styled from "styled-components";
import { device } from "../../responsive";

const Wrapper = styled.div`
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  @media ${device.mobile} {
    padding: 20px;
  }
`;

const Img = styled.img`
  width: 60px;
  margin-bottom: 10px;

  @media ${device.mobile} {
    width: 30%;
    margin-bottom: 20px;
  }
`;

const Title = styled.span`
  font-size: 14px;
  white-space: nowrap;
`;

function CategoryItem({ img, title }) {
  return (
    <Wrapper>
      <Img src={img} />
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default CategoryItem;
