import { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { FaShoppingBag } from "react-icons/fa";
import { Container, Row } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import CheckoutForm from "../../Components/Ckeckout/CheckoutForm";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  const { auth } = useContext(AuthContext);

  const handleDelete = (cartId) => {
    axios
      .delete(`https://api.codingarabic.online/api/cart/${cartId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      })
      .then(() => {
        setCart((prevCart) =>
          prevCart.filter((item) => item.cartId !== cartId)
        );
        toast.success("Item Deleted Successfully.", {
          position: "top-right",
        });
      });
  };

  const handleQuantityChange = (cartId, newQuantity) => {
    axios
      .post(
        `https://api.codingarabic.online/api/cart/${cartId}`,
        {
          qty: newQuantity,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth}`,
          },
        }
      )
      .then((response) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.cartId === cartId
              ? {
                  ...item,
                  qty: newQuantity,
                  totalPrice: response.data.totalPrice,
                }
              : item
          )
        );
        toast.success("Quantity updated successfully.", {
          position: "top-right",
        });
      })
      .catch((error) => {
        toast.error("Failed to update quantity.", {
          position: "top-right",
        });
      });
  };

  return (
    <div>
      <Container>
        <div
          className="d-flex gap-3 align-items-baseline my-5 pb-2 border-bottom border-primary"
          style={{ width: "fit-content" }}
        >
          <h3 className="text-primary mb-0">Cart Page</h3>
          <FaShoppingBag className="text-primary fs-5" />
        </div>
        <Row>
          {cart.length === 0 ? (
            <h2
              className="text-primary mx-auto border border-primary rounded p-2 my-5"
              style={{ width: "fit-content" }}
            >
              Cart Empty
            </h2>
          ) : (
            <table className="my-5">
              <thead>
                <tr>
                  <th className="text-center text-danger">Book Id</th>
                  <th className="text-center text-danger">Book Price</th>
                  <th className="text-center text-danger">Quantity</th>
                  <th className="text-center text-danger">Delete</th>
                  <th className="text-center text-danger">Total $</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.bookId}
                    className="border-primary border-bottom"
                    style={{ paddingBottom: "10px" }}
                  >
                    <td className="text-center">{item.bookId}</td>
                    <td className="text-center">{item.price}</td>
                    <td className="text-center">
                      <input
                        type="number"
                        value={item.qty}
                        onChange={(e) =>
                          handleQuantityChange(item.cartId, e.target.value)
                        }
                        min="1"
                      />
                    </td>
                    <td className="text-center">
                      <MdDelete
                        onClick={() => handleDelete(item.cartId)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                    <td className="text-center">{item.price * item.qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Row>
        {cart.length > 0 ? <CheckoutForm /> : ""}
      </Container>
    </div>
  );
}
