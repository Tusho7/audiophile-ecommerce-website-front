import { Link } from "react-router-dom";
import styled from "styled-components";

function Category({isInsideDetail }: any) {

  const handleSeeProductClick = () => {
    window.scrollTo(0, 0);
  };


  return (
    <Modal style={{ paddingTop: isInsideDetail ? '240px' : 0 }}>
      <CategoryContainer>
        <CategoryDiv>
          <CategoryPictures>
            <Image
              src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/image-category-thumbnail-headphones.png`}
            />
          </CategoryPictures>

          <TitleAndShopContainer>
            <p>HEADPHONES</p>
            <ShopContainer>
              <Link to="/products/headphones">
                <p onClick={handleSeeProductClick}>SHOP</p>
              </Link>

              <img
                src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-arrow-right.svg`}
              />
            </ShopContainer>
          </TitleAndShopContainer>
        </CategoryDiv>

        <CategoryDiv>
          <div>
            <Image
              src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/image-category-thumbnail-speakers.png`}
            />
          </div>

          <TitleAndShopContainer>
            <p>SPEAKERS</p>
            <ShopContainer>
              <Link to="/products/speakers">
                <p onClick={handleSeeProductClick}>SHOP</p>
              </Link>
              <img
                src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-arrow-right.svg`}
              />
            </ShopContainer>
          </TitleAndShopContainer>
        </CategoryDiv>

        <CategoryDiv>
          <div>
            <Image
              src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/image-category-thumbnail-earphones.png`}
            />
          </div>

          <TitleAndShopContainer>
            <p>EARPHONES</p>
            <ShopContainer>
              <Link to="/products/earphones">
                <p onClick={handleSeeProductClick}>SHOP</p>
              </Link>
              <img
                src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-arrow-right.svg`}
              />
            </ShopContainer>
          </TitleAndShopContainer>
        </CategoryDiv>
      </CategoryContainer>
    </Modal>
  );
}

export default Category;

const Modal = styled.div< {paddingTop?: string }>`
  left: 0;
  top: 105px;
  width: 100%;
  background-color: white;
`;
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
  width: 87%;
  margin: auto;
  margin-top: 84px;
  padding-bottom: 35px;
  background-color: white;
  @media (min-width: 1440px){
    width: 77%;
    flex-direction: row;
    gap: 30px;
    margin-top: 200px;
    padding-bottom: 168px;
  }
`;

const CategoryDiv = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  text-align: center;
  position: relative;
  @media (min-width: 1440px){
    width: 350px;
  }
`;

const ShopContainer = styled.div`
  display: flex;
  gap: 13px;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
  padding-bottom: 22px;
  p {
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  a {
    text-decoration: none;
  }
`;

const CategoryPictures = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  transform: translate(-50%, -30%);
  width: 140px;
  height: 120px;
`;

const TitleAndShopContainer = styled.div`
  padding-top: 88px;
`;
