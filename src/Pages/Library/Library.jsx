import { useContext } from "react";
import "./Library.css";
import { BooksContext } from "../../Context/AllBooksContext";
import { FaEye } from "react-icons/fa6";
import { useCategories } from "../../Context/AllCateories";
import { Link } from "react-router-dom";
import AddCartBtn from "../../Components/AddCartBtn/AddCartBtn";
import AddFavoriteBtn from "../../Components/AddFavoriteBtn/AddFavoriteBtn";
import { Card } from "react-bootstrap";
// import { WishListContext } from "../../Context/WishListContext";
export default function Library() {
  const { books } = useContext(BooksContext);
  const { categories } = useCategories();

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-3">
          <aside className="border rounded my-5 row gap-2 justify-content-center ">
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
        <div className="col-lg-9">
          <div className="row g-3 my-4">
            {books.map((book) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={book.id}>
                <Card className="p-3 card">
                  <div className="icons_card rounded">
                    <AddCartBtn id={book.id} />

                    <Link
                      to={`/shop/singleBook/${book.id}`}
                      className="btn_card"
                    >
                      <FaEye className="fs-5 fw-bold text-light" />
                    </Link>
                    <AddFavoriteBtn bookId={book.id} />
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
                    <p>{book.price}</p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
