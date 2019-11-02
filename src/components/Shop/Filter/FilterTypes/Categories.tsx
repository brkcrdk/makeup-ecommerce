import React from "react";
import { getCategory } from "../../../getTypes";

interface Props {
  products: [];
}

const Categories: React.FC<Props> = ({ products }) => {
  const categories = getCategory(products);
  return (
    <select>
      <label>Choose category:</label>
      <option>Category</option>
    </select>
  );
};

export default Categories;
