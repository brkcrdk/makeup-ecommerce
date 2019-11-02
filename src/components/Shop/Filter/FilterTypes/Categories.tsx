import React from "react";
import { getCategory } from "../../../getTypes";
import Selectbox from "../../../UI/Selectbox/Selectbox";
interface Props {
  products: [];
  isLoading: boolean;
}

const Categories: React.FC<Props> = ({ products, isLoading }) => {
  const categories = getCategory(products);
  return (
    <Selectbox
      options={categories}
      label="Categories :"
      defaultValue={`${isLoading ? "Loading.." : "Choose here."}`}
    />
  );
};

export default Categories;
