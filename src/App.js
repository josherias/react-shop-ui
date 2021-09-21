import { Route, Switch } from "react-router";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/product/:id" component={Product} />
        <Route path="/account/sign-up" component={SignUp} />
        <Route path="/account/login" component={SignIn} />
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
