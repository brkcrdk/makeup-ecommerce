import React from "react";
import { getCategory } from "../../../getTypes";

interface Props {
  products: [];
}

const Categories: React.FC<Props> = ({ products }) => {
  const categories = getCategory(products);
  return (
    <>
      <label>Category:</label>
      <select>
        <option value="">Choose here..</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default Categories;
