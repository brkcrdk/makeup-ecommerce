import React from "react";
import { Container } from "./ProductStyle";
import { IProduct } from "../../../store/fetchProduct/types";
import Pagination from "../../UI/Pagination/Pagination";
interface Props {
  products: IProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <Container>
      <Pagination>
        {products.map((product, index) => (
          <li>{product.name}</li>
        ))}
      </Pagination>
    </Container>
  );
};

export default ProductList;
