import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { device } from "../../responsive";

const Wrapper = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  padding: 20px 10px;
  margin: 10px 0px;
  background-color: #fff;

  @media ${device.mobile} {
    text-align: center;
  }
`;

const Img = styled.img`
  width: 80%;

  @media ${device.mobile} {
    width: 70%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  font-size: 23px;
  margin: 10px 0px;
  width: 100%;

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

const NewPrice = styled.div`
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  margin: 10px 0px;
  color: #ec4918;
`;

const OldPrice = styled.div`
  font-size: 16px;
  color: grey;
  text-decoration: line-through;
  margin: 10px 0px;
  width: 100%;
`;

const QuantityBtns = styled.div`
  display: flex;
  margin: 10px 0px;
  width: 100%;

  @media ${device.mobile} {
    align-items: center;
    justify-content: center;
  }
`;

const QtyButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #ec4918;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #d34f26;
  }
`;

const QtyLabel = styled.span`
  padding: 5px 12px;
  border: none;
  background-color: #e9e7e7;
  margin: 0px 3px;
`;

function CartItem({ img, title }) {
  return (
    <Wrapper>
      <Grid container spacing={{ xs: 1, md: 1 }}>
        <Grid item xs={12} sm={4} md={4}>
          <Img src={img} />
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <Details>
            <Title>{title}</Title>
            <NewPrice>$1000000</NewPrice>
            <OldPrice>$20000000</OldPrice>
            <QuantityBtns>
              <QtyButton>+</QtyButton>
              <QtyLabel>1</QtyLabel>
              <QtyButton>-</QtyButton>
            </QuantityBtns>
          </Details>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default CartItem;
