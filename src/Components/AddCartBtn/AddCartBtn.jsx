import axios from "axios";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthContext";
import { CartContext } from "../../Context/Cart";
import { toast } from "react-toastify";

export default function AddCartBtn({ id }) {
  const { auth } = useContext(AuthContext);
  const { setCart } = useContext(CartContext);
  function addToCart() {
    axios
      .post(
        `https://api.codingarabic.online/api/cart`,
        {
          bookId: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth}`,
          },
        }
      )
      .then((res) => {
        setCart(res.data.data);
      });
    toast.success("Item added to Cart.", {
      position: "top-right",
    }
  );
  }
  return (
    <Button className="btn_card" onClick={addToCart}>
      <FaCartShopping className="fs-5 fw-bold text-light" />
    </Button>
  );
}
