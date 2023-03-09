import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ProductProps, ProductType } from "./types";
import { ProductButton } from "./styles";

function YouMaYLike({ data }: ProductProps) {
  const { slug } = useParams();
  const result = data.find((item: ProductType) => item.slug === slug);
  return (
    <div>
      <Title>YOU MAY ALSO LIKE</Title>
      <Container>
        {result &&
          Object.entries(result.others).map(([key, value]) => (
            <AlsoLikeContainer key={key}>
              <ImgContainer>
                <Img
                  src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/shared/${value.image.mobile}`}
                />
              </ImgContainer>
              <TitleAndButtonContainer>
                <p>{value.name}</p>
                <Link to={`/products/${value.slug}/detail`}>
                  <ProductButton>SEE PRODUCT</ProductButton>
                </Link>
              </TitleAndButtonContainer>
            </AlsoLikeContainer>
          ))}
      </Container>
    </div>
  );
}

export default YouMaYLike;

const Title = styled.h2`
  width: 87%;
  margin: auto;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #000000;
  padding-top: 100px;
  padding-bottom: 40px;
`;

const Container = styled.div`
  width: 87%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 8px;
`;

const AlsoLikeContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const ImgContainer = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  max-width: 120px;
  height: 120px;
`;

const TitleAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  p {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 1.71429px;
    text-transform: uppercase;
    color: #000000;
  }
`;
