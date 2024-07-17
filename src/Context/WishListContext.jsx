import axios from "axios";
import { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { toast } from "react-toastify";

export const WishListContext = createContext();

export default function WishListProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  const { auth } = useContext(AuthContext);

  function handleAddToWishList(bookId) {
    axios
      .post(
        `https://api.codingarabic.online/api/wishlist/add`,
        { bookId: bookId },
        {
          headers: {
            Authorization: `Bearer ${auth}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setFavorite(res.data.data);
        toast.success("Product added to favorite.", {
          position: "top-right",
        });
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            toast.error(
              "Unauthorized: Please check your authentication token.",
              {
                position: "top-right",
              }
            );
          } else if (error.response.data && error.response.data.message) {
            if (error.response.data.message === "Product already in wishlist") {
              toast.error("The product already exists in the wishlist.", {
                position: "top-right",
              });
            } else {
              toast.error(error.response.data.message, {
                position: "top-right",
              });
            }
          } else {
            toast.error("An error occurred while adding the product.", {
              position: "top-right",
            });
          }
        } else {
          toast.error("An unknown error occurred.", {
            position: "top-right",
          });
        }
      });
  }

  return (
    <WishListContext.Provider
      value={{ favorite, setFavorite, handleAddToWishList }}
    >
      {children}
    </WishListContext.Provider>
  );
}
