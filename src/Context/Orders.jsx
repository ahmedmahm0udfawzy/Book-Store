import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

// eslint-disable-next-line react-refresh/only-export-components
export const ordersContext = createContext();

export default function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("https://api.codingarabic.online/api/orders", {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => setOrders(res.data.data));
  }, [auth]);
  return (
    <div>
      <ordersContext.Provider value={{ orders, setOrders }}>
        {children}
      </ordersContext.Provider>
    </div>
  );
}
