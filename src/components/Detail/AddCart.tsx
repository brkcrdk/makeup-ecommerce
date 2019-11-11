import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { addCart, updateCart, removeCart } from "../../store/cart/actions";
import { useDispatch } from "react-redux";
interface Props {
  product: {};
}
const Container = styled.div``;
const AddCart: React.FC<Props> = ({ product }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleCart = useCallback(() => {
    dispatch(addCart({ product: product, count: count }));
  }, [dispatch, product, count]);

  // const handleDecrement = useCallback(() => {
  //   dispatch(updateCart({ product: product, update: "decrement" }));
  // }, [dispatch, product]);
  // const handleIncrement = useCallback(() => {
  //   dispatch(updateCart({ product: product, update: "increment" }));
  // }, [dispatch, product]);

  // const handleRemove = useCallback(() => {
  //   dispatch(removeCart({ product: product }));
  // }, [dispatch]);

  return (
    <Container>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        +
      </button>
      <input value={count} readOnly />
      <button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}>
        -
      </button>
      <button onClick={handleCart}>Add to Cart</button>
      {/* <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button> */}
      {/* <button onClick={handleRemove}>Remove</button> */}
    </Container>
  );
};

export default AddCart;
