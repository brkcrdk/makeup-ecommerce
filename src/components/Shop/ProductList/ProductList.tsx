import React from "react";
import { IProduct } from "../../../store/fetchProduct/types";
import Pagination from "../../UI/Pagination/Pagination";
interface Props {
  products: IProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <Pagination>
      {products.map((product, index) => (
        <li>{product.name}</li>
      ))}
    </Pagination>
  );
};

export default ProductList;
