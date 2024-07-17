import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "./SingleCategory.css";
import { FaCartShopping, FaEye } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useCategories } from "../../Context/AllCateories";
export default function SingleCategory() {
  const [singleCategory, setSingleCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categories } = useCategories();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.codingarabic.online/api/categories/${id}`)
      .then((res) => {
        setSingleCategory(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="my-5 text-center">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  if (error) return <p>Error loading category: {error.message}</p>;

  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 my-5">
          <aside className="border rounded  row gap-2 justify-content-center ">
            {categories.map((category) => (
              <Link
                onClick={() => {
                  console.log(category);
                }}
                to={`/shop/${category.categoryId}`}
                key={category.categoryId}
                className=" col-lg-5 my-2 cate_name mb-2 border rounded p-4 d-flex justify-content-center align-items-center "
              >
                <p>{category.name}</p>
              </Link>
            ))}
          </aside>
        </div>
        {singleCategory && (
          <div className="col-lg-9 col-md-12 col-sm-12 my-5">
            <div className="row g-4">
              {singleCategory.books && singleCategory.books.length > 0 ? (
                singleCategory.books.map((book, index) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                    <Card className="p-3 card">
                      <div className="icons_card rounded">
                        <Button className="btn_card">
                          <FaCartShopping className="fs-5 fw-bold text-light" />
                        </Button>
                        <Link
                          to={`/shop/singleBook/${book.id}`}
                          className="btn_card"
                        >
                          <FaEye className="fs-5 fw-bold text-light" />
                        </Link>

                        <Button className="btn_card">
                          <CiHeart className="fs-5 fw-bold text-light" />
                        </Button>
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
                        <Card.Text className="description">
                          {book.description}
                        </Card.Text>
                        <p>{book.price}$</p>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                <p>No books available in this category.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
