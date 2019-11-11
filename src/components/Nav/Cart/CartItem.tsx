import React, { useCallback } from "react";
import styled from "styled-components";
import { colours } from "../../utils";
import { IProducts } from "../../../store/fetchProducts/types";
import { removeCart } from "../../../store/cart/actions";
import { useDispatch } from "react-redux";
const Container = styled.div`
  display: flex;
  margin-top: -1em;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;
const CartHeader = styled.h4`
  padding-bottom: 0.5em;
`;
const CartImg = styled.img`
  width: 3em;
  height: 3em;
`;
const CartInfo = styled.div`
  width: 95%;
  padding: 1em;
  font-size: 1em;
  display: grid;
  grid-gap: 0.2em;
  button {
    background: transparent;
    border: none;
    padding: 0.5em;
    margin: 0.5em;
    outline: none;
  }
`;
const CartName = styled.h4``;
const CartPrice = styled.p`
  margin-top: -1em;
  text-align: left;
`;
const CartRemove = styled.button`
  margin-right: 0.3em;
  text-align: right;
  background-color: transparent;
  font-size: 1.1em;
  border: none;
  outline: none;
  color: ${colours.primaryText};
  cursor: pointer;
  &:hover {
    color: ${colours.pink};
  }
`;
const Splitter = styled.hr`
  margin-top: -1em;
  width: 95%;
  border: 0.5px solid ${colours.secondaryText};
`;

interface Props {
  cart: { product: IProducts; count: number }[];
}

const CartItem: React.FC<Props> = ({ cart }) => {
  const totals = cart.map((item) => {
    const price = parseFloat(item.product.price);
    return price * item.count;
  });
  const totalPrice = totals.reduce((sum, next) => {
    return (sum = sum + next);
  });
  const dispatch = useDispatch();
  const handleRemove = useCallback(
    (product) => {
      dispatch(removeCart({ product: product }));
    },
    [dispatch]
  );
  const renderCart = cart.map((item, key) => {
    const price = parseFloat(
      item.product.price === null ? "10" : item.product.price
    );
    return (
      <div key={key}>
        <Container>
          <CartImg
            src={item.product.api_featured_image}
            alt={`cart-${item.product.name}`}
          />
          <CartInfo>
            <CartName>{item.product.name}</CartName>
            <CartPrice>
              <button>
                <i className="fas fa-minus" />
              </button>
              {item.count}
              <button>
                <i className="fas fa-plus" />
              </button>
              x ${price} = ${item.count * price}
            </CartPrice>
          </CartInfo>
          <CartRemove
            onClick={() => {
              handleRemove(item.product);
            }}>
            <i className="fas fa-trash" />
          </CartRemove>
        </Container>
        <Splitter />
      </div>
    );
  });

  return (
    <>
      <CartHeader>My Shopping Cart</CartHeader>
      <Splitter />
      {renderCart}
      <CartHeader>Total: ${totalPrice.toFixed(2)}</CartHeader>
      <Splitter />
      <button>View Cart</button>
    </>
  );
};

export default CartItem;
