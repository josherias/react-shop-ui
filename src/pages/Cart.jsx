import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CartItem from "../components/Cart/CartItem";
import CheckOutsection from "../components/Cart/CheckOutsection";
import { cart } from "../data";
import { device } from "../responsive";

const Container = styled.div`
  width: 100%;
  padding: 20px 80px;

  @media ${device.tablet} {
    padding: 20px 40px;
  }

  @media ${device.mobile} {
    padding: 20px 10px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const TopSection = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const Row1 = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0px;
  text-transform: uppercase;

  @media ${device.mobile} {
    font-size: 18px;
  }
`;
const Row2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 5px 0px;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid #e74c1d;
  cursor: pointer;
  color: #e74c1d;
  font-weight: 600;

  &:hover {
    background-color: #d34f26;
    color: #fff;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const CartCount = styled.div`
  font-size: 18px;
  margin: 5px 0px;

  @media ${device.mobile} {
    font-size: 15px;
  }
`;

const CheckOutButton = styled.button`
  margin: 5px 0px;
  padding: 10px 15px;
  text-transform: uppercase;
  background-color: #e74c1d;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d34f26;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const CartSection = styled.div`
  width: 100%;
  margin: 0px 0px;
  padding: 10px;
`;

function Cart() {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Row1>My Cart</Row1>
          <Row2>
            <Button>Continue shopping</Button>
            <CartCount>You have (2) Items in you Cart</CartCount>
            <CheckOutButton>Checkout now</CheckOutButton>
          </Row2>
        </TopSection>
        <CartSection>
          <Grid container spacing={{ xs: 1, md: 4 }}>
            <Grid item xs={12} sm={8} md={8}>
              {cart.map((item) => (
                <CartItem img={item.img} title={item.title} key={item.id} />
              ))}
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CheckOutsection />
            </Grid>
          </Grid>
        </CartSection>
      </Wrapper>
    </Container>
  );
}

export default Cart;
