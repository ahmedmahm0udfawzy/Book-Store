import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const BooksContext = createContext();

export default function AllBooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://api.codingarabic.online/api/books").then((res) => {
      setBooks(res.data.data);
    });
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
}

