import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.updateToCart = this.updateToCart.bind(this);
  }
  addToCart(product) {
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }
  updateToCart(product) {
    let { cartItems } = this.state;
    let { id } = product;
    let newCart = cartItems.filter((each) => each.id !== product.id);

    this.setState({
      cartItems: newCart
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          updateToCart: this.updateToCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
