import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

function Login() {
  return (
    <LoginWrapper>
      <h2>Login</h2>
      <form>
        <div className="login-input">
          <input type="text" required />
          <label>Email</label>
        </div>
        <div className="login-input">
          <input type="password" required />
          <label>Password</label>
        </div>
        <a>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </a>

        <a>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sign Up
        </a>
      </form>
    </LoginWrapper>
  );
}

export default Login;

export const LoginWrapper = styled.div`
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

  .login-input {
    position: relative;

    input {
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
  }

  form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #8b80f9;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
  }

  a:hover {
    background: #8b80f9;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #8b80f9, 0 0 25px #8b80f9, 0 0 50px #8b80f9,
      0 0 100px #8b80f9;
  }

  a span {
    position: absolute;
    display: block;
  }

  a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #8b80f9);
    animation: animacaoBotao1 1s linear infinite;
  }

  @keyframes animacaoBotao1 {
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
