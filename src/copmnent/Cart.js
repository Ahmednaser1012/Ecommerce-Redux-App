import React from "react";
import Button from "react-bootstrap/esm/Button";
import CardImg from "react-bootstrap/esm/CardImg";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice, clearInterval, removecart } from "../Redux/cartSlice";
function Cart() {
  const CartData = useSelector((state) => state.Carts);
  const dispatch = useDispatch();
  const totalPrice = CartData.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
    // *product.quantity
  }, 0);

  console.log(CartData);

  return (
    <Container className="py-5">
      <h1 className=" mt-5">Welcome to Cart</h1>
      <Button
        variant="primary"
        className="my-3"
        onClick={() => {
          dispatch(clearInterval());
        }}
      >
        Clear Cart
      </Button>
      <h1> Total Price : {totalPrice.toFixed(2)} $</h1>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name product</th>
              <th>Description </th>
              <th>Image</th>
              <th>Price</th>
              <th>quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {CartData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.category}</td>
                  <td>{item?.description?.slice(0, 80)}</td>
                  <td>
                    <CardImg
                      src={item.image}
                      alt="image"
                      style={{ width: "50px", height: "30px" }}
                    />
                  </td>
                  <td>{item.price} $</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        dispatch(removecart(item));
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Cart;
