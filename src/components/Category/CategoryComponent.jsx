import React from "react";
import styled from "styled-components";

const Details = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  visibility: hidden;
`;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  padding: 20px 0px;
  height: 300px;
  transition: all 300ms ease-in;
  cursor: pointer;

  &:hover ${Details} {
    visibility: visible;
  }
`;

const Img = styled.img`
  width: 40%;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: transparent;
  padding: 10px 20px;
  border: 1px solid grey;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;

function CategoryComponent({ img, title }) {
  return (
    <Wrapper>
      <Img src={img} />
      <Details>
        <Title>{title}</Title>
        <Button>Shop Products</Button>
      </Details>
    </Wrapper>
  );
}

export default CategoryComponent;
