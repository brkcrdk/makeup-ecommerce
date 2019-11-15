import React from "react";
import { IProducts } from "../../../../store/fetchProducts/types";
import { Link } from "react-router-dom";
import {
  Container,
  CartHeader,
  CartImg,
  CartInfo,
  CartName,
  CartPrice,
  CartBottom,
  Splitter,
  ItemContainer
} from "./ItemStyle";
import { Remove, Decrement, Increment } from "../../../UI/Buttons/Button";
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
          <Remove product={item.product} />
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
