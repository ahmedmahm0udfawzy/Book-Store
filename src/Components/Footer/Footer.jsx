import { Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <footer className="bg-dark py-4">
        <Container>
          <Row>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="logo_footer">
                <img src="/public/logo.png" alt="Logo" className="w-100" />
              </div>
              <div className="my-4">
                <p className="text-light">
                  Take a look at these creative company profile examples to
                  inspire you as you create a company profile that will attract
                  and engage the right
                </p>
              </div>
              <div className="d-flex gap-4">
                <FaFacebookF className="text-light fs-3" />
                <FaSquareXTwitter className="text-light fs-3" />
                <CiLinkedin className="text-light fs-3" />
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                <h3 className="text-light">Eraa Library</h3>
                <li>
                  <Link to="/about" className="footer_link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer_link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer_link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer_link">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                <h3 className="text-light">Eraa Library</h3>
                <li>
                  <Link to="/about" className="footer_link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer_link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer_link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer_link">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul>
                <h3 className="text-light">Eraa Library</h3>
                <li>
                  <Link to="/about" className="footer_link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer_link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer_link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="footer_link">
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
