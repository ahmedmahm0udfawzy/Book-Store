import axios from "axios";
import { useContext, useRef } from "react";
import { Container } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Register() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const password_confirmation = useRef();
  const { auth, setAuthData } = useContext(AuthContext);
  console.log(auth);
  function handelRegister(e) {
    e.preventDefault();
    console.log({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      password_confirmation: password_confirmation.current.value,
    });
    axios
      .post(
        "https://api.codingarabic.online/api/auth/register",
        {
          name: name.current.value,
          email: email.current.value,
          password: password.current.value,
          password_confirmation: password_confirmation.current.value,
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
        <form
          className="my-5 d-flex flex-column gap-3 col-lg-6 col-md-12 col-sm-12 mx-auto border rounded p-3"
          onSubmit={handelRegister}
        >
          <div>
            <h1 className="mx-auto  " style={{ width: "fit-content" }}>
              Sign Up
            </h1>
          </div>
          <div className="name d-flex flex-column gap-3">
            <label htmlFor="name" className="text-primary">
              Full Name
            </label>
            <input type="text" placeholder="Name" ref={name} />
          </div>
          <div className="email d-flex flex-column gap-3">
            <label htmlFor="email" className="text-primary">
              Email
            </label>
            <input type="email" placeholder="Email" ref={email} />
          </div>
          <div className="password d-flex flex-column gap-3">
            <label htmlFor="password" className="text-primary">
              Email
            </label>
            <input type="password" placeholder="Password" ref={password} />
          </div>
          <div className="confirm_password d-flex flex-column gap-3">
            <label htmlFor="confirmPassword" className="text-primary">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              ref={password_confirmation}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <button type="submit" className="btn btn-danger">
              Sign Up
            </button>
            <Link to="/login"> Already have an account ?</Link>
          </div>
        </form>
      </Container>
    </div>
  );
}
