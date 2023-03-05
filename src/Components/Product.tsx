import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import { Line } from "./styles";
import { ProductProps, ProductType } from "./types";

function Product({ category, data }: ProductProps) {
  const filteredData = data.filter((item) => item.category === category);
  console.log(filteredData);
  return (
    <div>
      <Navigation />
      <Line />
      <TitleContainer>
        <H2>{category.toUpperCase()}</H2>
      </TitleContainer>

      {filteredData.map((product: ProductType) => (
        <ProductsContainer key="">
          <ProductImg
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/${product.image.mobile}`}
          />
          <div>
            {product.new && <p>NEW PRODUCT</p>}
            <h1>{product.name}</h1>
          </div>
        </ProductsContainer>
      ))}
    </div>
  );
}

export default Product;

const TitleContainer = styled.div`
  background-color: #191919;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  padding-top: 32px;
  padding-bottom: 32px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

const ProductImg = styled.img`
  width: 327px;
  height: 357px;
  border-radius: 8px;
`;
