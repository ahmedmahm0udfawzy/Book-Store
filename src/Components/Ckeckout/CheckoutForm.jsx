import axios from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ordersContext } from "../../Context/Orders";

export default function CheckoutForm() {
  const { auth } = useContext(AuthContext);
  const { setOrders } = useContext(ordersContext);
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const address = useRef();
  const notes = useRef();
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};
    if (!name.current.value) newErrors.name = "Name is required";
    if (!email.current.value) newErrors.email = "Email is required";
    if (!phone.current.value) newErrors.phone = "Phone is required";
    if (!address.current.value) newErrors.address = "Address is required";
    return newErrors;
  }

  function handleNewOrder() {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      customerName: name.current.value,
      customerEmail: email.current.value,
      customerPhone: phone.current.value,
      customerAddress: address.current.value,
      notes: notes.current.value,
    };

    console.log(payload);

    axios
      .post("https://api.codingarabic.online/api/orders", payload, {
        headers: {
          Authorization: `Bearer ${auth}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setOrders(res.data);
        setErrors({});
      })
      .catch((err) => {
        console.error(err);
        if (err.response && err.response.status === 422) {
          setErrors(err.response.data.errors);
        }
      });
  }

  return (
    <div className="col-6">
      <form>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" id="name" ref={name} />
          {errors.name && <p className="text-danger my-2">{errors.name}</p>}
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" ref={email} />
          {errors.email && <p className="text-danger my-2">{errors.email}</p>}
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone</label>
          <input type="tel" placeholder="Phone" id="phone" ref={phone} />
          {errors.phone && <p className="text-danger my-2">{errors.phone}</p>}
        </div>
        <div className="address">
          <label htmlFor="address">Address</label>
          <input type="tel" placeholder="Address" id="address" ref={address} />
          {errors.address && (
            <p className="text-danger my-2">{errors.address}</p>
          )}
        </div>
        <div className="notes">
          <label htmlFor="notes">Notes</label>
          <input type="tel" placeholder="Notes" id="notes" ref={notes} />
          {errors.notes && <p className="text-danger my-2">{errors.notes}</p>}
        </div>
      </form>
      <button className="btn btn-primary" onClick={handleNewOrder}>
        Payment
      </button>
    </div>
  );
}
