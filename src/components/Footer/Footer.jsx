import React from "react";
import styled from "styled-components";
import FooterRow1 from "./FooterRow1";
import FooterRow2 from "./FooterRow2";

const Container = styled.div`
  margin-top: 80px;
`;

function Footer() {
  return (
    <Container>
      <FooterRow1 />
      <FooterRow2 />
    </Container>
  );
}

export default Footer;
