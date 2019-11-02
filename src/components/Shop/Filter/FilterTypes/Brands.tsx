import React from "react";
import { getBrand } from "../../../getTypes";
interface Props {
  products: [];
}

const Brands: React.FC<Props> = ({ products }) => {
  const brands = getBrand(products);
  return (
    <>
      <label>Brand</label>
      <select>
        <option value="">Choose here..</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </>
  );
};

export default Brands;
