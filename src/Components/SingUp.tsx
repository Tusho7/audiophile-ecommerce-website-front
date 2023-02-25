import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "../index.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password || !avatar) {
      console.log("Enter all required fields");
      return;
    }
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    // Create form data object
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar);
    }
    try {
      // Send POST request to backend API
      const response = await axios.post(
        "https://audiophile-ecommerce-tunt.onrender.com/api/auth/signup",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatar(file);
    }
  };

  return (
    <SignUpWrapper>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="signup-input">
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>Email</label>
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="signup-input">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label>Password</label>
          {passw}
        </div>
        <div className="signup-input">
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </SignUpWrapper>
  );
}

export default SignUp;

export const SignUpWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  padding: 30px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(139, 128, 249, 0.6);
  border-radius: 10px;

  h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  .signup-input {
    position: relative;

    input[type="text"],
    input[type="password"],
    input[type="file"] {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #fff;
      outline: none;
      background: transparent;
    }

    label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: 0.5s;
    }

    input:focus ~ label,
    input:valid ~ label {
      top: -20px;
      left: 0;
      color: #8b80f9;
      font-size: 12px;
    }

    .error {
      position: absolute;
      top: 40px;
      left: 0;
      bottom: -20px;
      font-size: 14px;
      color: #ff0000;
    }
  }

  form button[type="submit"] {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #8b80f9;
    font-size: 16px;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
    background: none;
    border: 2px solid #8b80f9;
    border-radius: 5px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background: #8b80f9;
    color: #fff;
    box-shadow: 0 0 5px #8b80f9, 0 0 25px #8b80f9, 0 0 50px #8b80f9,
      0 0 100px #8b80f9;
  }

  button[type="submit"]:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0%;
    height: 100%;
    background: #8b80f9;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    z-index: -1;
  }

  button[type="submit"]:hover:before {
    width: 100%;
  }

  button[type="submit"] span {
    position: absolute;
    display: block;
  }

  button[type="submit"] span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8b80f9);
    animation: myAnimation 1s linear infinite;
  }

  @keyframes myAnimation {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #8b80f9);
    animation: myAnimation 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes myAnimation {
    0% {
      top: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
