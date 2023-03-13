import Login from "./Components/Login";
import SignUp from "./Components/SingUp";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductType, User } from "./Components/types";
import Product from "./Components/Product";
import Detail from "./Components/Detail";
import Cart from "./Components/Cart";

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState<ProductType[]>([]);
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [cart, setCart] = useState("");

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

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://curious-pear-anemone.cyclic.app/api/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = response.data;
      console.log("token:", token);
      if (!token) {
        throw new Error("No token received from the server");
      }

      setToken(token);
      setIsLogin(true);
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const userResponse = await axios.get(
        "https://curious-pear-anemone.cyclic.app/api/user",
        config
      );
      const userData = userResponse.data;
      setUser(userData);
      navigate("/home");
    } catch (error) {
      setError("Wrong email or password");
    }
  };

  return (
    <div className="App">
      <Routes>
        {isLogin ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route
              path="/products/:category"
              element={<Product data={data} />}
            />
            <Route
              path="/products/:slug/detail"
              element={
                <Detail data={data} category={""} cart={[]} setCart={setCart} />
              }
            />
            <Route
              path="/products/:slug/detail"
              element={
                <Detail data={data} category={""} cart={[]} setCart={setCart} />
              }
            />
            <Route
              path="/products/:slug/detail"
              element={
                <Detail data={data} category={""} cart={[]} setCart={setCart} />
              }
            />
            <Route path="/cart" element={<Cart user={user} />} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <Login
                  handleSubmit={handleSubmit}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
            <Route
              path="/signup"
              element={<SignUp user={user} setUser={setUser} />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
