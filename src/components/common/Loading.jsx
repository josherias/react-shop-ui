import React from "react";
import loading from "../../images/loading.gif";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Img = styled.img``;

function Loading() {
  return (
    <Wrapper>
      <Img src={loading} />
    </Wrapper>
  );
}

export default Loading;
