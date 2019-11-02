import React from "react";
import { getCategory } from "../../../getTypes";
import Selectbox from "../../../UI/Selectbox/Selectbox";
interface Props {
  products: [];
}

const Categories: React.FC<Props> = ({ products }) => {
  const categories = getCategory(products);
  return <Selectbox options={categories} label="Categories :" />;
};

export default Categories;
