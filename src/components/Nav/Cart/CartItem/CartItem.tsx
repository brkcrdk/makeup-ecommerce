import React, { useCallback } from "react";
import { IProducts } from "../../../../store/fetchProducts/types";
import { removeCart, updateCart } from "../../../../store/cart/actions";
import { useDispatch } from "react-redux";
import {
  Container,
  CartHeader,
  CartImg,
  CartInfo,
  CartName,
  CartRemove,
  CartPrice,
  CartBottom,
  Splitter
} from "./ItemStyle";
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

  const handleIncrement = useCallback(
    (product) => {
      dispatch(updateCart({ product: product, update: "increment" }));
    },
    [dispatch]
  );
  const handleDecrement = useCallback(
    (product) => {
      dispatch(updateCart({ product: product, update: "decrement" }));
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
              <button
                onClick={() => {
                  handleDecrement(item.product);
                }}>
                <i className="fas fa-minus" />
              </button>
              {item.count}
              <button
                onClick={() => {
                  handleIncrement(item.product);
                }}>
                <i className="fas fa-plus" />
              </button>
              x${price} = ${item.count * price}
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
      <CartBottom>
        <CartHeader>Total: ${totalPrice.toFixed(2)}</CartHeader>
        <button>View Cart</button>
      </CartBottom>
    </>
  );
};

export default CartItem;
