import { Container, Row } from "react-bootstrap";
import "./LoginForm.css";
import { useContext, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
export default function LoginForm() {
  const email = useRef();
  const password = useRef();
  const {auth ,setAuthData} = useContext(AuthContext);
  function handelLoginSubmit(e) {
    e.preventDefault();
    console.log({
      email: email.current.value,
      password: password.current.value,
    });
    axios
      .post(
        "https://api.codingarabic.online/api/auth/login",
        {
          email: email.current.value,
          password: password.current.value,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => setAuthData(res.data.data.token));
  }
   if (auth) {
     return <Navigate to="/" />;
   }
  return (
    <div>
      <Container>
        <Row>
          <form
            onSubmit={handelLoginSubmit}
            className="col-6 mx-auto border rounded p-3 d-flex flex-column gap-3"
          >
            <div className=" w-100">
              <h1 className="mx-auto " style={{ width: "fit-content" }}>
                Login
              </h1>
            </div>
            <div className="email d-flex flex-column gap-2 mt-4">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" id="email" ref={email} />
            </div>
            <div className="password  d-flex flex-column gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                ref={password}
              />
            </div>
            <div className="d-flex justify-content-between align-items-baseline">
              <button
                className="btn btn-danger mt-3 "
                style={{ width: "fit-content" }}
              >
                {" "}
                Login
              </button>
              <Link to="/register">Create Account</Link>
            </div>
          </form>
        </Row>
      </Container>
    </div>
  );
}
