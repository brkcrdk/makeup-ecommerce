import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../../store/cart/actions";
import { colours } from "../../utils";
import styled from "styled-components";
interface Props {
  product: {};
}
const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${colours.primaryText};
  &:hover {
    color: ${colours.pink};
  }
`;

const Decrement: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const handleIncrement = useCallback(() => {
    dispatch(updateCart({ product: product, update: "decrement" }));
  }, [dispatch, product]);

  return (
    <Button onClick={handleIncrement}>
      <i className="fas fa-minus" />
    </Button>
  );
};

export default Decrement;
