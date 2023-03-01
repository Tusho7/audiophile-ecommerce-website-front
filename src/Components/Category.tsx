import styled from "styled-components";

function Category() {
  return (
    <CategoryContainer>
      <CategoryDiv>
        <div>
          <Image
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/image-category-thumbnail-headphones.png`}
          />
        </div>

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
  margin-top: 130px;
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

const Image = styled.img`
  position: absolute;
`;

const TitleAndShopContainer = styled.div`
  padding-top: 88px;
`;
