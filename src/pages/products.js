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
  CardSubtitle,
  Button
} from "reactstrap";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "bcbe8d99-9e44-40d9-a419-399cecac275b",
          name: "Grenadillo",
          description:
            "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
          imgUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "1c59dfc5-635a-4774-a6ef-0aa53dee864a",
          name: "Shrimp - Prawn",
          description:
            "ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede",
          imgUrl: "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
        },
        {
          id: "f9cc0858-7af2-43b9-9648-1de58453ab0b",
          name: "Bag - Clear 7 Lb",
          description:
            "ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi",
          imgUrl: "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
        },
        {
          id: "8bb3cc37-8682-41fc-a616-1f43d3cdff72",
          name: "Truffle - Peelings",
          description:
            "amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
          imgUrl: "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
        },
        {
          id: "09776efd-1b2c-4eb4-a374-a3929e757d86",
          name: "Pepper - Pablano",
          description:
            "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat",
          imgUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "1b78249a-3f88-444f-9c63-536247e1274c",
          name: "Pork - Butt, Boneless",
          description:
            "libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
          imgUrl: "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
        },
        {
          id: "a8097146-247b-4ca1-b8b9-dcbe5dd74ff5",
          name: "Vermouth - White, Cinzano",
          description:
            "nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum",
          imgUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff"
        },
        {
          id: "f51e467a-578e-4869-b0d6-1f5cfab54bb6",
          name: "Truffle - Peelings",
          description:
            "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus",
          imgUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
        },
        {
          id: "be405278-896e-474c-bebe-75175050cac0",
          name: "Arizona - Plum Green Tea",
          description:
            "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue",
          imgUrl: "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
        },
        {
          id: "3f23d9eb-d961-4662-ab9c-cb6038377ed5",
          name: "Chevere Logs",
          description:
            "feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas",
          imgUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff"
        },
        {
          id: "65fa010d-df3f-4f78-9210-2fec4f7f130f",
          name: "Cake - Mini Cheesecake",
          description:
            "cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras",
          imgUrl: "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
        },
        {
          id: "23f26c93-2052-436c-8c3f-389a922874be",
          name: "Food Colouring - Green",
          description:
            "amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus",
          imgUrl: "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
        },
        {
          id: "bfc71918-6c73-4e45-bacf-2bef1327e630",
          name: "Tart Shells - Sweet, 4",
          description:
            "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "a6afd616-04ce-43aa-88c8-1aa2d6dfed3a",
          name: "Magnotta - Bel Paese White",
          description:
            "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse",
          imgUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "acabd020-bda4-4a5c-b945-549b28dfe35e",
          name: "Flower - Potmums",
          description:
            "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit",
          imgUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "f1b67f24-19b9-4301-b42b-9dd20a8a503e",
          name: "Initation Crab Meat",
          description:
            "id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia",
          imgUrl: "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
        },
        {
          id: "3d6f344a-3f06-40d9-a1ef-3cc4764aa322",
          name: "Shiratamako - Rice Flour",
          description:
            "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
          imgUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff"
        },
        {
          id: "057f61aa-405a-4638-a76a-7a6ee7efe720",
          name: "Lemons",
          description:
            "donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
          imgUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        },
        {
          id: "f5ea4cf0-73aa-4ba3-9ebd-b305d8a78c19",
          name: "Cheese - Montery Jack",
          description:
            "rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut",
          imgUrl: "http://dummyimage.com/300x200.jpg/dddddd/000000"
        },
        {
          id: "3926d429-f216-446b-b475-b81a0259c61b",
          name: "Beef - Ox Tongue",
          description:
            "molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
          imgUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff"
        }
      ]
    };
  }
  render() {
    const { products } = this.state;
    return (
      <>
        <h2>Products</h2>
        <Container>
          <Row>
            {products.map((product) => (
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
                    <Button>Add to cart</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Products;
