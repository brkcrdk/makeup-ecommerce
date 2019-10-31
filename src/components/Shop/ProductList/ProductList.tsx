import React from "react";
import { Container } from "./ProductStyle";
import { IProduct } from "../../../store/fetchProduct/types";
import Pagination from "../../UI/Pagination/Pagination";
import Card from "../../UI/Card/Card";
interface Props {
  products: IProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  if (isLoading)
    return (
      <Container>
        <h4>Loading.. please wait.</h4>
      </Container>
    );
  return (
    <Container>
      <Pagination>
        {products.map((product, index) => (
          // <li>{product.name}</li>
          <Card
            key={index}
            title={product.brand}
            image={product.api_featured_image}
            name={product.name}
            price={product.price}
            priceSign={product.price_sign}
          />
        ))}
      </Pagination>
    </Container>
  );
};

export default ProductList;
