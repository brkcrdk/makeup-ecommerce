import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { addCart, updateCart, removeCart } from "../../store/cart/actions";
import { useDispatch } from "react-redux";
interface Props {
  product: {};
}
const Container = styled.div`
  button {
    background-color: transparent;
    border: none;
    &:last-child {
      background-color: red;
    }
  }
  input {
  }
`;
const AddCart: React.FC<Props> = ({ product }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleCart = useCallback(() => {
    dispatch(addCart({ product: product, count: count }));
  }, [dispatch, product, count]);

  return (
    <Container>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        <i className="fas fa-plus" />
      </button>
      <input value={count} readOnly />
      <button
        onClick={() => {
          if (count > 1) {
            setCount(count - 1);
          }
        }}>
        <i className="fas fa-minus" />
      </button>
      <button onClick={handleCart}>Add to Cart</button>
    </Container>
  );
};

export default AddCart;
