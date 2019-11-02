import React, { useCallback } from "react";
import { getType } from "../../../getTypes";
import Selectbox from "../../../UI/Selectbox/Selectbox";
import { searchFilter } from "../../../../store/searchFilter/action";
interface Props {
  products: [];
  isLoading: boolean;
}

const Types: React.FC<Props> = ({ products, isLoading }) => {
  const types = getType(products);
  return (
    <Selectbox
      options={types}
      label="Types :"
      defaultValue={`${isLoading ? "Loading.." : "Choose here"}`}
    />
  );
};

export default Types;
