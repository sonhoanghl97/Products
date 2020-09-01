import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import TopMenu from "./components/TopMenu";
import Products from "./pages/products";
import { CartProvider } from "./contexts/Cart";
import Cart from "./pages/Cart";

function Home() {
  return <h2>Home</h2>;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Route path="/products" exact component={Products} />
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
        </div>
      </Router>
    </CartProvider>
  );
}
