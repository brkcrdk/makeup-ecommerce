import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { colours, fonts } from "../utils";
import { addCart } from "../../store/cart/actions";
import { useDispatch } from "react-redux";
interface Props {
  product: {};
  price: string;
}
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1em;
  h3 {
    font-family: ${fonts.raleway};
    color: ${colours.primaryText};
    font-size: 1.5em;
  }
  div:last-child {
    margin-left: 1em;
  }
  button {
    font-family: ${fonts.aBeeZee};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    i {
      color: ${colours.primaryText};
    }
    &:last-child {
      border: 1px solid ${colours.pink};
      color: ${colours.primaryText};
      padding: 0.5em;
      margin-left: 0.5em;
      font-size: 1.1em;
      transition: 0.3s;
      &:hover {
        background-color: ${colours.pink};
        color: white;
      }
    }
  }
  input {
    color: ${colours.primaryText};
    font-family: ${fonts.aBeeZee};
    width: 2em;
    height: 2em;
    text-align: center;
    font-size: 1.5em;
    margin: 0 0.5em;
    cursor: context-menu;
  }
`;
const AddCart: React.FC<Props> = ({ product, price }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleCart = useCallback(() => {
    dispatch(addCart({ product: product, count: count }));
  }, [dispatch, product, count]);

  return (
    <Container>
      <div>
        <h3>$ {price}</h3>
      </div>
      <div>
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
      </div>
    </Container>
  );
};

export default AddCart;
