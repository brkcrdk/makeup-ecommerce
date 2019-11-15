import React, { useCallback } from "react";
import { IProducts } from "../../../../store/fetchProducts/types";
import { removeCart } from "../../../../store/cart/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  CartHeader,
  CartImg,
  CartInfo,
  CartName,
  CartRemove,
  CartPrice,
  CartBottom,
  Splitter,
  ItemContainer
} from "./ItemStyle";
import Increment from "../../../UI/Buttons/Increment";
import Decrement from "../../../UI/Buttons/Decrement";
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
            <CartName>
              <Link to={`/product/${item.product.id}`}>
                {item.product.name}
              </Link>
            </CartName>
            <CartPrice>
              <Decrement product={item.product} />
              {item.count}
              <Increment product={item.product} />
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
      <ItemContainer>{renderCart}</ItemContainer>
      <CartBottom>
        <CartHeader>Total: ${totalPrice}</CartHeader>
        <button>View Cart</button>
      </CartBottom>
    </>
  );
};

export default CartItem;
