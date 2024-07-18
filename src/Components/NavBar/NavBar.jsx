import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import "./NavBar.css";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import LogOut from "../LogOut/LogOut";
import { CartContext } from "../../Context/Cart";

export default function NavBar() {
  const { auth } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          EraaSoft <span className="text-primary">Library</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          <Nav className="gap-3">
            <NavLink to="/" className=" text-dark fs-6 nav_link">
              Home
            </NavLink>
            <NavLink to="/shop" className=" text-dark fs-6 nav_link">
              Library
            </NavLink>
            <NavLink to="/wishlist" className=" text-dark fs-6 nav_link">
              Favorite
            </NavLink>
            {auth ? (
              <NavLink to="/orders" className=" text-dark fs-6 nav_link">
                Orders
              </NavLink>
            ) : (
              ""
            )}
          </Nav>
          <div className="d-flex gap-3 ms-auto align-items-center">
            <NavLink
              to="/cart"
              className=" text-dark fs-6 d-flex gap-2 nav_link"
            >
              <span>Cart</span>
              <span className="cart_icon">
                <FaCartPlus />
                <span className="cart_count">{cart.length}</span>
              </span>
            </NavLink>
            {auth ? (
              <LogOut />
            ) : (
              <NavLink
                to="/login"
                className=" text-dark fs-6 d-flex gap-2 align-items-center nav_link"
              >
                <span>LOGIN</span>
                <span>
                  <CgProfile />
                </span>
              </NavLink>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
