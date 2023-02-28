import Login from "./Components/Login";
import SignUp from "./Components/SingUp";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
