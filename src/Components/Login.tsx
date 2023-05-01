import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import { LogIn } from "./types";

function Login({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}: LogIn) {
  return (
    <LoginContainer>
      <LoginWrapper>
        <h2>Login</h2>
        <form>
          <div className="login-input">
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>     
          </div>
          <div className="login-input">
            <input
              type="password"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <Buttons>
            <button type="submit" className="login-butt" onClick={handleSubmit}>
              Login
            </button>

            <SignUpLink to="/signup" className="signup-butt">
              Sign Up
            </SignUpLink>
          </Buttons>
        </form>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background: linear-gradient(#8b80f9, #212123);
  min-height: 100vh;
`;

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

  form button[type="submit"],
  .signup-butt {
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

  button[type="submit"]:hover,
  .signup-butt:hover {
    background: #8b80f9;
    color: #fff;
    box-shadow: 0 0 5px #8b80f9, 0 0 25px #8b80f9, 0 0 50px #8b80f9,
      0 0 100px #8b80f9;
  }

  button[type="submit"]:before,
  .signup-butt:before {
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

  button[type="submit"]:hover:before,
  .signup-butt:hover:before {
    width: 100%;
  }

  button[type="submit"] span,
  .signup-butt span {
    position: absolute;
    display: block;
  }

  button[type="submit"] span:nth-child(1),
  .signup-butt span:nth-child(1) {
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
  @media (min-width: 1440px){
    width: 30%;
    height: 35%;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SignUpLink = styled(Link)`
  font-weight: 300;
  font-size: 15px;
  color: #fc4747;
  text-decoration: none;
`;
