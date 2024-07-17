import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function SingleBook() {
  const [singleBook, setSingleBook] = useState({});
  const [bookCount, setBookCount] = useState(1);

  function increaseBookCount() {
    setBookCount(bookCount + 1);
  }
  function decreaseBookCount() {
    setBookCount((prev) => (prev < 2 ? 1 : prev - 1));
  }
  console.log(singleBook);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://api.codingarabic.online/api/books/${id}`).then((res) => {
      setSingleBook(res.data.data);
    });
  }, [id]);

  return (
    <div>
      <Container>
        <Row className="my-5">
          <div className=" col-lg-3 col-md-6 col-sm-12">
            <img src={singleBook.image} alt="Book_image" className="w-100" />
          </div>
          <div className="clo-lg-9 col-md-6 col-sm-12">
            <p className="fw-bold text-danger">{singleBook.title}</p>
            <p>{singleBook.category}</p>
            <p className="fw-bold text-danger">{singleBook.price}</p>
            <p>{singleBook.description}</p>
            <div className=" w-100 d-flex gap-3">
              <div className="  d-flex gap-3 align-items-center border rounded justify-content-between w-50">
                <button onClick={increaseBookCount} className="border-0 rounded w-25 py-1">+</button>
                <span>{bookCount}</span>
                <button onClick={decreaseBookCount} className="border-0 rounded w-25 py-1">-</button>
              </div>
              <button className="btn btn-danger w-100">Add To Cart</button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
