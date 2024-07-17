import { useContext } from "react";
import { ordersContext } from "../../Context/Orders";
import { Container } from "react-bootstrap";

export default function Orders() {
  const { orders } = useContext(ordersContext);
  return (
    <div>
      <Container>
        {orders.map((order) => (
          <div key={order.orderId}>
            <div>
              <table className="border rounded p-3 border-primary w-100 my-5">
                <thead>
                  <tr className="text-center">
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td>{order.customerName}</td>
                    <td>{order.customerPhone}</td>
                    <td>{order.customerAddress}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

/*
      <h1 className="mx-auto" style={{ width: "fit-content", color: "red" }}>
        Orders
      </h1>
      <table className="border rounded p-2 w-100 my-5">
        <thead>
          <tr className="border text-center">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border text-center">
            <th>Ahmed Fawzy</th>
            <th>afaw@eraasoft.com</th>
            <th>01112204836</th>
            <th>View</th>
          </tr>
        </tbody>
      </table>
         <tr>
                  <th>{order.customerName}</th>
                  <th>{order.customerPhone}</th>
                  <th>{order.customerAddress}</th>
                  <th>{order.discountValue}</th>
                  <th>{order.totalPrice}</th>
                </tr>
*/
