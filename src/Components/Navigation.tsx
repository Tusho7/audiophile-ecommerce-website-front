import { CallTracker } from "assert";
import { useState } from "react";
import Cart from "./Cart";
import Category from "./Category";
import { NavigationContainer } from "./styles";
function Navigation() {
  const [toggle, setToggle] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  const toggleVisible = () => {
    setToggle(!toggle);
  };

  const handleClick = () => {
    setCartModal(!cartModal);
  };

  return (
    <div>
      <NavigationContainer>
        <div onClick={toggleVisible}>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-hamburger.svg`}
          />
        </div>

        <div>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/logo.svg`}
          />
        </div>

        <div onClick={handleClick}>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-cart.svg`}
          />
        </div>
      </NavigationContainer>

      {toggle && <Category />}
      {cartModal && <Cart />}
    </div>
  );
}

export default Navigation;
