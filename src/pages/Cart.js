import React, { Component } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

import { CartContext } from "../contexts/Cart";

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {({ cartItems, updateToCart }) => {
          return (
            <Container>
              <Row>
                {cartItems.map((product) => (
                  <Col sm="4">
                    <Card>
                      <CardImg
                        top
                        width="100%"
                        src={product.imgUrl}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle> {product.name}</CardTitle>
                        <CardText>{product.description}</CardText>
                        <Button onClick={() => updateToCart(product)}>
                          Detele
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Cart;
