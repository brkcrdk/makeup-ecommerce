import React from "react";
import { useSelector } from "react-redux";
interface Props {
  products: [];
}

const Products: React.FC<Props> = () => {
  return (
    <div>
      <p>Products page</p>
    </div>
  );
};

export default Products;
