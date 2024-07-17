import { Container } from "react-bootstrap";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
export default function LatestProducts({ title }) {
  return (
    <div className="my-5">
      <Container>
        <div className="w-100 d-flex justify-content-between align-items-center my-3">
          <h2>{title}</h2>
          <Link
            to="/shop"
            className="border rounded px-3 py-2 text-decoration-none text-bg-dark"
          >
            Shopping
          </Link>
        </div>
        <div className="row g-3">
          <div className="col-lg-12 ">
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    </div>
  );
}
