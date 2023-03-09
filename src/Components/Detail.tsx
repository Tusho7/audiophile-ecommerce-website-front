import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BestGear from "./BestGear";
import Category from "./Category";
import Navigation from "./Navigation";
import { ProductProps, ProductType } from "./types";
import YouMayLike from "./YouMayLike";
import YouMaleLike from "./YouMayLike";

function Detail({ data }: ProductProps) {
  const { slug } = useParams<{ slug: string }>();
  const result = data.find((item: ProductType) => item.slug === slug);
  const [quantity, setQuantity] = useState(1);

  if (!result) {
    return (
      <div>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return;
    }
  };

  const increase = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <Navigation />
      <GoBack>Go Back</GoBack>

      <DetailContainer>
        <ProductImg
          src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/${result.image.mobile}`}
        />
        <ProductInfo>
          {result.new && <NewProduct>NEW PRODUCT</NewProduct>}
          <ProductTitle>{result.name}</ProductTitle>
          <ProductDescription>{result.description}</ProductDescription>
          <Price>{`$ ${result.price.toLocaleString()}`}</Price>
          <QuantityAndButton>
            <QuantityCont>
              <IncreaseDecreaseButton onClick={decrease}>
                -
              </IncreaseDecreaseButton>
              <p>{quantity}</p>
              <IncreaseDecreaseButton onClick={increase}>
                +
              </IncreaseDecreaseButton>
            </QuantityCont>
            <AddToCartButton>Add to cart</AddToCartButton>
          </QuantityAndButton>

          <FeaturesContainer>
            <FeaturesTitle>FEATURES</FeaturesTitle>
            <FeaturesText>{result.features}</FeaturesText>

            <h3>IN THE BOX</h3>
            <div>
              {Object.entries(result.includes).map(([key, value]) => (
                <IncludesCont>
                  <Quantity key={key}>{value.quantity + "x"}</Quantity>
                  <Item>{value.item}</Item>
                </IncludesCont>
              ))}
            </div>
          </FeaturesContainer>
        </ProductInfo>
      </DetailContainer>
      <YouMayLike data={data} />
      <Category />
      <BestGear />
    </div>
  );
}

export default Detail;

const GoBack = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  padding-top: 16px;
  padding-left: 24px;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 24px;
`;

const ProductImg = styled.img`
  width: 87%;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  width: 87%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
`;

const NewProduct = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #d87d4a;
`;

const ProductTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
`;

const ProductDescription = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const QuantityAndButton = styled.div`
  width: 87%;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const QuantityCont = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #f1f1f1;
  padding: 15px;
  border-radius: 8px;

  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
`;

const IncreaseDecreaseButton = styled.button`
  border: none;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.25;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000;

  span {
    display: inline-block;
    margin-left: 5px;
  }
`;

const AddToCartButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: #d87d4a;
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #ffffff;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FeaturesTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #000000;
`;

const FeaturesText = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const IncludesCont = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 8px;
  align-items: center;
`;

const Quantity = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #d87d4a;
`;

const Item = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
