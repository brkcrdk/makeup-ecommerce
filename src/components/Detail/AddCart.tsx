import React, { useCallback } from "react";
import styled from "styled-components";
import { addCart } from "../../store/cart/actions";
import { useDispatch } from "react-redux";
interface Props {}
const Container = styled.div``;
const AddCart: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const handleCart = useCallback(() => {
    dispatch(addCart({ product: { color: "white" }, count: 2 }));
  }, [dispatch]);
  return (
    <Container>
      <button onClick={handleCart}>add to cart</button>
    </Container>
  );
};

export default AddCart;
