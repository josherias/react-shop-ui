import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
  border: 5px solid #fff;
  border-radius: 5px;
  margin: 10px;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const Overlay = styled.div`
  background-color: white;
  position: absolute;
  width: 70%;
  padding: 10px 15px;
  border-radius: 0px 40px 40px 0px;
  opacity: 0.9;
  top: 10px;
`;

const OfferDiscount = styled.span`
  color: #ff4800;
  font-weight: bold;
  font-size: 13px;
`;

const OfferInfo = styled.p`
  margin: 5px 0px;
  font-weight: 500;
  color: #2b2c2c;
`;

const OfferTitle = styled.p`
  font-size: 14px;
  color: #525050;
  margin: 4px 0;
`;

const OfferBtn = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  background-color: #f35c20;
  color: white;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 2;
  white-space: nowrap;
  cursor: pointer;
`;

function OfferItem({ img, title }) {
  return (
    <Wrapper>
      <Img src={img} />
      <Overlay>
        <OfferDiscount>5% OFF</OfferDiscount>
        <OfferInfo>Buy more and save more</OfferInfo>
        <OfferTitle>{title}</OfferTitle>
      </Overlay>
      <OfferBtn>Shop Now</OfferBtn>
    </Wrapper>
  );
}

export default OfferItem;
