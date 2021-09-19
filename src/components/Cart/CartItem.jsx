import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  padding: 20px 10px;
  margin: 10px 0px;
`;

const Img = styled.img`
  width: 80%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  margin: 10px 0px;
  width: 100%;
`;

const NewPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  margin: 10px 0px;
`;

const OldPrice = styled.div`
  font-size: 12px;
  color: grey;
  text-decoration: line-through;
  width: 100%;
`;

const QuantityBtns = styled.div`
  display: flex;
`;

function CartItem({ img, title }) {
  return (
    <Wrapper>
      <Grid container spacing={{ xs: 1, md: 1 }}>
        <Grid item xs={12} md={4}>
          <Img src={img} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Details>
            <Title>{title}</Title>
            <NewPrice>$1000000</NewPrice>
            <OldPrice>$20000000</OldPrice>
            <QuantityBtns>Qty btn</QuantityBtns>
          </Details>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default CartItem;
