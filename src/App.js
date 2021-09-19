import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/categories" component={Categories} />
        <Route path="/products" component={Products} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
