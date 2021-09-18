import React from "react";
import styled from "styled-components";
import AddItem from "./AddItem";
import { adds } from "../../data";

const Container = styled.div`
  display: flex;
  margin: 50px 0;
  flex-wrap: wrap;
  width: 100%;
`;

function Adds() {
  return (
    <Container>
      {adds.map((add) => (
        <AddItem key={add.id} img={add.img} />
      ))}
    </Container>
  );
}

export default Adds;
