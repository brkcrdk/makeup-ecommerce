import React, { useCallback } from "react";
import { getType } from "../../../getTypes";
import { searchFilter } from "../../../../store/searchFilter/action";
interface Props {
  products: [];
}

const Types: React.FC<Props> = ({ products }) => {
  const types = getType(products);
  return (
    <>
      <label>Product Type: </label>
      <select>
        <option value="">Choose here..</option>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
};

export default Types;
