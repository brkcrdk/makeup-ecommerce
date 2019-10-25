import React from "react";
import { IProduct } from "../../../store/fetchProduct/types";
interface Props {
  products: IProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {products.map((product, index) => (
        <li>{product.name}</li>
      ))}
    </div>
  );
};

export default ProductList;
