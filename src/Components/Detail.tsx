import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";
import { ProductProps, ProductType } from "./types";

function Detail({ data }: ProductProps) {
  const { slug } = useParams<{ slug: string }>();
  const result = data.find((item: ProductType) => item.slug === slug);

  if (!result) {
    return (
      <div>
        <h2>Product Not Found</h2>
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <p>Go Back</p>

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
              <p>fas</p>
              <p>2</p>
              <p>2</p>
            </QuantityCont>
            <AddToCartButton>Add to cart</AddToCartButton>
          </QuantityAndButton>
        </ProductInfo>
      </DetailContainer>
    </div>
  );
}

export default Detail;

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
  width: 87%;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
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
