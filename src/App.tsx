import Login from "./Components/Login";
import SignUp from "./Components/SingUp";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductType } from "./Components/types";
import Product from "./Components/Product";
import Detail from "./Components/Detail";

function App() {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://audiophile-ecommerce-tunt.onrender.com/api/products"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/:category" element={<Product data={data} />} />
        <Route
          path="/products/:slug/detail"
          element={<Detail data={data} category={""} />}
        />
        <Route
          path="/products/:slug/detail"
          element={<Detail data={data} category={""} />}
        />
        <Route
          path="/products/:slug/detail"
          element={<Detail data={data} category={""} />}
        />
      </Routes>
    </div>
  );
}

export default App;
