import styled from "styled-components";
import SortComponent from "../common/SortComponent";
import ProductItem from "./ProductItem";
import SearchComponent from "../common/SearchComponent";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Loading from "../common/Loading";

const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const TopSection = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1eeee;
`;

const Title = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
`;

const SortWrapper = styled.div``;

const SecondSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid #f1eeee;
`;

const List = styled.div`
  padding: 10px 0px;
`;

function ProductsList({ loading, productsData, searchQuery, handleSearch }) {
  return (
    <Wrapper>
      <TopSection>
        <Title>products</Title>
        <SortWrapper>
          <SortComponent />
        </SortWrapper>
      </TopSection>
      <SecondSection>
        <SearchComponent value={searchQuery} onChange={handleSearch} />
      </SecondSection>
      <List>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {loading ? (
              <Loading />
            ) : (
              productsData.map((product) => (
                <Grid item xs={2} sm={4} md={4} key={product.id}>
                  <ProductItem
                    img={product.img}
                    title={product.title}
                    id={product.id}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    inCart={product.inCart}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </List>
    </Wrapper>
  );
}

export default ProductsList;
