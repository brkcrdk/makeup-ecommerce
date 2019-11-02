import React, { useCallback } from "react";
import { getType } from "../../../getTypes";
import Selectbox from "../../../UI/Selectbox/Selectbox";
import { searchFilter } from "../../../../store/searchFilter/action";
interface Props {
  products: [];
}

const Types: React.FC<Props> = ({ products }) => {
  const types = getType(products);
  return <Selectbox options={types} label="Types :" />;
};

export default Types;
