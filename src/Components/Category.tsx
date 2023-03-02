import styled from "styled-components";

function Category() {
  return (
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
            <p>SHOP</p>
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
            <p>SHOP</p>
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
            <p>SHOP</p>
            <img
              src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/Icons/icon-arrow-right.svg`}
            />
          </ShopContainer>
        </TitleAndShopContainer>
      </CategoryDiv>
    </CategoryContainer>
  );
}

export default Category;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 68px;
  width: 87%;
  margin: auto;
  margin-top: 92px;
`;

const CategoryDiv = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  text-align: center;
  position: relative;
`;

const ShopContainer = styled.div`
  display: flex;
  gap: 13px;
  justify-content: center;
  align-items: center;
  margin-top: 17px;
  padding-bottom: 22px;
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
