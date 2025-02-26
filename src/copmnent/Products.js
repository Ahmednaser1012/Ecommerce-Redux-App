import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/api";
import { addcart } from "../Redux/cartSlice";

function Products() {
  const productsdata = useSelector((state) => state.products);
  // console.log(productsdata);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <Container className="py-3">
      <div className="row py-3">
        {productsdata.map((product) => {
          return (
            <div className="col-md-4 " key={product.id}>
              <Card style={{ max_width: "18rem", marginTop: "20%" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "300px" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    {product?.description?.slice(0, 20)}....
                  </Card.Text>
                  <Card.Text> {product.price} $</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addcart(product))}
                  >
                    Add To Cat{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Products;
