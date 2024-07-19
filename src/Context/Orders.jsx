import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line react-refresh/only-export-components
export const ordersContext = createContext();

export default function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const { auth } = useContext(AuthContext);
  const [loading, setLodaing] = useState(false);
  function getOrdersData() {
    setLodaing(true);
    axios
      .get("https://api.codingarabic.online/api/orders", {
        headers: {
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => {
        setOrders(res.data.data);
        setLodaing(false);
      });
  }
  useEffect(() => {
    getOrdersData();
  }, [auth]);

  if (loading)
    return (
      <div className="my-5 text-center">
        <Spinner animation="border" variant="dark" />
      </div>
    );

  return (
    <div>
      <ordersContext.Provider value={{ orders, setOrders, getOrdersData }}>
        {children}
      </ordersContext.Provider>
    </div>
  );
}
