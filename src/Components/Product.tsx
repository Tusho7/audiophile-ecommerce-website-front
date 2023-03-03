import { useParams } from "react-router-dom";
import styled from "styled-components";
import Category from "./Category";
import Navigation from "./Navigation";
import { Line } from "./styles";
import { ProductProps, ProductType } from "./types";

function Product({ data }: ProductProps) {
  const { id } = useParams<{ id?: string }>();
  const product = data.filter(
    (product: ProductType) => parseInt(id ?? "0") === product.id
  );
  console.log(product);

  return (
    <div>
      <Navigation />
      <Line />

      <CategoryContainer>
        <h2>{product[0]?.category}</h2>
      </CategoryContainer>

      {product.map((product: ProductType) => (
        <Container key={product.id}>
          <Img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/${product.image.mobile}`}
          />

          <div>
            {product.new && <h2>NEW PRODUCT</h2>}
            <p>{product.name}</p>
            <p>{product.description}</p>
            <button>SEE PRODUCT</button>
          </div>
        </Container>
      ))}
    </div>
  );
}

export default Product;

const CategoryContainer = styled.div`
  width: 100%;
  text-transform: uppercase;
  padding: 32px 84px;
  background-color: #191919;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 87%;
  margin: auto;
  border-radius: 8px;
  margin-top: 64px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
