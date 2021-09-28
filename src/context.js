import React, { Component } from "react";
import { paginate } from "./utils/paginate";
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
    currentPage: 1,
    pageSize: 4,
    cartSubTotal: 0,
    cartShipCharges: 0,
    cartTotal: 0,
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

  handleAddToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getProduct(id));
    const product = tempProducts[index];
    product.inCart = true;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
      };
    }, this.addTotals);
  };

  getCartTotals = () => {
    let subTotal = 0;
    this.state.cart.map((product) => (subTotal += product.total));
    const tempCharges = subTotal * 0.1;
    const shipCharges = parseFloat(tempCharges.toFixed(2));
    const total = subTotal + shipCharges;

    return {
      subTotal,
      shipCharges,
      total,
    };
  };

  addTotals = () => {
    const { subTotal, shipCharges, total } = this.getCartTotals();

    this.setState({
      cartSubTotal: subTotal,
      cartShipCharges: shipCharges,
      cartTotal: total,
    });
  };

  handleIncrement = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(cartItem);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;

    this.setState(() => {
      return {
        cart: [...tempCart],
      };
    }, this.addTotals);
  };

  handleDecrement = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(cartItem);
    const product = tempCart[index];

    product.count = product.count - 1;

    if (product.count <= 0) product.count = 0;

    product.total = product.price * product.count;

    this.setState(() => {
      return {
        cart: [...tempCart],
      };
    }, this.addTotals);
  };

  handleDetail = (id) => {
    const product = this.getProduct(id);
    this.setState({ singleProduct: product });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedCategory: null });
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category, currentPage: 1 });
    console.log(category);
  };

  handlePriceChange = (e, data) => {
    this.setState({ priceValue: data, selectedCategory: null, currentPage: 1 });
    console.log(data);
  };

  handlePageChange = (e, value) => {
    this.setState({ currentPage: value });
  };

  getProductsData = () => {
    const {
      products: allProducts,
      searchQuery,
      selectedCategory,
      priceValue,
      currentPage,
      pageSize,
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

    const products = paginate(filtered, currentPage, pageSize);

    return { filtered: products, totalCount: filtered.length };
  };

  render() {
    const { filtered, totalCount } = this.getProductsData();
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          onAddToCart: this.handleAddToCart,
          handleDetail: this.handleDetail,
          productsData: filtered,
          handleSearch: this.handleSearch,
          onCategorySelect: this.handleCategorySelect,
          onPriceChange: this.handlePriceChange,
          onPageChange: this.handlePageChange,
          itemsCount: totalCount,
          cartCount: this.state.cart.length,
          getCartTotals: this.getCartTotals,
          onIncrement: this.handleIncrement,
          onDecrement: this.handleDecrement,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
