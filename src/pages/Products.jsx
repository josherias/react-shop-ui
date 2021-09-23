import { useContext } from "react";
import styled from "styled-components";
import ProductsList from "../components/Product/ProductsList";
import SideBar from "../components/SideBar/SideBar";
import { ProductContext } from "../context";
import { device } from "../responsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 80px;
  margin: 20px 0px;
  flex-wrap: wrap;

  @media ${device.tablet} {
    padding: 0px 50px;
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
  } = context;
  return (
    <Container>
      <SideBar
        onItemSelect={onCategorySelect}
        selectedItem={selectedCategory}
        priceValue={priceValue}
        onPriceChange={onPriceChange}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
      <ProductsList
        loading={loading}
        productsData={productsData}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
    </Container>
  );
}

export default Products;
