import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCart } from "../../../store/cart/actions";
const AddButton = styled.button``;
interface Props {
  product: {};
  count?: number;
}

const AddCart: React.FC<Props> = ({ product, count = 1 }) => {
  const dispatch = useDispatch();
  const handleAdd = useCallback(() => {
    dispatch(addCart({ product: product, count: count }));
  }, [dispatch]);
  return <AddButton onClick={handleAdd}></AddButton>;
};

export default AddCart;
