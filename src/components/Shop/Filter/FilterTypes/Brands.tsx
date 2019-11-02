import React from "react";
import { getBrand } from "../../../getTypes";
import { useDispatch } from "react-redux";
import Selectbox from "../../../UI/Selectbox/Selectbox";
interface Props {
  products: [];
  isLoading: boolean;
}

const Brands: React.FC<Props> = ({ products, isLoading }) => {
  const brands = getBrand(products);
  return (
    <Selectbox
      options={brands}
      label="Brands :"
      defaultValue={`${isLoading ? "Loading.." : "Choose here."}`}
      onChange={}
    />
  );
};

export default Brands;
