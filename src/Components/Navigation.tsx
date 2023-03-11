import { useState } from "react";
import Category from "./Category";
import { NavigationContainer } from "./styles";
function Navigation() {
  const [toggle, setToggle] = useState(false);

  const toggleVisible = () => {
    setToggle(!toggle);
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

        <div>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-cart.svg`}
          />
        </div>
      </NavigationContainer>

      {toggle && <Category />}
    </div>
  );
}

export default Navigation;
