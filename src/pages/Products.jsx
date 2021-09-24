import { useContext } from "react";
import styled from "styled-components";
import ProductsList from "../components/Product/ProductsList";
import SideBar from "../components/SideBar/SideBar";
import { ProductContext } from "../context";
import Grid from "@mui/material/Grid";
import { device } from "../responsive";
import PaginationComponent from "../components/common/PaginationComponent";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 80px;
  margin: 20px 0px;

  @media ${device.tablet} {
    padding: 0px 30px;
  }

  @media ${device.mobile} {
    padding: 0px 10px;
  }
`;

function Products() {
  const context = useContext(ProductContext);
  const {
    loading,
    productsData,
    searchQuery,
    handleSearch,
    onCategorySelect,
    selectedCategory,
    priceValue,
    onPriceChange,
    minPrice,
    maxPrice,
    currentPage,
    onPageChange,
    pageSize,
    itemsCount,
  } = context;
  return (
    <Container>
      <Grid container spacing={{ xs: 1, md: 1 }}>
        <Grid item xs={12} sm={4} md={3}>
          <SideBar
            onItemSelect={onCategorySelect}
            selectedItem={selectedCategory}
            priceValue={priceValue}
            onPriceChange={onPriceChange}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <ProductsList
            loading={loading}
            productsData={productsData}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          />
          <PaginationComponent
            onPageChange={onPageChange}
            pageSize={pageSize}
            currentPage={currentPage}
            itemsCount={itemsCount}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Products;
