import React from "react";
import styled from "styled-components";
import { device } from "../../responsive";

const Container = styled.div`
  padding: 0px 100px;
  @media ${device.tablet} {
    padding: 60px;
  }

  @media ${device.mobile} {
    padding: 5px;
  }
`;

function ContainerComponent({ children }) {
  return <Container>{children}</Container>;
}

export default ContainerComponent;
