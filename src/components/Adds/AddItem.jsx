import React from "react";
import styled from "styled-components";
import { device } from "../../responsive";

const Wrapper = styled.div`
  /* @media ${device.tablet} {
    flex: unset;
    width: 100%;
  } */
`;
const Img = styled.img`
  width: 100%;
`;

function AddItem({ img }) {
  return (
    <Wrapper>
      <Img src={img} />
    </Wrapper>
  );
}

export default AddItem;
