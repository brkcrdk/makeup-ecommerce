import React, { useCallback } from "react";
import styled from "styled-components";
import { addCart } from "../../store/cart/actions";
import { useDispatch } from "react-redux";
interface Props {
  product: {};
}
const Container = styled.div``;
const AddCart: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const handleCart = useCallback(() => {
    dispatch(addCart({ product: product, count: 2 }));
  }, [dispatch, product]);
  const updateCart = useCallback(() => {
    dispatch(addCart({ product: product, count: 17 }));
  }, [dispatch, product]);
  return (
    <Container>
      <button onClick={handleCart}>add to cart</button>
      <button onClick={updateCart}>update cart</button>
    </Container>
  );
};

export default AddCart;
