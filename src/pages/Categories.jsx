import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import CategoryComponent from "../components/Category/CategoryComponent";
import SearchComponent from "../components/common/SearchComponent";
import { categories } from "../data";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 80px;
  margin: 10px 0px;
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  border: 1px solid #f1eeee;
  align-items: center;
`;
const Heading = styled.h1`
  font-size: 22px;
  flex: 1;
`;

const CategoryList = styled.div`
  padding: 10px;
`;
function Categories() {
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Heading>Categories</Heading>
          <SearchComponent />
        </TopSection>
        <CategoryList>
          <Box>
            <Grid>
              {categories.map((category) => (
                <Grid>
                  <CategoryComponent />
                </Grid>
              ))}
            </Grid>
          </Box>
        </CategoryList>
      </Wrapper>
    </Container>
  );
}

export default Categories;
