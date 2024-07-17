import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Erorr from "../../Pages/Error/Erorr";
import Home from "../../Pages/Home/Home";
import Contact from "../../Pages/Contact/Contact";
import Cart from "../../Pages/Cart/Cart";
import Library from "../../Pages/Library/Library";
import AllCateories from "../../Context/AllCateories";
import SingleCategory from "../SingleCategory/SingleCategory";
import SingleBook from "../../Pages/SingleBook/SingleBook";
import Login from "../../Pages/Login/Login";
import Register from "../Register/Register";
import Wishlist from "../../Pages/Wishlist/Wishlist";
import Orders from "../../Pages/order/Orders";
import OrdersProvider from "../../Context/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Erorr />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: (
          <AllCateories>
            <Library />
          </AllCateories>
        ),
      },
      {
        path: "/shop/:id",
        element: (
          <AllCateories>
            <SingleCategory />
          </AllCateories>
        ),
      },

      {
        path: "/shop/singleBook/:id",
        element: <SingleBook />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: (
          <OrdersProvider>
            <Cart />
          </OrdersProvider>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/orders",
        element: (
          <OrdersProvider>
            <Orders />
          </OrdersProvider>
        ),
      },
    ],
  },
]);

export default router;
