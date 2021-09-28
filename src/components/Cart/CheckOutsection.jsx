import React from "react";
import styled from "styled-components";
import { device } from "../../responsive";

const Wrapper = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  background-color: #fff;
  margin: 10px 0px;
`;

const Heading = styled.div`
  font-size: 22px;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid #e4e0e0;
  padding: 15px 10px;

  @media ${device.tablet} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 5px 14px;
  width: 100%;
`;

const Label = styled.span`
  font-size: 16px;

  @media ${device.tablet} {
    font-size: 15px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const Amount = styled.span`
  font-size: 16px;

  @media ${device.tablet} {
    font-size: 15px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const TotalLabel = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const TotalAmount = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

const CheckOutButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  text-transform: uppercase;
  background-color: #e74c1d;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #d34f26;
  }
`;

function CheckOutsection({ subTotal, shipCharges, total }) {
  return (
    <Wrapper>
      <Heading>CHECKOUT SECTION</Heading>
      <Details>
        <Label>Subtotal</Label>
        <Amount>$ &nbsp; {subTotal}</Amount>
      </Details>
      <Details>
        <Label>Shipping Charges</Label>
        <Amount>$ &nbsp; {shipCharges}</Amount>
      </Details>
      <Details>
        <TotalLabel>Total</TotalLabel>
        <TotalAmount>$ &nbsp; {total}</TotalAmount>
      </Details>
      <CheckOutButton>Checkout</CheckOutButton>
    </Wrapper>
  );
}

export default CheckOutsection;
