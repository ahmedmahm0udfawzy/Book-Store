import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { Card } from "react-bootstrap";
import "./Wishlist.css";
export default function Wishlist() {
  const { auth } = useContext(AuthContext);
  const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.codingarabic.online/api/wishlist/get", {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      })
      .then((res) => setFavorite(res.data.data));
  }, [auth]);
  return (
    <div className="container my-5">
      <div className="row g-4">
        {favorite.length == 0 ? (
          <h1>No Items</h1>
        ) : (
          favorite.map((product) => (
            <div key={product.book.id} className="col-lg-3 col-md-6 col-sm-12">
              <div>
                <Card>
                  <div className="image">
                    <Card.Img variant="top" src={product.book.image} />
                  </div>
                  <Card.Body>
                    <Card.Title>{product.book.title}</Card.Title>
                    <Card.Text className="book_desc">
                      {product.book.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
