import React from "react";
import { Container } from "./ProductStyle";
import { IProduct } from "../../../store/fetchProduct/types";
import Pagination from "../../UI/Pagination/Pagination";
import Card from "../../UI/Card/Card";
import { Link } from "react-router-dom";
interface Props {
  products: IProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  if (isLoading)
    return (
      <Container>
        <h3>Loading.. please wait.</h3>
      </Container>
    );
  return (
    <Container>
      <Pagination>
        {products.map((product, index) => (
          <Link to={`/product/${product.id}`}>
            <Card
              key={index}
              title={product.brand}
              image={product.api_featured_image}
              name={product.name}
              price={product.price}
              priceSign={product.price_sign}
            />
          </Link>
        ))}
      </Pagination>
    </Container>
  );
};

export default ProductList;
