import { Button, Card } from "react-bootstrap";
import "./Card.css";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping, FaEye } from "react-icons/fa6";
import { useContext } from "react";
import { BooksContext } from "../../Context/AllBooksContext";
import { Link } from "react-router-dom";

import AddFavoriteBtn from "../AddFavoriteBtn/AddFavoriteBtn";

export default function CardComponent() {
  const { books } = useContext(BooksContext);
  const latestBooks = books ? books.slice(0, 8) : [];
  const someBooks = books ? books.slice(8, 16) : [];

  return (
    <div className="row g-3">
      {latestBooks.map((book, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
          <Card className="p-3 card">
            <div className="icons_card rounded">
              <Button className="btn_card">
                <FaCartShopping className="fs-5 fw-bold text-light" />
              </Button>
              <Link to={`/shop/singleBook/${book.id}`} className="btn_card">
                <FaEye className="fs-5 fw-bold text-light" />
              </Link>
              <AddFavoriteBtn />
            </div>
            <Card.Body className="p-0">
              <div className="image" style={{ height: 150 }}>
                <Card.Img
                  variant="top"
                  src={book.image}
                  className="w-100  h-100 object-fit-cover"
                />
              </div>
              <Card.Title className="my-3">{book.title}</Card.Title>
              <Card.Text className="description">{book.description}</Card.Text>
              <p>{book.price}$</p>
            </Card.Body>
          </Card>
        </div>
      ))}
      {someBooks.map((singleBook, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
          <Card className="p-3 card">
            <div className="icons_card rounded">
              <Button className="btn_card">
                <FaCartShopping className="fs-5 fw-bold text-light" />
              </Button>
              <Button className="btn_card">
                <FaEye className="fs-5 fw-bold text-light" />
              </Button>
              <Button className="btn_card">
                <CiHeart className="fs-5 fw-bold text-light" />
              </Button>
            </div>
            <Card.Body className="p-0">
              <div className="image" style={{ height: 150 }}>
                <Card.Img
                  variant="top"
                  src={singleBook.image}
                  className="w-100  h-100 object-fit-cover"
                />
              </div>
              <Card.Title className="my-3">{singleBook.title}</Card.Title>
              <Card.Text className="description">
                {singleBook.description}
              </Card.Text>
              <p>{singleBook.price}$</p>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
