import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AllCategories = createContext();
export default function AllCateories({ children }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.codingarabic.online/api/categories`)
      .then((res) => setCategories(res.data.data));
  }, []);
  return (
    <AllCategories.Provider value={{ categories, setCategories }}>
      {children}
    </AllCategories.Provider>
  );
}

export function useCategories() {
  const { categories } = useContext(AllCategories);
  return { categories };
}
