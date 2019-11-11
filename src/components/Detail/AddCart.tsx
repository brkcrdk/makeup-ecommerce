import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { colours, fonts } from "../utils";
import { addCart } from "../../store/cart/actions";
import { useDispatch } from "react-redux";
interface Props {
  product: {};
}
const Container = styled.div`
  button {
    font-family: ${fonts.aBeeZee};
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:last-child {
      background-color: ${colours.secondaryText};
      border: 1px solid ${colours.secondaryText};
      padding: 1em;
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
