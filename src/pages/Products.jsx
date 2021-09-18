import React from "react";
import styled from "styled-components";
import ProductsList from "../components/Product/ProductsList";
import SideBar from "../components/SideBar/SideBar";
import { device } from "../responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 80px;
  margin: 20px 0px;
  flex-wrap: wrap;

  @media ${device.tablet} {
    padding: 0px 50px;
  }

  @media ${device.mobile} {
    padding: 0px 10px;
  }
`;

function Products() {
  return (
    <Container>
      <SideBar />
      <ProductsList />
    </Container>
  );
}

export default Products;
