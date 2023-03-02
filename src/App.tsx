import Login from "./Components/Login";
import SignUp from "./Components/SingUp";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://audiophile-ecommerce-tunt.onrender.com/api/products"
        );
        setData(response.data);
        console.log(response.data);
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
      </Routes>
    </div>
  );
}

export default App;
