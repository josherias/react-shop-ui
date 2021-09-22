import React from "react";
import styled from "styled-components";

import { ProductContext } from "../../context";
import { useContext } from "react";

const Container = styled.div`
  width: 100%;
  margin: 50px 0px;
`;

const Img = styled.img`
  width: 100%;
`;

function SingleAdd() {
  const context = useContext(ProductContext);
  const { singleAdd } = context;
  return (
    <Container>
      <Img src={singleAdd.img} />
    </Container>
  );
}

export default SingleAdd;
