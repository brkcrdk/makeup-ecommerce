import React from "react";
import { getBrand } from "../../../getTypes";
import Selectbox from "../../../UI/Selectbox/Selectbox";
interface Props {
  products: [];
}

const Brands: React.FC<Props> = ({ products }) => {
  const brands = getBrand(products);
  return <Selectbox options={brands} label="Product Type:" />;
};

export default Brands;
