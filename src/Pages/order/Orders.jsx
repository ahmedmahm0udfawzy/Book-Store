import { useContext, useState } from "react";
import { ordersContext } from "../../Context/Orders";
import { Container } from "react-bootstrap";

export default function Orders() {
  const { orders } = useContext(ordersContext);
  const [selectedBook, setSelectedBook] = useState(null);

  function showAllOrders(items) {
    if (items.length > 0) {
      setSelectedBook(items[0].book);
    }
  }

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
                    <th>Show Orders</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center border border-primary">
                    <td>{order.customerName}</td>
                    <td>{order.customerPhone}</td>
                    <td>{order.customerAddress}</td>
                    <td>
                      <button
                        className="btn btn-secondary my-2"
                        onClick={() => showAllOrders(order.items)}
                      >
                        Show Orders
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
        {selectedBook && (
          <div>
            <h5>Order</h5>
            <div>
              <img src={selectedBook.image} alt="" />
              <p>{selectedBook.title}</p>
              <p>{selectedBook.price}</p>
              <p>{selectedBook.category}</p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
