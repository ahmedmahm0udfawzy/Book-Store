import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routing from "./Components/Routes/Routes";
import AuthProvider from "./Context/AuthContext";
import CartProvider from "./Context/Cart";
import WishListProvider from "./Context/WishListContext";
import AllBooksProvider from "./Context/AllBooksContext";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartProvider>
            <AllBooksProvider>
              <WishListProvider>
                <RouterProvider router={Routing} />
                <ToastContainer />
              </WishListProvider>
            </AllBooksProvider>
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
