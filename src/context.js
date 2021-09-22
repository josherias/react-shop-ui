import React, { Component } from "react";
import {
  getProducts,
  getCategories,
  getOffers,
  getCart,
  getAdds,
  singleAdd,
  detailProduct,
} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    singleProduct: detailProduct,
    categories: [],
    offers: [],
    cart: [],
    adds: [],
    singleAdd: {},
    loading: true,
    searchQuery: "",
  };

  componentDidMount() {
    const products = getProducts();
    const categories = getCategories();
    const offers = getOffers();
    const cart = getCart();
    const adds = getAdds();
    const add = { ...singleAdd };

    this.setState({
      products,
      categories,
      offers,
      cart,
      adds,
      singleAdd: add,
    });

    this.setState({ loading: false });
  }

  getProduct = (id) => {
    const product = this.state.products.find(
      (item) => item.id === parseInt(id)
    );
    return product;
  };

  handleDetail = (id) => {
    const product = this.getProduct(id);
    this.setState({ singleProduct: product });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  getProductsData = () => {
    const { products: allProducts, searchQuery } = this.state;
    let filtered = allProducts;

    if (searchQuery) {
      filtered = allProducts.filter((p) =>
        p.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    return { filtered };
  };

  render() {
    const { filtered } = this.getProductsData();
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          productsData: filtered,
          handleSearch: this.handleSearch,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
