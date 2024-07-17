import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";


export const CartContext = createContext();
export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://api.codingarabic.online/api/cart", {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => {
        setCart(res.data.data);
      });
  }, [auth, setCart]);
  return (
    <div>
      <CartContext.Provider value={{ cart, setCart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
}
