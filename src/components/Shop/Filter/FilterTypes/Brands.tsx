import React from "react";
import { getBrand } from "../../../getTypes";
interface Props {
  products: [];
}

const Brands: React.FC<Props> = ({ products }) => {
  const brands = getBrand(products);
  return (
    <select>
      <label>Choose brand:</label>
      <option>Brands</option>
    </select>
  );
};

export default Brands;
