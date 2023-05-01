import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import BestGear from "./BestGear";
import Category from "./Category";
import Navigation from "./Navigation";
import { Line, ProductButton } from "./styles";
import { ProductProps, ProductType } from "./types";

function Product({ data }: ProductProps) {
  const { category = "" } = useParams<{ category?: string }>();
  const filteredData = data.filter((item) => item.category === category);
  if (!category) {
    return (
      <div>
        <h2>No Products Found</h2>
      </div>
    );
  }

  const handleSeeProductClick = () => {
    window.scrollTo(0, 0);
  };

  
  return (
    <div>
      <Navigation />
      <Line />
      <TitleContainer>
        <H2>{category.toUpperCase()}</H2>
      </TitleContainer>

      {filteredData.length > 0 &&
        filteredData.map((product: ProductType, index: number) => (
          <ProductsContainer key={product.id} reverse={index % 2 === 1}>
            <div>

            <ProductImg
              src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/${product.image.mobile}`}
            />
            </div>
            <ProductDescriptionContainer>
              {product.new && <NewProduct>NEW PRODUCT</NewProduct>}
              <ProductTitle>{product.name}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <Link to={`/products/${product.slug}/detail`}>
                <ProductButton onClick={handleSeeProductClick}>SEE PRODUCT</ProductButton>
              </Link>
            </ProductDescriptionContainer>
          </ProductsContainer>
        ))}

      <Category isInsideDetail={false}/>
      <BestGear />
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

const ProductsContainer = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-top: 64px;
  @media (min-width: 1440px){
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    gap: 125px;
    padding-left: 165px;
    padding-right: 165px;
    margin-top: 160px;
  }
`;

const ProductImg = styled.img`
  width: 327px;
  height: 357px;
  border-radius: 8px;
  @media (min-width: 1440px){
    width: 540px;
    height: 560px;
  }
`;

const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media (min-width: 1440px){
    align-items: flex-start;
  }
`;

const NewProduct = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #d87d4a;
  @media (min-width: 1440px){
    text-align: left;
  }
`;

const ProductTitle = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  @media (min-width: 1440px){
    text-align: left;
    font-size: 40px;
line-height: 44px;
  }
`;

const ProductDescription = styled.p`
  width: 87%;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 1440px){
    text-align: left;
  }
`;
