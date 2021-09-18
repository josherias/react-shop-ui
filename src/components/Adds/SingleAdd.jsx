import React from "react";
import styled from "styled-components";
import { singleAdd } from "../../data";

const Container = styled.div`
  width: 100%;
  margin: 50px 0px;
`;

const Img = styled.img`
  width: 100%;
`;

function SingleAdd() {
  return (
    <Container>
      <Img src={singleAdd.img} />
    </Container>
  );
}

export default SingleAdd;
