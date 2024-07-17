import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { WishListContext } from "../../Context/WishListContext";

export default function AddFavoriteBtn({ bookId }) {
  const { handleAddToWishList } = useContext(WishListContext);
  return (
    <div>
      <button className="btn_card" onClick={() => handleAddToWishList(bookId)}>
        <CiHeart className="fs-5 fw-bold text-light" />
      </button>
    </div>
  );
}
