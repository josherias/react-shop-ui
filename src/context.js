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
    selectedCategory: null,
    priceValue: 0,
    minPrice: 0,
    maxPrice: 0,
  };

  componentDidMount() {
    const products = getProducts();
    const categoriesData = getCategories();

    const categories = [
      { id: "", key: 0, title: "All Categories" },
      ...categoriesData,
    ];

    const offers = getOffers();
    const cart = getCart();
    const adds = getAdds();
    const add = { ...singleAdd };

    let maxPrice = Math.max(...products.map((p) => p.price));
    let minPrice = Math.min(...products.map((p) => p.price));

    this.setState({
      products,
      categories,
      offers,
      cart,
      adds,
      singleAdd: add,
      maxPrice,
      priceValue: [minPrice, maxPrice],
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
    this.setState({ searchQuery: query, selectedCategory: null });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
    console.log(category);
  };

  handlePriceChange = (e, data) => {
    this.setState({ priceValue: data, selectedCategory: null });
    console.log(data);
  };

  getProductsData = () => {
    const {
      products: allProducts,
      searchQuery,
      selectedCategory,
      priceValue,
    } = this.state;
    let filtered = allProducts;

    if (searchQuery) {
      filtered = allProducts.filter((p) =>
        p.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedCategory && selectedCategory.id) {
      filtered = allProducts.filter(
        (p) => p.category_id === selectedCategory.id
      );
    } else if (priceValue) {
      filtered = allProducts.filter(
        (p) => p.price >= priceValue[0] && p.price <= priceValue[1]
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
          onCategorySelect: this.handleCategorySelect,
          onPriceChange: this.handlePriceChange,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
