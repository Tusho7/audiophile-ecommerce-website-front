import { NavigationContainer } from "./styles";
function Navigation() {
  return (
    <NavigationContainer>
      <div>
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
  );
}

export default Navigation;
