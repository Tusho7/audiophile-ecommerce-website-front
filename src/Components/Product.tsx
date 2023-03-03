import { useParams } from "react-router-dom";
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

      <div>
        <h2>{product[0]?.category}</h2>
      </div>

      {product.map((product: ProductType) => (
        <div key={product.id}>
          <img
            src={`https://audiophile-ecommerce-tunt.onrender.com/allImages/${product.image.mobile}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Product;
