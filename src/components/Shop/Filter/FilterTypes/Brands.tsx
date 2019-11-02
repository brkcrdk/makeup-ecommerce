import React from "react";
import { getBrand } from "../../../getTypes";
interface Props {
  products: [];
}

const Brands: React.FC<Props> = ({ products }) => {
  const brands = getBrand(products);
  return (
    <>
      <label>Choose brand:</label>
      <select>
        <option>Brands</option>
      </select>
    </>
  );
};

export default Brands;
