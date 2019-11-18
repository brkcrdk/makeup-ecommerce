import React from "react";
import { Link } from "react-router-dom";
import { IProducts } from "../../../store/fetchProducts/types";
interface Props {
  product: IProducts;
}

const Name: React.FC<Props> = ({ product }) => {
  return <Link to={`/product/${product.id}`}>{product.name}</Link>;
};

export default Name;
