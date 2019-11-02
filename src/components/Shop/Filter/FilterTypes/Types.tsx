import React, { useCallback } from "react";
import { getType } from "../../../getTypes";
import { searchFilter } from "../../../../store/searchFilter/action";
interface Props {
  products: [];
}

const Types: React.FC<Props> = ({ products }) => {
  const types = getType(products);
  return (
    <select>
      <label>Product Type: </label>
      <option value="">Select Type</option>
      {types.map((type, index) => (
        <option key={index} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};

export default Types;
