import React from "react";
import styled from "styled-components";
import AddItem from "./AddItem";
import { adds } from "../../data";
import { Grid } from "@mui/material";

const Container = styled.div`
  margin: 50px 0;
  width: 100%;
  padding: 0px 10px;
`;

function Adds() {
  return (
    <Container>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {adds.map((add) => (
          <Grid item xs={12} sm={6} md={4} key={add.id}>
            <AddItem img={add.img} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Adds;
