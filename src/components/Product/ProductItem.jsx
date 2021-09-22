import { AddShoppingCart, FavoriteBorder } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../responsive";
import { ProductContext } from "../../context";

const Img = styled.img`
  width: 70%;
  margin-bottom: 10px;
  transition: all 1s ease;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background-color: #fff;
  margin: 10px;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover ${Img} {
    transform: scale(1.2);
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Details = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const StockLabel = styled.span`
  color: #767976;
  font-size: small;
  margin-bottom: 8px;
`;

const Title = styled.h3`
  color: #02233a;
  margin-bottom: 8px;

  @media ${device.tablet} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const PriceGroup = styled.div`
  display: flex;
`;

const NewPrice = styled.span`
  color: #ff6600;
  font-weight: bold;
  margin: 0px 8px;
`;

const OldPrice = styled.span`
  color: #5c5b5a;
  font-weight: bold;
  text-decoration: line-through;
`;

const OfferLabel = styled.span`
  background-color: #e23b08;
  color: #fff;
  font-size: x-small;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 3px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const WishListIcon = styled.span`
  padding: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5d0b8;
  color: #f0540c;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.5s ease;
  font-size: 10px;

  &:hover {
    color: #f5d0b8;
    background-color: #f0540c;
  }
`;

const CartIcon = styled.span`
  color: #afaeac;
  position: absolute;
  bottom: 10px;
  right: 10px;

  &:hover {
    color: #f0540c;
  }
`;

function ProductItem({ img, title, id, price, oldPrice }) {
  const context = useContext(ProductContext);

  const { handleDetail } = context;

  return (
    <Link
      to={"/product/" + title}
      style={{ textDecoration: "none" }}
      onClick={() => handleDetail(id)}
    >
      <Wrapper>
        <ImgContainer>
          <Img src={img} />
        </ImgContainer>
        <Details>
          <StockLabel>Available (In Stock)</StockLabel>
          <Title>{title}</Title>
          <PriceGroup>
            <NewPrice>${price}</NewPrice>
            <OldPrice>${oldPrice}</OldPrice>
          </PriceGroup>
        </Details>
        <OfferLabel>6% OFF</OfferLabel>
        <WishListIcon>
          <FavoriteBorder />
        </WishListIcon>
        <CartIcon>
          <AddShoppingCart />
        </CartIcon>
      </Wrapper>
    </Link>
  );
}

export default ProductItem;
