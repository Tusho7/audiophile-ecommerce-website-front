import { useEffect, useState } from "react";
import Cart from "./Cart";
import Category from "./Category";
import { NavigationContainer, NavigationSecondContainer, HamburgerDiv, DesktopListContainer } from "./styles";
import { useNavigate } from "react-router-dom";


function Navigation({ user, token }: any) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  const toggleVisible = () => {
    setToggle(!toggle);
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleClick = () => {
    setCartModal(!cartModal);
    if (!cartModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const GoHome = () => {
    navigate("/home");
  }

  const GoHeadphones = () => {
    navigate("/products/headphones")
  }

  const GoSpeakers = () => {
    navigate("/products/speakers")
  }

  const GoEarphones = () => {
    navigate("/products/earphones")
  }

  return (
    <div>
      <NavigationContainer>
        <HamburgerDiv onClick={toggleVisible}>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-hamburger.svg`}
          />
        </HamburgerDiv>

        <NavigationSecondContainer>
          <div>
            <img
              src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/logo.svg`}
            />
          </div>

          <DesktopListContainer>
            <p onClick={GoHome}>Home</p>
            <p onClick={GoHeadphones}>HEADPHONES</p>
            <p onClick={GoSpeakers}>SPEAKERS</p>
            <p onClick={GoEarphones}>EARPHONES</p>
          </DesktopListContainer>

          <div onClick={handleClick}>
            <img
              src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-cart.svg`}
            />
          </div>
        </NavigationSecondContainer>
      </NavigationContainer>

      {toggle && <Category />}
      {cartModal && <Cart user={user} token={token} />}
    </div>
  );
}

export default Navigation;
