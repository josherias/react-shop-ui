import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";
import CategoryComponent from "../components/Category/CategoryComponent";
import SearchComponent from "../components/common/SearchComponent";
import { device } from "../responsive";
import { ProductContext } from "../context";
import { useContext } from "react";
import Loading from "../components/common/Loading";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 80px;
  margin: 10px 0px;

  @media ${device.tablet} {
    padding: 10px 40px;
  }

  @media ${device.mobile} {
    padding: 10px 10px;
  }
`;

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  border: 1px solid #f1eeee;
  align-items: center;
  flex-direction: column;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;
const Heading = styled.h1`
  font-size: 20px;
  margin-bottom: 15px;
  text-transform: uppercase;
  flex: 1;
`;

const CategoryList = styled.div`
  padding: 20px 10px;
`;

function Categories() {
  const context = useContext(ProductContext);
  const { categories: categoriesData, loading } = context;

  const categories = categoriesData.filter((c) => c.id);
  return (
    <Container>
      <Wrapper>
        <TopSection>
          <Heading>All Categories</Heading>
        </TopSection>
        {loading ? (
          <Loading />
        ) : (
          <CategoryList>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 1, lg: 1 }}
                columns={{ xs: 1, sm: 8, md: 12 }}
              >
                {categories.map((category) => (
                  <Grid item xs={2} sm={4} md={4} key={category.id}>
                    <CategoryComponent
                      img={category.img}
                      title={category.title}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </CategoryList>
        )}
      </Wrapper>
    </Container>
  );
}

export default Categories;
